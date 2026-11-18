/* Fortschritt, Speicherung (lokal + claude.ai-Datenbank), Wiederholung (SRS), Spiel-Logik */
(function () {
  var VN = window.VN, U = VN.U;
  var LS_KEY = "duongviet.v1";
  var listeners = [];

  function fresh() {
    return {
      v: 1, createdAt: Date.now(), updatedAt: 0,
      xp: 0, coins: 50,
      daily: {},                 // "YYYY-MM-DD": xp
      streak: { count: 0, last: null, freezes: 1, best: 0 },
      lessons: {},               // id: {done, best, times, last}
      bosses: {},                // chapterId: {won, tries}
      cards: {},                 // id: {at, seen}
      srs: {},                   // vi: {b, due, ok, bad, ch}
      badges: {},                // id: timestamp
      toneBest: 0,
      stats: { answers: 0, correct: 0, perfect: 0, minutes: 0, spoken: 0 },
      settings: { goal: 50, rate: 0.9, south: true, telex: true, voice: "", unlockAll: false, speak: true, theme: "" }
    };
  }
  function merge(base, extra) {
    for (var k in extra) {
      if (extra[k] && typeof extra[k] === "object" && !Array.isArray(extra[k]) && base[k] && typeof base[k] === "object") merge(base[k], extra[k]);
      else base[k] = extra[k];
    }
    return base;
  }

  var store = (VN.store = { state: fresh(), sync: "lokal" });

  function readLocal() {
    try { var raw = localStorage.getItem(LS_KEY); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
  }
  function writeLocal() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store.state)); } catch (e) {}
  }
  var local = readLocal();
  if (local) store.state = merge(fresh(), local);

  // ---------- Synchronisation über claude.ai (nur im Artifact) ----------
  var dbRef = null, dbTimer = null, dbBusy = false, dbDirty = false;
  store.initCloud = function () {
    if (!window.claude || typeof window.claude.use !== "function") return Promise.resolve(false);
    return Promise.all([window.claude.use("db"), window.claude.use("user")]).then(function (r) {
      var db = r[0], user = r[1];
      if (!db || !user) return false;
      return user.id().then(function (id) {
        if (!id) return false;
        dbRef = db.doc("data/users/" + id + "/progress");
        return dbRef.get().then(function (snap) {
          var remote = snap.exists ? snap.data() : null;
          if (remote && remote.state) {
            var rs = typeof remote.state === "string" ? JSON.parse(remote.state) : remote.state;
            if ((rs.updatedAt || 0) > (store.state.updatedAt || 0)) {
              store.state = merge(fresh(), rs);
              writeLocal();
              emit();
            }
          }
          store.sync = "claude.ai";
          if (!remote || (store.state.updatedAt || 0) > ((remote.state && (typeof remote.state === "string" ? JSON.parse(remote.state) : remote.state).updatedAt) || 0)) scheduleCloud(500);
          return true;
        });
      });
    }).catch(function () { return false; });
  };
  function scheduleCloud(ms) {
    if (!dbRef) return;
    dbDirty = true;
    clearTimeout(dbTimer);
    dbTimer = setTimeout(flushCloud, ms == null ? 2500 : ms);
  }
  function flushCloud() {
    if (!dbRef || dbBusy || !dbDirty) return;
    dbBusy = true; dbDirty = false;
    dbRef.set({ state: JSON.stringify(store.state), savedAt: Date.now() })
      .catch(function (e) { if (e && e.code === "unavailable") dbDirty = true; })
      .then(function () { dbBusy = false; if (dbDirty) scheduleCloud(); });
  }
  document.addEventListener("visibilitychange", function () { if (document.hidden) flushCloud(); });

  store.save = function () {
    store.state.updatedAt = Date.now();
    writeLocal();
    scheduleCloud();
    emit();
  };
  store.on = function (fn) { listeners.push(fn); };
  function emit() { listeners.forEach(function (fn) { try { fn(store.state); } catch (e) { console.error(e); } }); }
  store.reset = function () { store.state = fresh(); store.save(); };
  store.exportText = function () { return btoa(unescape(encodeURIComponent(JSON.stringify(store.state)))); };
  store.importText = function (txt) {
    var obj = JSON.parse(decodeURIComponent(escape(atob(String(txt).trim()))));
    if (!obj || obj.v !== 1) throw new Error("Unbekanntes Format");
    store.state = merge(fresh(), obj);
    store.save();
  };

  // ---------- Inhalte ----------
  var C = (VN.content = {});
  C.chapters = function () { return VN.chapters.slice().sort(function (a, b) { return a.id < b.id ? -1 : 1; }); };
  C.chapter = function (id) { return VN.chapters.find(function (c) { return c.id === id; }); };
  C.lesson = function (id) {
    for (var i = 0; i < VN.chapters.length; i++) {
      var l = (VN.chapters[i].lessons || []).find(function (x) { return x.id === id; });
      if (l) return { chapter: VN.chapters[i], lesson: l };
    }
    return null;
  };
  C.allVocab = function () {
    if (C._vocab) return C._vocab;
    var map = {};
    C.chapters().forEach(function (ch) {
      (ch.lessons || []).forEach(function (l) {
        (l.vocab || []).forEach(function (v) { if (!map[v.vi]) map[v.vi] = Object.assign({ ch: ch.id, lesson: l.id }, v); });
      });
    });
    return (C._vocab = map);
  };
  C.card = function (id) { return VN.cards.find(function (c) { return c.id === id; }); };
  C.grammarAll = function () {
    var out = [];
    C.chapters().forEach(function (ch) {
      (ch.lessons || []).forEach(function (l) { (l.grammar || []).forEach(function (g) { out.push({ g: g, lesson: l, chapter: ch }); }); });
    });
    return out;
  };

  // ---------- Fortschrittsabfragen ----------
  var P = (VN.progress = {});
  P.lessonDone = function (id) { var x = store.state.lessons[id]; return !!(x && x.done); };
  P.bossWon = function (chId) { var x = store.state.bosses[chId]; return !!(x && x.won); };
  P.chapterUnlocked = function (ch) {
    if (store.state.settings.unlockAll) return true;
    var list = C.chapters(), i = list.indexOf(ch);
    return i <= 0 || P.bossWon(list[i - 1].id);
  };
  P.lessonUnlocked = function (ch, idx) {
    if (!P.chapterUnlocked(ch)) return false;
    if (store.state.settings.unlockAll) return true;
    return idx === 0 || P.lessonDone(ch.lessons[idx - 1].id);
  };
  P.bossUnlocked = function (ch) {
    if (!P.chapterUnlocked(ch)) return false;
    if (store.state.settings.unlockAll) return true;
    return ch.lessons.every(function (l) { return P.lessonDone(l.id); });
  };
  P.chapterProgress = function (ch) {
    var n = ch.lessons.filter(function (l) { return P.lessonDone(l.id); }).length + (P.bossWon(ch.id) ? 1 : 0);
    return n / (ch.lessons.length + 1);
  };
  P.next = function () {
    var list = C.chapters();
    for (var i = 0; i < list.length; i++) {
      var ch = list[i];
      if (!P.chapterUnlocked(ch)) return null;
      for (var j = 0; j < ch.lessons.length; j++) if (!P.lessonDone(ch.lessons[j].id)) return { type: "lesson", chapter: ch, lesson: ch.lessons[j], idx: j };
      if (!P.bossWon(ch.id)) return { type: "boss", chapter: ch };
    }
    return null;
  };
  P.grammarUnlocked = function (lessonId) {
    if (store.state.settings.unlockAll) return true;
    var info = C.lesson(lessonId);
    if (!info) return false;
    var idx = info.chapter.lessons.indexOf(info.lesson);
    return P.lessonDone(lessonId) || P.lessonUnlocked(info.chapter, idx);
  };

  // ---------- XP, Level, Serie ----------
  var G = (VN.game = {});
  G.RANKS = [
    { lvl: 1, vi: "Khách", de: "Gast" },
    { lvl: 3, vi: "Lữ khách", de: "Reisende/r" },
    { lvl: 5, vi: "Học trò", de: "Schüler/in" },
    { lvl: 8, vi: "Sinh viên", de: "Student/in" },
    { lvl: 11, vi: "Tú tài", de: "Bakkalaureus (unterster Prüfungsgrad)" },
    { lvl: 15, vi: "Cử nhân", de: "Lizentiat (Provinzprüfung)" },
    { lvl: 20, vi: "Tiến sĩ", de: "Doktor (Hofprüfung)" },
    { lvl: 26, vi: "Trạng nguyên", de: "Bester der kaiserlichen Prüfung" }
  ];
  G.levelFor = function (xp) {
    var lvl = 1, need = 60, acc = 0;
    while (xp >= acc + need) { acc += need; lvl++; need = Math.round(60 + (lvl - 1) * 35); }
    return { lvl: lvl, into: xp - acc, need: need };
  };
  G.rank = function (lvl) { var r = G.RANKS[0]; G.RANKS.forEach(function (x) { if (lvl >= x.lvl) r = x; }); return r; };
  G.todayXP = function () { return store.state.daily[U.today()] || 0; };

  // Serie prüfen (beim Start): verpasste Tage mit Freeze überbrücken
  G.checkStreak = function () {
    var s = store.state.streak, today = U.today();
    if (!s.last) return;
    var gap = U.dayDiff(s.last, today);
    if (gap <= 1) return;
    var missed = gap - 1;
    if (s.freezes >= missed) {
      s.freezes -= missed;
      s.last = U.addDays(today, -1);
      U.toast("Serie gerettet: " + missed + " Serienschutz verbraucht.");
    } else {
      s.count = 0;
    }
    store.save();
  };

  var levelUpCb = null;
  G.onLevelUp = function (fn) { levelUpCb = fn; };
  G.addXP = function (n, why) {
    var st = store.state, before = G.levelFor(st.xp).lvl, day = U.today();
    st.xp += n;
    st.daily[day] = (st.daily[day] || 0) + n;
    // Serie: zählt ab 10 XP am Tag
    if (st.daily[day] >= 10 && st.streak.last !== day) {
      var gap = st.streak.last ? U.dayDiff(st.streak.last, day) : 99;
      st.streak.count = gap === 1 ? st.streak.count + 1 : 1;
      st.streak.last = day;
      st.streak.best = Math.max(st.streak.best, st.streak.count);
      if (st.streak.count % 7 === 0) { st.streak.freezes = Math.min(3, st.streak.freezes + 1); U.toast("7 Tage am Stück! +1 Serienschutz"); }
    }
    var after = G.levelFor(st.xp).lvl;
    G.checkBadges();
    store.save();
    if (after > before && levelUpCb) levelUpCb(after);
  };
  G.addCoins = function (n) { store.state.coins += n; store.save(); };

  // ---------- Abzeichen ----------
  G.BADGES = [
    { id: "first", emoji: "🎒", name: "Erste Lektion", test: function (s) { return Object.keys(s.lessons).length >= 1; } },
    { id: "tones", emoji: "🎵", name: "Tonjäger (20 Punkte)", test: function (s) { return s.toneBest >= 20; } },
    { id: "boss1", emoji: "🛂", name: "Erster Stempel", test: function (s) { return Object.keys(s.bosses).some(function (k) { return s.bosses[k].won; }); } },
    { id: "streak7", emoji: "🔥", name: "7 Tage Serie", test: function (s) { return s.streak.best >= 7; } },
    { id: "streak30", emoji: "🏮", name: "30 Tage Serie", test: function (s) { return s.streak.best >= 30; } },
    { id: "words100", emoji: "📗", name: "100 Wörter", test: function (s) { return Object.keys(s.srs).length >= 100; } },
    { id: "words400", emoji: "📚", name: "400 Wörter", test: function (s) { return Object.keys(s.srs).length >= 400; } },
    { id: "perfect", emoji: "💯", name: "Fehlerfreie Lektion", test: function (s) { return s.stats.perfect >= 1; } },
    { id: "speaker", emoji: "🗣️", name: "50× gesprochen", test: function (s) { return s.stats.spoken >= 50; } },
    { id: "cards12", emoji: "🃏", name: "12 Sammelkarten", test: function (s) { return Object.keys(s.cards).length >= 12; } },
    { id: "hue", emoji: "🏯", name: "Halbzeit: Huế", test: function (s) { return !!(s.bosses.k05 && s.bosses.k05.won); } },
    { id: "camau", emoji: "🧭", name: "Ankunft in Cà Mau", test: function (s) { return !!(s.bosses.k12 && s.bosses.k12.won); } },
    { id: "allcards", emoji: "👑", name: "Alle Karten", test: function (s) { return VN.cards.length > 0 && Object.keys(s.cards).length >= VN.cards.length; } },
    { id: "scholar", emoji: "🎓", name: "Rang Tú tài", test: function (s) { return G.levelFor(s.xp).lvl >= 11; } }
  ];
  G.checkBadges = function () {
    var s = store.state, got = [];
    G.BADGES.forEach(function (b) { if (!s.badges[b.id] && b.test(s)) { s.badges[b.id] = Date.now(); got.push(b); } });
    got.forEach(function (b, i) { setTimeout(function () { U.toast(b.emoji + " Abzeichen: " + b.name, 3200); }, 400 + i * 3300); });
    return got;
  };

  // ---------- Karten freischalten ----------
  G.unlockFor = function (key) { // key: lessonId oder kXXboss
    var got = [];
    VN.cards.forEach(function (c) {
      if (c.unlock === key && !store.state.cards[c.id]) { store.state.cards[c.id] = { at: Date.now(), seen: false }; got.push(c); }
    });
    if (got.length) store.save();
    return got;
  };

  // ---------- Wiederholung (Leitner) ----------
  var R = (VN.srs = {});
  R.INTERVALS = [0, 1, 2, 4, 8, 16, 35, 90];
  R.add = function (vocabList, chId) {
    var day = U.today();
    vocabList.forEach(function (v) {
      if (!store.state.srs[v.vi]) store.state.srs[v.vi] = { b: 1, due: U.addDays(day, 1), ok: 0, bad: 0, ch: chId };
    });
  };
  R.grade = function (vi, ok) {
    var it = store.state.srs[vi];
    if (!it) return;
    var day = U.today();
    if (ok) { it.ok++; it.b = Math.min(R.INTERVALS.length - 1, it.b + 1); }
    else { it.bad++; it.b = 1; }
    it.due = U.addDays(day, R.INTERVALS[it.b]);
  };
  R.due = function () {
    var day = U.today(), all = C.allVocab();
    return Object.keys(store.state.srs).filter(function (k) { return all[k] && store.state.srs[k].due <= day; });
  };
  R.weak = function () {
    var all = C.allVocab();
    return Object.keys(store.state.srs).filter(function (k) { var x = store.state.srs[k]; return all[k] && x.bad > 0 && x.bad >= x.ok / 2; });
  };
  R.boxes = function () {
    var out = [0, 0, 0, 0, 0, 0];
    Object.keys(store.state.srs).forEach(function (k) { var b = store.state.srs[k].b; out[Math.min(5, Math.max(0, b - 1 > 4 ? 5 : b - 1))]++; });
    return out;
  };
})();
