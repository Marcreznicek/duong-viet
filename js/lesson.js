/* Player: führt Abfolgen von Info-Seiten und Übungen aus (Lektionen, Wiederholung, Ton-Training) */
(function () {
  var VN = window.VN, U = VN.U, V = VN.V, S = VN.S, h = U.h, EX = VN.EX;
  var store = VN.store, G = VN.game, R = VN.srs;

  var Player = (VN.Player = {});
  var root = document.getElementById("player");

  function closeConfirm(onYes) {
    var sheet = document.getElementById("sheet");
    U.clear(sheet); sheet.hidden = false;
    var panel = h("div.sheet-panel", null, h("div.sheet-inner", { style: { paddingTop: "22px" } }, [
      h("h3", { style: { fontSize: "20px" }, text: "Wirklich abbrechen?" }),
      h("p.muted", { style: { margin: "6px 0 18px" }, text: "Dein Fortschritt in dieser Übungsrunde geht verloren." }),
      h("div.foot-row", null, [
        h("button.btn.ghost", { type: "button", text: "Abbrechen", onclick: function () { sheet.hidden = true; onYes(); } }),
        h("button.btn.jade", { type: "button", text: "Weiterlernen", onclick: function () { sheet.hidden = true; } })
      ])
    ]));
    sheet.appendChild(panel);
    sheet.onclick = function (e) { if (e.target === sheet) sheet.hidden = true; };
  }

  // opts: {steps, title, onFinish(stats), grade(step, ok), hearts}
  Player.run = function (opts) {
    var steps = opts.steps.slice();
    var total = steps.length;
    var pos = 0, doneCount = 0, correct = 0, wrong = 0, answered = 0;
    var retried = new Set();
    var t0 = Date.now();
    var current = null;

    U.clear(root); root.hidden = false;
    document.body.style.overflow = "hidden";
    var bar = h("i");
    var closeBtn = h("button.icon-btn", { type: "button", "aria-label": "Schließen", html: U.svgIcon.close });
    var xpBadge = h("span.pill.gold.tnum", { text: "+0 XP" });
    var top = h("div.player-top", null, [closeBtn, h("div.progress", null, bar), xpBadge]);
    var body = h("div.player-body");
    var foot = h("div.player-foot");
    var footInner = h("div.player-foot-inner");
    foot.appendChild(footInner);
    U.append(root, [top, body, foot]);
    closeBtn.addEventListener("click", function () {
      if (doneCount < 2) return finish(true);
      closeConfirm(function () { finish(true); });
    });

    function setProgress() { bar.style.width = Math.round(doneCount / total * 100) + "%"; }
    var sessionXP = 0;
    function addSessionXP(n) { sessionXP += n; xpBadge.textContent = "+" + sessionXP + " XP"; }

    function show() {
      if (current && current.stop) current.stop();
      S.stop();
      if (pos >= steps.length) return finish(false);
      var step = steps[pos];
      U.clear(body); U.clear(footInner); foot.className = "player-foot";
      body.scrollTop = 0;
      var checkBtn = h("button.btn.block", { type: "button", text: "Prüfen", disabled: true });
      var api = {
        pool: opts.pool || [],
        ready: function (on) { checkBtn.disabled = !on; },
        submit: function () { if (!checkBtn.disabled) checkBtn.click(); },
        done: function (res) { verdict(step, res); }
      };
      var fac = EX[step.type];
      if (!fac) { console.warn("Unbekannter Schritt", step); pos++; return show(); }
      try { current = fac(step, api); } catch (e) { console.error(e, step); pos++; doneCount++; return show(); }
      body.appendChild(current.el);
      if (current.info) {
        var next = h("button.btn.block", { type: "button", text: "Weiter" });
        next.addEventListener("click", function () { pos++; doneCount++; setProgress(); show(); });
        footInner.appendChild(next);
      } else if (!current.selfDone) {
        checkBtn.addEventListener("click", function () { checkBtn.disabled = true; verdict(step, current.check()); });
        footInner.appendChild(checkBtn);
      }
      if (current.autoPlay) setTimeout(function () { S.speak(current.autoPlay); }, 280);
      if (current.focus && !matchMedia("(pointer: coarse)").matches) setTimeout(function () { current.focus.focus(); }, 60);
    }

    function verdict(step, res) {
      U.clear(footInner);
      var isRetry = retried.has(step);
      if (!res.skipped) {
        answered++;
        if (res.ok) { correct++; if (!isRetry) addSessionXP(1); }
        else wrong++;
        store.state.stats.answers++;
        if (res.ok) store.state.stats.correct++;
        if (opts.grade && !isRetry) opts.grade(step, res.ok);
      }
      foot.className = "player-foot " + (res.ok ? "good" : "bad");
      var title = res.ok ? (res.self ? "Weiter so!" : res.skipped ? "Übersprungen" : U.pick(["Richtig!", "Genau!", "Sehr gut!", "Đúng rồi!", "Giỏi quá!"], 1)[0]) : (res.near === "tone" ? "Fast – Ton prüfen" : "Nicht ganz");
      var v = h("div.verdict", null, [
        h("h3", { text: title }),
        res.solution && (!res.ok || step.type === "tone" || step.type === "listen") ? h("div.solution", null, [res.ok ? "" : "Richtig: ", res.solution]) : null,
        res.explain ? h("div.explain", { html: U.inline(res.explain) }) : null
      ]);
      var next = h("button.btn.block" + (res.ok ? ".jade" : ""), { type: "button", text: "Weiter" });
      next.addEventListener("click", function () {
        if (!res.ok && !isRetry && !res.skipped) { steps.push(step); retried.add(step); total++; }
        pos++; doneCount++; setProgress(); show();
      });
      U.append(footInner, [v, next]);
      setTimeout(function () { next.focus(); }, 30);
    }

    function finish(aborted) {
      if (current && current.stop) current.stop();
      S.stop();
      document.body.style.overflow = "";
      var minutes = Math.max(1, Math.round((Date.now() - t0) / 60000));
      if (aborted) { root.hidden = true; U.clear(root); if (opts.onAbort) opts.onAbort(); return; }
      store.state.stats.minutes += minutes;
      var stats = { correct: correct, wrong: wrong, answered: answered, minutes: minutes, accuracy: answered ? correct / (correct + wrong) : 1, sessionXP: sessionXP };
      var out = opts.onFinish ? opts.onFinish(stats) : { xp: sessionXP };
      resultScreen(stats, out || {});
    }

    function resultScreen(stats, out) {
      U.clear(body); U.clear(footInner); foot.className = "player-foot";
      bar.style.width = "100%";
      var acc = Math.round(stats.accuracy * 100);
      var kids = [
        h("div.result", null, [
          h("div.eyebrow", { text: opts.kicker || "Geschafft" }),
          h("h2", { text: out.title || (acc === 100 ? "Hoàn hảo!" : acc >= 80 ? "Giỏi lắm!" : "Cố lên!") }),
          h("p.muted", { text: out.subtitle || (acc === 100 ? "Perfekt – kein einziger Fehler." : acc >= 80 ? "Sehr gut gemacht." : "Weiter üben – Wiederholung macht den Meister.") }),
          out.stamp ? h("div.big-stamp", { text: out.stamp }) : null
        ]),
        h("div.result-stats", null, [
          h("div", null, [h("b", { text: "+" + (out.xp || 0) }), h("small", { text: "XP" })]),
          h("div", null, [h("b", { text: acc + " %" }), h("small", { text: "Treffer" })]),
          h("div", null, [h("b", { text: stats.minutes + " min" }), h("small", { text: "Zeit" })])
        ])
      ];
      if (out.coins) kids.push(h("p", { style: { textAlign: "center", fontWeight: "700", color: "var(--gold)" }, text: "+" + out.coins + " đồng" }));
      (out.cards || []).forEach(function (c) {
        kids.push(h("div.card", { style: { marginTop: "12px", display: "flex", gap: "12px", alignItems: "center" } }, [
          h("div", { style: { fontSize: "36px" }, text: c.emoji }),
          h("div", null, [h("div.eyebrow", { text: "Neue Sammelkarte" }), h("b", { text: c.title })])
        ]));
      });
      U.append(body, kids);
      var btn = h("button.btn.block", { type: "button", text: "Weiter" });
      btn.addEventListener("click", function () { root.hidden = true; U.clear(root); if (opts.onClose) opts.onClose(out); });
      footInner.appendChild(btn);
    }

    setProgress();
    show();
  };

  // ---------- Lektionen ----------
  function authoredOrder(list) {
    var rank = { tone: 0, pairs: 1, mc: 2, gap: 3, build: 4, listen: 5, translate: 6, speak: 7 };
    // grob nach Schwierigkeit, innerhalb gleicher Stufe gemischt
    return U.shuffle(list).sort(function (a, b) { return (rank[a.type] || 3) - (rank[b.type] || 3); });
  }
  VN.lessonSteps = function (ch, L, repeat) {
    var steps = [];
    var vocab = L.vocab || [];
    var chNum = parseInt(ch.id.slice(1), 10);
    if (!repeat) {
      for (var i = 0; i < vocab.length; i += 4) {
        var chunk = vocab.slice(i, i + 4);
        chunk.forEach(function (v) { steps.push({ type: "intro", v: v }); });
        chunk.forEach(function (v, j) { if (j % 2 === 0) steps.push({ type: j % 4 === 0 ? "pick" : "hear", v: v }); });
      }
      (L.grammar || []).forEach(function (g) { steps.push({ type: "grammar", g: g }); });
      if (L.dialogue) steps.push({ type: "dialogue", d: L.dialogue });
    } else {
      U.pick(vocab, 4).forEach(function (v, j) { steps.push({ type: ["pick", "hear", "pickvi", "pick"][j], v: v }); });
    }
    if (vocab.length >= 4) steps.push({ type: "pairs", pairs: U.pick(vocab, 5).map(function (v) { return [v.vi, v.de]; }) });
    authoredOrder(L.exercises || []).forEach(function (ex) { steps.push(ex); });
    if (chNum >= 2) U.pick(vocab.filter(function (v) { return v.vi.length <= 14; }), 2).forEach(function (v) { steps.splice(steps.length - 1, 0, { type: "type", v: v }); });
    if (!VN.store.state.settings.speak) steps = steps.filter(function (s) { return s.type !== "speak"; });
    return steps;
  };

  VN.startLesson = function (ch, L, onClose) {
    var repeat = VN.progress.lessonDone(L.id);
    Player.run({
      steps: VN.lessonSteps(ch, L, repeat),
      pool: L.vocab,
      kicker: ch.place + " · " + L.title,
      onFinish: function (st) {
        var s = store.state;
        var rec = s.lessons[L.id] || { done: false, best: 0, times: 0 };
        var first = !rec.done;
        rec.done = true; rec.times++; rec.last = U.today(); rec.best = Math.max(rec.best, Math.round(st.accuracy * 100));
        s.lessons[L.id] = rec;
        var xp = (first ? 15 : 6) + st.sessionXP;
        var perfect = st.wrong === 0 && st.answered > 3;
        if (perfect) { xp += 5; s.stats.perfect++; }
        var coins = first ? 15 + (perfect ? 5 : 0) : 3;
        R.add(L.vocab || [], ch.id);
        var cards = G.unlockFor(L.id);
        s.coins += coins;
        G.addXP(xp);
        return { xp: xp, coins: coins, cards: cards };
      },
      onClose: onClose
    });
  };

  // ---------- Wiederholung ----------
  VN.startReview = function (words, onClose, title) {
    var all = VN.content.allVocab();
    var items = words.map(function (k) { return all[k]; }).filter(Boolean);
    if (!items.length) { U.toast("Gerade nichts fällig – gut gemacht!"); return; }
    var steps = items.map(function (v) {
      var box = (store.state.srs[v.vi] || {}).b || 1;
      var types = box >= 3 ? ["pick", "pickvi", "hear", "type", "type"] : ["pick", "pickvi", "hear"];
      return { type: U.pick(types, 1)[0], v: v };
    });
    if (items.length >= 5) steps.splice(Math.min(6, steps.length), 0, { type: "pairs", pairs: U.pick(items, 5).map(function (v) { return [v.vi, v.de]; }) });
    var pool = items.concat(Object.keys(all).slice(0, 60).map(function (k) { return all[k]; }));
    Player.run({
      steps: steps, pool: pool, kicker: title || "Wiederholung",
      grade: function (step, ok) { if (step.v) R.grade(step.v.vi, ok); },
      onFinish: function (st) {
        var xp = 5 + st.sessionXP;
        G.addXP(xp);
        store.save();
        return { xp: xp, title: st.accuracy >= 0.8 ? "Nhớ giỏi lắm!" : "Gut wiederholt!", subtitle: items.length + " Wörter wiederholt. Falsche Wörter kommen morgen wieder." };
      },
      onClose: onClose
    });
  };
})();
