/* Bildschirme: Reise, Kapitelblatt, Üben, Grammatik, Sammlung, Profil */
(function () {
  var VN = window.VN, U = VN.U, V = VN.V, S = VN.S, h = U.h;
  var store = VN.store, C = VN.content, P = VN.progress, G = VN.game, R = VN.srs, EX = VN.EX;
  var Views = (VN.views = {});
  var view = document.getElementById("view");
  var sheet = document.getElementById("sheet");

  function sectionTitle(t, right) { return h("div.section-title", null, [h("h2", { text: t }), right || null]); }
  function coord(m) {
    if (!m) return "";
    var f = function (v, p, n) { var d = Math.floor(Math.abs(v)), mm = Math.round((Math.abs(v) - d) * 60); return d + "°" + String(mm).padStart(2, "0") + "′ " + (v >= 0 ? p : n); };
    return f(m.lat, "N", "S") + " · " + f(m.lon, "O", "W");
  }
  function img(ch, cls) {
    var m = VN.meta[ch.id] || {};
    var ph = h("div.ph", { text: ch.place.split(" ")[0].slice(0, 2) });
    if (!m.img) return ph;
    var im = h("img" + (cls ? "." + cls : ""), { src: m.img, alt: ch.place, loading: "lazy" });
    im.addEventListener("error", function () { im.replaceWith(ph); });
    return im;
  }

  // ---------- Kartenumriss ----------
  function minimap(currentId) {
    var k = 8, X = function (lon) { return ((lon - 102) * k).toFixed(1); }, Y = function (lat) { return ((23.6 - lat) * k).toFixed(1); };
    var d = "M" + VN.outline.map(function (p) { return X(p[0]) + " " + Y(p[1]); }).join(" L") + " Z";
    var s = '<svg class="minimap" viewBox="0 0 62 124" role="img" aria-label="Karte von Vietnam mit deiner Position"><path d="' + d + '"/>';
    C.chapters().forEach(function (ch) {
      var m = VN.meta[ch.id]; if (!m) return;
      s += '<circle class="stop' + (P.bossWon(ch.id) ? " done" : "") + '" cx="' + X(m.lon) + '" cy="' + Y(m.lat) + '" r="1.8"/>';
    });
    var cm = VN.meta[currentId];
    if (cm) s += '<circle class="me" cx="' + X(cm.lon) + '" cy="' + Y(cm.lat) + '" r="4"/>';
    return s + "</svg>";
  }

  // ---------- Reise ----------
  Views.reise = function () {
    var chs = C.chapters();
    var nx = P.next();
    var curCh = nx ? nx.chapter : chs[chs.length - 1];
    var wonCount = chs.filter(function (c) { return P.bossWon(c.id); }).length;
    var head = h("div.journey-head", null, [
      h("div", null, [
        h("div.eyebrow", { text: "Hà Nội → Cà Mau · " + wonCount + " von " + chs.length + " Orten" }),
        h("h1", { text: curCh ? "Nächster Halt: " + curCh.place : "Chào mừng!" }),
        h("p", { text: curCh ? curCh.region + " · " + curCh.title : "" })
      ]),
      h("div", { html: minimap(curCh && curCh.id) })
    ]);
    var kids = [head];
    if (nx) {
      var cc = h("div.continue-card", null, [
        h("div", null, [h("div.eyebrow", { text: nx.type === "boss" ? "Boss-Dialog" : "Lektion " + (nx.idx + 1) + " · " + nx.chapter.place }), h("b", { text: nx.type === "boss" ? nx.chapter.boss.title : nx.lesson.title })]),
        h("button.btn", { type: "button", text: "Los" })
      ]);
      cc.querySelector("button").addEventListener("click", function () {
        if (nx.type === "boss") VN.startBoss(nx.chapter, VN.refresh); else VN.startLesson(nx.chapter, nx.lesson, VN.refresh);
      });
      kids.push(cc);
    } else if (chs.length && chs.every(function (c) { return P.bossWon(c.id); })) {
      kids.push(h("div.continue-card", null, [h("div", null, [h("div.eyebrow", { text: "Reise abgeschlossen" }), h("b", { text: "Chúc mừng! Du hast Cà Mau erreicht." })]), h("span", { style: { fontSize: "30px" }, text: "🧭" })]));
    }
    var due = R.due().length;
    if (due) {
      var rv = h("button.lesson-item", { type: "button", style: { marginTop: "10px" } }, [h("span.num", { text: "↻" }), h("span", null, [h("b", { text: due + " Wörter zum Wiederholen" }), h("small", { text: "Kurze Runde gegen das Vergessen" })]), h("span.pill.red", { text: "fällig" })]);
      rv.addEventListener("click", function () { VN.startReview(U.pick(R.due(), 20), VN.refresh); });
      kids.push(rv);
    }
    var route = h("div.route");
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "route-line");
    route.appendChild(svg);
    chs.forEach(function (ch) {
      var m = VN.meta[ch.id] || {};
      var unlocked = P.chapterUnlocked(ch), won = P.bossWon(ch.id);
      var isCur = curCh && ch.id === curCh.id && !won;
      var medal = h("button.medal", { type: "button", "aria-label": ch.place + " öffnen" }, [img(ch), won ? h("span.stamp", { text: "Đã đến" }) : null]);
      var dots = h("div.dots");
      ch.lessons.forEach(function (l) { dots.appendChild(h("i" + (P.lessonDone(l.id) ? ".done" : ""))); });
      dots.appendChild(h("i.boss" + (won ? ".done" : "")));
      var stop = h("div.stop" + (unlocked ? "" : ".locked") + (isCur ? ".current" : ""), null, [
        medal,
        h("div.stop-text", null, [h("div.coord", { text: coord(m) }), h("h3", { text: ch.place }), h("p", { text: ch.title }), dots])
      ]);
      medal.addEventListener("click", function () { Views.chapterSheet(ch); });
      stop.querySelector(".stop-text").addEventListener("click", function () { Views.chapterSheet(ch); });
      route.appendChild(stop);
    });
    kids.push(route);
    if (!chs.length) kids.push(h("p.empty", { text: "Die Lerninhalte werden gerade geladen …" }));
    U.append(view, kids);
    requestAnimationFrame(function () { drawRoute(route, svg); });
    var cur = route.querySelector(".stop.current");
    if (cur && Views._firstReise !== false) { Views._firstReise = false; setTimeout(function () { cur.scrollIntoView({ block: "center" }); }, 60); }
  };
  function drawRoute(route, svg) {
    var rb = route.getBoundingClientRect();
    var pts = U.$$(".medal", route).map(function (m) { var b = m.getBoundingClientRect(); return [b.left - rb.left + b.width / 2, b.top - rb.top + b.height / 2]; });
    svg.setAttribute("viewBox", "0 0 " + rb.width + " " + rb.height);
    svg.innerHTML = "";
    var stops = U.$$(".stop", route);
    for (var i = 1; i < pts.length; i++) {
      var a = pts[i - 1], b = pts[i], my = (a[1] + b[1]) / 2;
      var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", "M" + a[0] + " " + a[1] + " C" + a[0] + " " + my + " " + b[0] + " " + my + " " + b[0] + " " + b[1]);
      if (!stops[i].classList.contains("locked")) p.setAttribute("class", "done");
      svg.appendChild(p);
    }
  }
  window.addEventListener("resize", function () { var r = U.$(".route"); if (r) drawRoute(r, r.querySelector("svg")); });

  // ---------- Bottom-Sheet ----------
  function openSheet(build) {
    U.clear(sheet); sheet.hidden = false;
    var panel = h("div.sheet-panel");
    sheet.appendChild(panel);
    var close = function () { sheet.hidden = true; U.clear(sheet); S.stop(); };
    sheet.onclick = function (e) { if (e.target === sheet) close(); };
    build(panel, close);
    return close;
  }
  Views.openSheet = openSheet;
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !sheet.hidden) { sheet.hidden = true; U.clear(sheet); } });

  Views.chapterSheet = function (ch) {
    openSheet(function (panel, close) {
      var unlocked = P.chapterUnlocked(ch);
      var closeBtn = h("button.icon-btn.close", { type: "button", "aria-label": "Schließen", html: U.svgIcon.close, onclick: close });
      panel.appendChild(h("div.ch-hero", null, [img(ch), h("div.shade"), h("div.cap", null, [h("div.eyebrow", { text: ch.region + " · " + coord(VN.meta[ch.id]) }), h("h2", { text: ch.place }), h("div", { style: { fontWeight: "600" }, text: ch.title })]), closeBtn]));
      var inner = h("div.sheet-inner", { style: { paddingTop: "14px" } });
      panel.appendChild(inner);
      inner.appendChild(h("p", { text: ch.intro }));
      if (!unlocked) inner.appendChild(h("div.note", null, [h("b", { text: "Noch gesperrt" }), "Besiege zuerst den Boss-Dialog am vorigen Ort. (Im Profil kannst du alle Kapitel freischalten.)"]));
      var list = h("div.lesson-list");
      var nx = P.next();
      ch.lessons.forEach(function (l, i) {
        var done = P.lessonDone(l.id), un = P.lessonUnlocked(ch, i);
        var isNext = nx && nx.type === "lesson" && nx.lesson === l;
        var rec = store.state.lessons[l.id];
        var it = h("button.lesson-item" + (done ? ".done" : "") + (isNext ? ".next" : ""), { type: "button", disabled: !un }, [
          h("span.num", { text: done ? "✓" : i + 1 }),
          h("span", null, [h("b", { text: l.title }), h("small", { text: l.goal })]),
          done ? h("span.pill.jade", { text: rec.best + " %" }) : isNext ? h("span.pill.red", { text: "weiter" }) : null
        ]);
        it.addEventListener("click", function () { close(); VN.startLesson(ch, l, VN.refresh); });
        list.appendChild(it);
      });
      var bun = P.bossUnlocked(ch), bwon = P.bossWon(ch.id);
      var boss = h("button.lesson-item.boss", { type: "button", disabled: !bun }, [
        h("span.num", { text: "★" }),
        h("span", null, [h("b", { text: "Boss: " + ch.boss.title }), h("small", { text: ch.boss.npc + " – " + ch.boss.role })]),
        bwon ? h("span.pill.red", { text: "Stempel" }) : null
      ]);
      boss.addEventListener("click", function () { close(); VN.startBoss(ch, VN.refresh); });
      list.appendChild(boss);
      inner.appendChild(list);
      // Karten dieses Kapitels
      var cards = VN.cards.filter(function (c) { return c.chapter === ch.id; });
      if (cards.length) {
        inner.appendChild(sectionTitle("Sammelkarten"));
        var g = h("div.cards-grid");
        cards.forEach(function (c) { g.appendChild(cardTile(c)); });
        inner.appendChild(g);
      }
      inner.appendChild(sectionTitle("Grammatik hier"));
      var gl = h("div.gram-list");
      ch.lessons.forEach(function (l) { (l.grammar || []).forEach(function (gr) { gl.appendChild(gramItem(gr, l, ch)); }); });
      inner.appendChild(gl);
    });
  };

  // ---------- Üben ----------
  Views.ueben = function () {
    var due = R.due(), weak = R.weak();
    var learned = Object.keys(store.state.srs).length;
    var boxes = R.boxes(), max = Math.max.apply(null, boxes.concat([1]));
    var hero = h("button.ptile.hero", { type: "button" }, [
      h("div.row", null, [h("div.grow", null, [h("div.eyebrow", { style: { color: "inherit", opacity: ".7" }, text: "Wiederholung nach Leitner" }), h("div.big", { text: due.length }), h("small", { text: due.length ? "Wörter sind heute fällig. Tippe, um zu starten." : learned ? "Alles wiederholt – morgen geht es weiter." : "Nach deiner ersten Lektion erscheinen hier Wörter." })]), h("span", { style: { fontSize: "34px" }, text: "↻" })]),
      h("div.srs-bars", null, boxes.map(function (n) { return h("div", { style: { height: Math.round(n / max * 100) + "%" }, title: n + " Wörter" }); })),
      h("div.srs-labels", null, ["neu", "1 T", "2 T", "4 T", "8 T", "16+ T"].map(function (t) { return h("span", { text: t }); }))
    ]);
    hero.addEventListener("click", function () { VN.startReview(U.pick(due, 20), VN.refresh); });
    function tile(ico, title, sub, fn, disabled) {
      var t = h("button.ptile", { type: "button", disabled: disabled || null }, [h("span.ico", { text: ico }), h("b", { text: title }), h("small", { text: sub })]);
      t.addEventListener("click", fn);
      return t;
    }
    var learnedList = Object.keys(store.state.srs);
    var doneLessons = [];
    C.chapters().forEach(function (ch) { ch.lessons.forEach(function (l) { if (P.lessonDone(l.id)) doneLessons.push({ ch: ch, l: l }); }); });
    var grid = h("div.practice-grid", null, [
      hero,
      tile("🎵", "Ton-Jäger", "60 Sekunden Töne erkennen. Rekord: " + store.state.toneBest, function () { VN.startToneGame(VN.refresh); }),
      tile("🩹", "Schwache Wörter", weak.length + " Wörter, die oft danebengehen", function () { VN.startReview(U.pick(weak, 20), VN.refresh, "Schwache Wörter"); }, !weak.length),
      tile("👂", "Hörtraining", "Sätze aus deinen Lektionen hören und bauen", function () { listenDrill(doneLessons); }, !doneLessons.length),
      tile("🗣️", "Sprechtraining", "Dialogzeilen nachsprechen", function () { speakDrill(doneLessons); }, !doneLessons.length),
      tile("⌨️", "Schreibtraining", "Wörter mit Tönen tippen (Telex)", function () { typeDrill(learnedList); }, learnedList.length < 4),
      tile("📖", "Mein Wortschatz", learnedList.length + " Wörter gelernt – zum Nachschlagen", function () { vocabSheet(); })
    ]);
    U.append(view, [h("div.eyebrow", { text: "Üben" }), h("h1.display", { style: { fontSize: "34px", margin: "4px 0 16px" }, text: "Ôn tập" }), grid]);
  };
  function listenDrill(done) {
    var items = [];
    done.forEach(function (x) { (x.l.exercises || []).forEach(function (e) { if (e.type === "build" || e.type === "listen") items.push({ type: "listen", vi: e.vi, de: e.de }); }); });
    VN.Player.run({ steps: U.pick(items, 10), kicker: "Hörtraining", onFinish: function (st) { var xp = 4 + st.sessionXP; G.addXP(xp); return { xp: xp }; }, onClose: VN.refresh });
  }
  function speakDrill(done) {
    var items = [];
    done.forEach(function (x) { ((x.l.dialogue || {}).lines || []).forEach(function (ln) { if (ln.vi.split(" ").length <= 10) items.push({ type: "speak", vi: ln.vi, de: ln.de }); }); });
    VN.Player.run({ steps: U.pick(items, 8), kicker: "Sprechtraining", onFinish: function (st) { var xp = 4 + st.sessionXP; G.addXP(xp); return { xp: xp }; }, onClose: VN.refresh });
  }
  function typeDrill(words) {
    var all = C.allVocab();
    var steps = U.pick(words, 12).map(function (k) { return all[k]; }).filter(Boolean).map(function (v) { return { type: "type", v: v }; });
    VN.Player.run({ steps: steps, kicker: "Schreibtraining", grade: function (s, ok) { R.grade(s.v.vi, ok); }, onFinish: function (st) { var xp = 4 + st.sessionXP; G.addXP(xp); return { xp: xp }; }, onClose: VN.refresh });
  }
  function vocabSheet() {
    openSheet(function (panel, close) {
      var all = C.allVocab();
      var inner = h("div.sheet-inner", { style: { paddingTop: "18px" } });
      panel.appendChild(inner);
      var head = h("div.row", null, [h("h2.display.grow", { style: { fontSize: "28px" }, text: "Mein Wortschatz" }), h("button.icon-btn", { type: "button", html: U.svgIcon.close, "aria-label": "Schließen", onclick: close })]);
      var q = h("input.search", { type: "search", placeholder: "Suchen (vi oder de) …", "aria-label": "Wortschatz durchsuchen" });
      var list = h("div.gram-list", { style: { marginTop: "12px" } });
      var keys = Object.keys(store.state.srs).filter(function (k) { return all[k]; });
      var showAll = store.state.settings.unlockAll;
      if (showAll) keys = Object.keys(all);
      function render() {
        U.clear(list);
        var t = V.keyLoose(q.value || "");
        var res = keys.filter(function (k) { var v = all[k]; return !t || V.keyLoose(v.vi).indexOf(t) >= 0 || v.de.toLowerCase().indexOf((q.value || "").toLowerCase()) >= 0; }).slice(0, 200);
        if (!res.length) list.appendChild(h("p.empty", { text: keys.length ? "Nichts gefunden." : "Noch keine Wörter gelernt." }));
        res.forEach(function (k) {
          var v = all[k], box = (store.state.srs[k] || {}).b;
          var row = h("div.gram-item", null, [h("div", null, [h("b", { html: V.colorize(v.vi) }), h("small", { text: v.de + (v.south ? " · Süd: " + v.south : "") })]), h("div.row", null, [box ? h("span.pill" + (box >= 5 ? ".jade" : ""), { text: "Stufe " + box }) : null, S.button(v.vi)])]);
          list.appendChild(row);
        });
      }
      q.addEventListener("input", render);
      U.append(inner, [head, q, list]);
      render();
    });
  }

  // ---------- Grammatik ----------
  function gramItem(g, l, ch) {
    var un = P.grammarUnlocked(l.id);
    var it = h("button.gram-item" + (un ? "" : ".locked"), { type: "button" }, [
      h("div", null, [h("b", { text: g.title }), h("small", { text: g.term + (un ? "" : " · noch nicht gelernt") })]),
      h("span.pill", { text: ch.id.toUpperCase() })
    ]);
    it.addEventListener("click", function () { gramSheet(g, l, ch); });
    return it;
  }
  function gramSheet(g, l, ch) {
    openSheet(function (panel, close) {
      var inner = h("div.sheet-inner", { style: { paddingTop: "16px" } });
      panel.appendChild(inner);
      U.append(inner, [
        h("div.row", null, [h("div.eyebrow.grow", { text: ch.place + " · " + l.title }), h("button.icon-btn", { type: "button", html: U.svgIcon.close, "aria-label": "Schließen", onclick: close })]),
        EX.grammarView(g, false)
      ]);
    });
  }
  Views.grammatik = function () {
    var q = h("input.search", { type: "search", placeholder: "Suche: Klassifikator, đã, Anrede …", "aria-label": "Grammatik durchsuchen" });
    var box = h("div");
    // Tontafel
    var toneTbl = h("div.card", { style: { marginTop: "14px" } }, [
      h("div.eyebrow", { text: "Referenz" }),
      h("h3", { style: { fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "22px", margin: "4px 0 10px" }, text: "Die sechs Töne (Hà Nội)" }),
      h("div.tone-grid", null, V.TONES.map(function (t, i) {
        var syl = V.placeTone("ma", i);
        var b = h("button.tone-btn", { type: "button", style: { "--tc": t.color }, html: V.toneGlyph(i) + "<b>" + syl + "</b><small>" + t.name + " · " + t.chao + "</small>" });
        b.addEventListener("click", function () { S.speak(syl); });
        return b;
      })),
      h("p.muted", { style: { fontSize: "13px", marginTop: "10px" }, text: "ma (Geist) · mà (aber) · má (Mama, Süd/Wange) · mả (Grab) · mã (Pferd, sinoviet.; Code) · mạ (Reissetzling). Chao-Ziffern: 1 = tief, 5 = hoch; ʔ = Glottalisierung." })
    ]);
    function render() {
      U.clear(box);
      var t = (q.value || "").toLowerCase().trim();
      var tl = V.keyLoose(t);
      var all = C.grammarAll();
      var lastCh = null;
      var n = 0;
      all.forEach(function (x) {
        var hay = (x.g.title + " " + x.g.term + " " + (x.g.pattern || "") + " " + x.g.text).toLowerCase();
        if (t && hay.indexOf(t) < 0 && V.keyLoose(hay).indexOf(tl) < 0) return;
        if (lastCh !== x.chapter) { lastCh = x.chapter; box.appendChild(h("div.gram-ch", null, [h("h3", { text: x.chapter.place }), h("span.muted", { text: x.chapter.title })])); }
        box.appendChild(gramItem(x.g, x.lesson, x.chapter));
        n++;
      });
      if (!n) box.appendChild(h("p.empty", { text: "Keine Treffer." }));
    }
    q.addEventListener("input", render);
    U.append(view, [h("div.eyebrow", { text: "Grammatik & Satzbau" }), h("h1.display", { style: { fontSize: "34px", margin: "4px 0 14px" }, text: "Ngữ pháp" }), q, toneTbl, box]);
    render();
  };

  // ---------- Sammlung ----------
  function cardTile(c) {
    var own = store.state.cards[c.id];
    var t = h("button.ccard" + (own ? "" : ".locked") + (own && !own.seen ? ".new" : ""), { type: "button", "aria-label": c.title }, [
      h("span.em", { text: c.emoji }),
      h("span", null, [h("span.cat", { text: c.cat }), h("b", { style: { display: "block" }, text: own ? c.title : "???" })])
    ]);
    t.addEventListener("click", function () {
      if (!own) {
        var where = c.unlock.replace(/^k(\d\d)(l(\d)|boss)$/, function (_, k, __, l) { var ch = C.chapter("k" + k); return (ch ? ch.place : "K" + k) + (l ? ", Lektion " + l : ", Boss-Dialog"); });
        U.toast("Wird freigeschaltet in: " + where);
        return;
      }
      cardReader(c);
    });
    return t;
  }
  function cardReader(c) {
    var own = store.state.cards[c.id];
    if (own && !own.seen) { own.seen = true; store.save(); }
    openSheet(function (panel, close) {
      var inner = h("div.sheet-inner.card-reader", { style: { paddingTop: "18px" } });
      panel.appendChild(inner);
      var quizBox = h("div.card", { style: { marginTop: "18px" } });
      if (c.quiz) {
        var sel = -1;
        var opts = h("div.options");
        c.quiz.options.forEach(function (o, i) {
          var b = h("button.opt", { type: "button", text: o });
          b.addEventListener("click", function () {
            if (sel >= 0) return; sel = i;
            U.$$(".opt", opts).forEach(function (x, j) { x.disabled = true; if (j === c.quiz.answer) x.classList.add("right"); else if (j === i) x.classList.add("wrong"); });
            if (i === c.quiz.answer && !own.quiz) { own.quiz = true; G.addXP(5); U.toast("+5 XP – richtig!"); }
          });
          opts.appendChild(b);
        });
        U.append(quizBox, [h("div.eyebrow", { text: "Quiz" }), h("b", { text: c.quiz.q }), opts]);
      }
      U.append(inner, [
        h("div.row", null, [h("span.em.grow", { text: c.emoji }), h("button.icon-btn", { type: "button", html: U.svgIcon.close, "aria-label": "Schließen", onclick: close })]),
        h("div.eyebrow", { text: c.cat + " · " + ((C.chapter(c.chapter) || {}).place || "") }),
        h("h2", { text: c.title }),
        h("div.gram", { style: { marginTop: "12px" }, html: U.md(c.text) }),
        h("div.terms", null, (c.terms || []).map(function (t) { return h("div", null, [h("span.vi", { "data-say": t.vi, text: t.vi }), h("span.muted", { text: t.de })]); })),
        c.quiz ? quizBox : null
      ]);
    });
  }
  Views.sammlung = function () {
    var owned = Object.keys(store.state.cards).length;
    var kids = [h("div.eyebrow", { text: "Sammlung" }), h("h1.display", { style: { fontSize: "34px", margin: "4px 0 6px" }, text: "Bộ sưu tập" }), h("p.muted", { text: owned + " von " + VN.cards.length + " Karten zu Kultur, Geschichte, Essen und Festen." })];
    // Reisepass
    kids.push(sectionTitle("Reisepass"));
    var pass = h("div.card", { style: { display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center", padding: "18px" } });
    C.chapters().forEach(function (ch) {
      var won = P.bossWon(ch.id);
      pass.appendChild(h("div", { style: { width: "92px", height: "64px", display: "grid", placeItems: "center", textAlign: "center", borderRadius: "10px", border: "2.5px " + (won ? "solid var(--accent)" : "dashed var(--line)"), color: won ? "var(--accent)" : "var(--muted)", transform: won ? "rotate(" + (((ch.id.charCodeAt(2) % 5) - 2) * 4) + "deg)" : "none", fontWeight: "800", fontSize: "11px", letterSpacing: ".06em", textTransform: "uppercase", lineHeight: "1.2", padding: "4px", whiteSpace: "pre-line" } }, [won ? "Đã đến\n" : "", ch.place]));
    });
    kids.push(pass);
    C.chapters().forEach(function (ch) {
      var cards = VN.cards.filter(function (c) { return c.chapter === ch.id; });
      if (!cards.length) return;
      kids.push(h("div.gram-ch", null, [h("h3", { text: ch.place }), h("span.muted", { text: ch.region })]));
      var g = h("div.cards-grid");
      cards.forEach(function (c) { g.appendChild(cardTile(c)); });
      kids.push(g);
    });
    kids.push(sectionTitle("Abzeichen"));
    kids.push(h("div.badges", null, G.BADGES.map(function (b) {
      var got = store.state.badges[b.id];
      return h("div.bdg" + (got ? "" : ".locked"), null, [h("div.seal", { text: b.emoji }), h("small", { text: b.name })]);
    })));
    U.append(view, kids);
  };

  // ---------- Profil ----------
  function seg(options, value, onChange) {
    var w = h("div.seg", { role: "group" });
    options.forEach(function (o) {
      var b = h("button" + (o[0] === value ? ".on" : ""), { type: "button", text: o[1], "aria-pressed": o[0] === value ? "true" : "false" });
      b.addEventListener("click", function () { onChange(o[0]); });
      w.appendChild(b);
    });
    return w;
  }
  function sw(on, onChange, label) {
    var b = h("button.switch", { type: "button", role: "switch", "aria-checked": on ? "true" : "false", "aria-label": label });
    b.addEventListener("click", function () { onChange(!on); });
    return b;
  }
  function setRow(title, sub, ctrl) { return h("div.set-row", null, [h("div", null, [h("b", { text: title }), sub ? h("small", { text: sub }) : null]), ctrl]); }
  Views.profil = function () {
    var s = store.state, st = s.settings;
    var L = G.levelFor(s.xp), rank = G.rank(L.lvl);
    var set = function (k, v) { st[k] = v; store.save(); VN.applyTheme(); Views.render("profil"); };
    var words = Object.keys(s.srs).length;
    var lessonsDone = Object.keys(s.lessons).filter(function (k) { return s.lessons[k].done; }).length;
    var acc = s.stats.answers ? Math.round(s.stats.correct / s.stats.answers * 100) : 0;
    // Aktivität (8 Wochen)
    var heat = h("div.heat");
    for (var i = 55; i >= 0; i--) {
      var d = U.addDays(U.today(), -i), x = s.daily[d] || 0;
      heat.appendChild(h("i" + (x >= st.goal ? ".l3" : x >= 20 ? ".l2" : x > 0 ? ".l1" : ""), { title: d + ": " + x + " XP" }));
    }
    var voices = S.viVoices();
    var voiceSel = h("select", { "aria-label": "Stimme", style: { maxWidth: "160px", height: "36px", borderRadius: "8px", border: "1.5px solid var(--line)", background: "var(--surface)" } });
    if (!voices.length) voiceSel.appendChild(h("option", { text: S.hasVoice() ? S.voiceName() : "keine gefunden" }));
    voices.forEach(function (v) { voiceSel.appendChild(h("option", { value: v.name, text: v.name, selected: v.name === S.voiceName() || null })); });
    voiceSel.addEventListener("change", function () { st.voice = voiceSel.value; store.save(); S.speak("Xin chào, tôi là giọng đọc tiếng Việt."); });
    var testBtn = h("button.btn.small.ghost", { type: "button", text: "Test" });
    testBtn.addEventListener("click", function () { S.speak("Xin chào! Chúc bạn học tiếng Việt vui vẻ."); });

    var freezeBtn = h("button.btn.small.gold", { type: "button", text: "200 đ", disabled: s.coins < 200 || s.streak.freezes >= 3 });
    freezeBtn.addEventListener("click", function () { s.coins -= 200; s.streak.freezes++; store.save(); U.toast("Serienschutz gekauft."); Views.render("profil"); });

    var backup = h("textarea.backup-box", { "aria-label": "Sicherungscode", placeholder: "Sicherungscode hier einfügen …" });
    var exp = h("button.btn.small.ghost", { type: "button", text: "Code erzeugen" });
    exp.addEventListener("click", function () {
      backup.value = store.exportText(); backup.select();
      if (navigator.clipboard) navigator.clipboard.writeText(backup.value).then(function () { U.toast("Sicherungscode kopiert."); }, function () { U.toast("Code markiert – bitte kopieren."); });
    });
    var imp = h("button.btn.small.ghost", { type: "button", text: "Einspielen" });
    imp.addEventListener("click", function () {
      try { store.importText(backup.value); U.toast("Fortschritt eingespielt."); Views.render("profil"); } catch (e) { U.toast("Der Code ist ungültig – bitte vollständig einfügen."); }
    });
    var resetBox = h("div");
    var resetBtn = h("button.btn.small.ghost", { type: "button", text: "Zurücksetzen" });
    resetBtn.addEventListener("click", function () {
      U.clear(resetBox);
      var yes = h("button.btn.small", { type: "button", text: "Ja, alles löschen" });
      yes.addEventListener("click", function () { store.reset(); U.toast("Fortschritt gelöscht."); location.hash = "#reise"; Views.render("reise"); });
      U.append(resetBox, [h("p.muted", { style: { fontSize: "13px", margin: "6px 0" }, text: "Löscht XP, Lektionen, Karten und Wiederholungen unwiderruflich." }), yes]);
    });

    U.append(view, [
      h("div.eyebrow", { text: "Profil" }),
      h("h1.display", { style: { fontSize: "34px", margin: "4px 0 16px" }, text: "Hồ sơ" }),
      h("div.card.level-card", null, [
        h("div.level-seal", { text: L.lvl }),
        h("div", null, [h("div.eyebrow", { text: "Rang · " + rank.de }), h("b", { style: { fontSize: "22px" }, text: rank.vi }), h("div.xpbar", null, h("i", { style: { width: Math.round(L.into / L.need * 100) + "%" } })), h("small.muted.tnum", { text: L.into + " / " + L.need + " XP bis Stufe " + (L.lvl + 1) + " · gesamt " + s.xp + " XP" })])
      ]),
      h("div.result-stats", null, [
        h("div", null, [h("b", { text: words }), h("small", { text: "Wörter" })]),
        h("div", null, [h("b", { text: lessonsDone }), h("small", { text: "Lektionen" })]),
        h("div", null, [h("b", { text: acc + " %" }), h("small", { text: "Treffer" })])
      ]),
      h("div.card", null, [
        h("div.row", null, [h("div.grow", null, [h("b", { text: "Serie: " + s.streak.count + (s.streak.count === 1 ? " Tag" : " Tage") }), h("small.muted", { style: { display: "block" }, text: "Rekord " + s.streak.best + " · Serienschutz " + s.streak.freezes + "/3 · " + s.stats.minutes + " Minuten gelernt" })]), freezeBtn]),
        heat,
        h("small.muted", { style: { display: "block", marginTop: "6px" }, text: "Letzte 8 Wochen. Ein Tag zählt ab 10 XP; volle Farbe = Tagesziel erreicht." })
      ]),
      sectionTitle("Einstellungen"),
      h("div.card.settings", null, [
        setRow("Tagesziel", "XP pro Tag", seg([[20, "Locker"], [50, "Normal"], [100, "Ernsthaft"]], st.goal, function (v) { set("goal", v); })),
        setRow("Darstellung", null, seg([["", "System"], ["light", "Hell"], ["dark", "Dunkel"]], st.theme || "", function (v) { set("theme", v); })),
        setRow("Sprechtempo", null, seg([[0.7, "Langsam"], [0.9, "Normal"], [1.05, "Schnell"]], st.rate, function (v) { set("rate", v); })),
        setRow("Stimme", voices.length ? "Vietnamesische Systemstimme" : "Auf dem iPhone: Einstellungen › Bedienungshilfen › Gesprochene Inhalte › Stimmen › Vietnamesisch › „Linh“ laden.", h("div.row", null, [voiceSel, testBtn])),
        setRow("Hinweise zum Süden", "Südvarianten bei Wörtern und Grammatik zeigen", sw(st.south, function (v) { set("south", v); }, "Hinweise zum Süden")),
        setRow("Telex-Eingabe", "aa→â, dd→đ, s/f/r/x/j für Töne – aus, wenn du die vietnamesische iPhone-Tastatur nutzt", sw(st.telex, function (v) { set("telex", v); }, "Telex-Eingabe")),
        setRow("Sprechübungen", S.canListen() ? "Spracherkennung verfügbar" : "Keine Spracherkennung hier – Nachsprechen mit Selbstkontrolle", sw(st.speak, function (v) { set("speak", v); }, "Sprechübungen")),
        setRow("Alle Orte freischalten", "Zum Stöbern ohne Reihenfolge", sw(st.unlockAll, function (v) { set("unlockAll", v); }, "Alle Orte freischalten"))
      ]),
      sectionTitle("Sicherung"),
      h("div.card", null, [
        h("p.muted", { style: { fontSize: "14px" }, text: store.sync === "claude.ai" ? "Dein Fortschritt wird automatisch in deinem claude.ai-Konto gespeichert und ist auf allen Geräten gleich." : "Dein Fortschritt liegt nur in diesem Browser. Mit dem Sicherungscode überträgst du ihn auf ein anderes Gerät." }),
        h("div", { style: { marginTop: "10px" } }, backup),
        h("div.row", { style: { marginTop: "10px", flexWrap: "wrap" } }, [exp, imp, resetBtn]),
        resetBox
      ]),
      h("p.muted", { style: { fontSize: "12px", textAlign: "center", marginTop: "24px" }, text: "Đường Việt · " + C.chapters().length + " Orte · " + C.chapters().reduce(function (a, c) { return a + c.lessons.length; }, 0) + " Lektionen · " + Object.keys(C.allVocab()).length + " Wörter · " + C.grammarAll().length + " Grammatikpunkte" })
    ]);
  };

  Views.render = function (name) {
    U.clear(view);
    (Views[name] || Views.reise)();
    U.$$(".tabbar a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-tab") === name); });
  };
})();
