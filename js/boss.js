/* Boss-Dialog (Rollenspiel am Kapitelende) und Ton-Jäger (Zeitspiel) */
(function () {
  var VN = window.VN, U = VN.U, V = VN.V, S = VN.S, h = U.h;
  var store = VN.store, G = VN.game;
  var root = document.getElementById("player");

  function shell(onClose) {
    U.clear(root); root.hidden = false; document.body.style.overflow = "hidden";
    var closeBtn = h("button.icon-btn", { type: "button", "aria-label": "Schließen", html: U.svgIcon.close });
    var mid = h("div");
    var right = h("div");
    var top = h("div.player-top", null, [closeBtn, mid, right]);
    var body = h("div.player-body");
    var foot = h("div.player-foot");
    var footInner = h("div.player-foot-inner");
    foot.appendChild(footInner);
    U.append(root, [top, body, foot]);
    var api = { mid: mid, right: right, body: body, foot: foot, footInner: footInner };
    api.close = function () { S.stop(); root.hidden = true; U.clear(root); document.body.style.overflow = ""; if (onClose) onClose(); };
    closeBtn.addEventListener("click", function () { api.close(); });
    return api;
  }
  function heartsEl(n, max) {
    var w = h("span.hearts", { "aria-label": n + " Leben" });
    for (var i = 0; i < max; i++) w.insertAdjacentHTML("beforeend", U.svgIcon.heart.replace("<svg", '<svg class="' + (i < n ? "" : "lost") + '"'));
    return w;
  }

  VN.startBoss = function (ch, onClose) {
    var b = ch.boss, MAX = 3;
    var hearts = MAX, turn = 0;
    var sh = shell(onClose);
    var prog = h("div.progress", null, h("i"));
    sh.mid.appendChild(prog);
    var renderHearts = function () { U.clear(sh.right); sh.right.appendChild(heartsEl(hearts, MAX)); };
    renderHearts();
    var initials = b.npc.split(" ").map(function (p) { return p[0]; }).join("").slice(0, 2);

    // Einleitung
    var startBtn = h("button.btn.block", { type: "button", text: "Gespräch beginnen" });
    U.append(sh.body, h("div.boss-intro", null, [
      h("div.npc", { text: initials }),
      h("div.eyebrow", { style: { marginTop: "18px" }, text: "Boss-Dialog · " + ch.place }),
      h("h2", { text: b.title }),
      h("p.muted", { style: { marginTop: "6px" }, text: b.npc + " – " + b.role }),
      h("p", { style: { marginTop: "14px", textAlign: "left" }, text: b.setting }),
      h("p.muted", { style: { marginTop: "12px", fontSize: "14px", textAlign: "left" }, text: "Du hast 3 Leben. Jede unpassende Antwort kostet eines – achte auf Anrede, Höflichkeit, Wortstellung und Töne." })
    ]));
    sh.footInner.appendChild(startBtn);
    var chat = h("div.chat");
    startBtn.addEventListener("click", function () { U.clear(sh.body); sh.body.appendChild(chat); next(); });

    function addBubble(side, who, vi, de) {
      var bb = h("div.bubble." + side, null, [h("div.who", { text: who }), h("div.v", { text: V.display(vi) }), de ? h("div.d", { text: de }) : null]);
      bb.addEventListener("click", function () { S.speak(vi); });
      chat.appendChild(bb);
      bb.scrollIntoView({ block: "end", behavior: "smooth" });
      return bb;
    }

    function next() {
      prog.firstChild.style.width = Math.round(turn / b.turns.length * 100) + "%";
      U.clear(sh.footInner); sh.foot.className = "player-foot";
      if (turn >= b.turns.length) return win();
      var t = b.turns[turn];
      var npcB = addBubble("left", b.npc, t.npc.vi, t.npc.de);
      S.speak(t.npc.vi, { el: npcB });
      var task = h("div.task", null, [h("b", { text: "Deine Aufgabe: " }), t.prompt]);
      var order = U.shuffle(t.choices.map(function (c, i) { return Object.assign({ i: i }, c); }));
      var opts = h("div.options");
      order.forEach(function (c) {
        var btn = h("button.opt", { type: "button", text: V.display(c.vi) });
        btn.addEventListener("click", function () { choose(c, btn, opts); });
        opts.appendChild(btn);
      });
      var hearBtn = h("button.btn.small.ghost", { type: "button", text: "Nochmal hören" });
      hearBtn.addEventListener("click", function () { S.speak(t.npc.vi); });
      U.append(sh.footInner, [task, opts, hearBtn]);
    }

    function choose(c, btn, opts) {
      Array.prototype.forEach.call(opts.children, function (b) { b.disabled = true; });
      var t = b.turns[turn];
      var right = t.choices.find(function (x) { return x.ok; });
      if (c.ok) btn.classList.add("right");
      else { btn.classList.add("wrong"); hearts--; renderHearts(); }
      store.state.stats.answers++; if (c.ok) store.state.stats.correct++;
      setTimeout(function () {
        U.clear(sh.footInner);
        sh.foot.className = "player-foot " + (c.ok ? "good" : "bad");
        addBubble("right", "Jonas (du)", right.vi);
        S.speak(right.vi);
        var v = h("div.verdict", null, [
          h("h3", { text: c.ok ? "Passt!" : hearts > 0 ? "Autsch – ein Leben weniger" : "Keine Leben mehr" }),
          !c.ok ? h("div.solution", { text: "Besser: " + V.display(right.vi) }) : null,
          h("div.explain", { html: U.inline(c.fb) }),
          !c.ok && right.fb ? h("div.explain", { html: U.inline(right.fb) }) : null
        ]);
        var nb = h("button.btn.block" + (c.ok ? ".jade" : ""), { type: "button", text: hearts > 0 ? "Weiter" : "Ergebnis" });
        nb.addEventListener("click", function () { if (hearts <= 0) return lose(); turn++; next(); });
        U.append(sh.footInner, [v, nb]);
      }, 380);
    }

    function lose() {
      var rec = store.state.bosses[ch.id] || { won: false, tries: 0 };
      rec.tries++; store.state.bosses[ch.id] = rec; store.save();
      U.clear(sh.body); U.clear(sh.footInner); sh.foot.className = "player-foot";
      U.append(sh.body, h("div.result", null, [
        h("div.eyebrow", { text: b.title }),
        h("h2", { text: "Thử lại nhé!" }),
        h("p.muted", { style: { marginTop: "8px" }, text: "„Versuch es nochmal!“ – Lies dir die Rückmeldungen durch und wiederhole bei Bedarf die Grammatik dieses Kapitels." })
      ]));
      var again = h("button.btn.block", { type: "button", text: "Nochmal versuchen" });
      again.addEventListener("click", function () { VN.startBoss(ch, onClose); });
      var back = h("button.btn.block.ghost", { type: "button", text: "Zurück zur Karte" });
      back.addEventListener("click", sh.close);
      U.append(sh.footInner, [again, back]);
    }

    function win() {
      prog.firstChild.style.width = "100%";
      var rec = store.state.bosses[ch.id] || { won: false, tries: 0 };
      var first = !rec.won;
      rec.won = true; rec.tries++; rec.hearts = Math.max(rec.hearts || 0, hearts);
      store.state.bosses[ch.id] = rec;
      var xp = first ? 40 + hearts * 5 : 10;
      var coins = first ? 50 : 5;
      store.state.coins += coins;
      var cards = G.unlockFor(ch.id + "boss");
      G.addXP(xp);
      var npcB = addBubble("left", b.npc, b.win.vi, b.win.de);
      S.speak(b.win.vi, { el: npcB });
      U.clear(sh.footInner); sh.foot.className = "player-foot good";
      var go = h("button.btn.block.jade", { type: "button", text: "Stempel abholen" });
      go.addEventListener("click", function () {
        U.clear(sh.body); U.clear(sh.footInner); sh.foot.className = "player-foot";
        var kids = [h("div.result", null, [
          h("div.eyebrow", { text: "Kapitel geschafft" }),
          h("h2", { text: ch.place }),
          h("div.big-stamp", { text: "Đã đến · " + ch.place }),
          h("div.result-stats", null, [
            h("div", null, [h("b", { text: "+" + xp }), h("small", { text: "XP" })]),
            h("div", null, [h("b", { text: hearts + "/" + MAX }), h("small", { text: "Leben" })]),
            h("div", null, [h("b", { text: "+" + coins }), h("small", { text: "đồng" })])
          ])
        ])];
        cards.forEach(function (c) {
          kids.push(h("div.card", { style: { display: "flex", gap: "12px", alignItems: "center", marginTop: "10px" } }, [h("div", { style: { fontSize: "36px" }, text: c.emoji }), h("div", null, [h("div.eyebrow", { text: "Neue Sammelkarte" }), h("b", { text: c.title })])]));
        });
        U.append(sh.body, kids);
        var done = h("button.btn.block", { type: "button", text: "Weiterreisen" });
        done.addEventListener("click", sh.close);
        sh.footInner.appendChild(done);
      });
      sh.footInner.appendChild(go);
    }
  };

  // ---------- Ton-Jäger ----------
  var MINIMAL = ["ma", "ba", "la", "ca", "ta", "na", "da", "ga", "co", "bo", "me", "to", "mi", "nho", "lo", "ve", "chi", "bi", "tre", "ha"];
  VN.startToneGame = function (onClose) {
    var sh = shell(onClose);
    var DURATION = 60;
    var timeLeft = DURATION, score = 0, combo = 0, running = false, timer = null, cur = null;
    var timerEl = h("div.timer", { text: DURATION });
    var scoreEl = h("b.tnum", { text: "0" });
    var comboEl = h("span.combo");
    sh.mid.appendChild(h("div", { style: { textAlign: "center", fontWeight: "700" } }, "Ton-Jäger"));
    U.append(sh.right, [scoreEl]);
    // Silbenpool: einsilbige Wörter aus freigeschalteten Lektionen + Minimalpaare
    var pool = [];
    var all = VN.content.allVocab();
    Object.keys(all).forEach(function (k) { if (V.syllables(k).length === 1 && k.length <= 6) pool.push(k.toLowerCase()); });
    MINIMAL.forEach(function (b) { for (var t = 0; t < 6; t++) pool.push(V.placeTone(b, t)); });
    pool = U.uniq(pool);

    var big = S.button("", "big");
    var grid = h("div.tone-grid");
    var buttons = V.TONES.map(function (tn, i) {
      var b = h("button.tone-btn", { type: "button", style: { "--tc": tn.color }, html: V.toneGlyph(i) + "<b>" + tn.name + "</b><small>" + tn.de + "</small>" });
      b.addEventListener("click", function () { answer(i, b); });
      grid.appendChild(b);
      return b;
    });
    var shown = h("div.q-main", { style: { textAlign: "center", minHeight: "36px", marginTop: "10px" } });
    var intro = h("div", { style: { textAlign: "center" } }, [
      h("div.eyebrow", { text: "60 Sekunden" }),
      h("h2", { style: { fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "30px", margin: "6px 0" }, text: "Erkenne den Ton" }),
      h("p.muted", { text: "Du hörst eine Silbe – tippe den passenden Ton. Serien bringen Bonuspunkte. Rekord: " + store.state.toneBest })
    ]);
    U.append(sh.body, [intro, h("div.row", { style: { justifyContent: "center", gap: "18px", marginTop: "18px" } }, [timerEl, big, comboEl]), shown, grid]);
    var startBtn = h("button.btn.block", { type: "button", text: "Los geht's" });
    sh.footInner.appendChild(startBtn);
    big.replaceWith(big = h("button.say-btn.big", { type: "button", "aria-label": "Nochmal hören", html: U.svgIcon.speaker }));
    big.addEventListener("click", function () { if (cur) S.speak(cur, { el: big }); });

    function nextSyl() {
      cur = U.pick(pool, 1)[0];
      shown.innerHTML = "&nbsp;";
      buttons.forEach(function (b) { b.classList.remove("right", "wrong"); b.disabled = false; });
      S.speak(cur, { el: big });
    }
    function answer(i, b) {
      if (!running || !cur) return;
      var t = V.toneOf(cur);
      buttons.forEach(function (x) { x.disabled = true; });
      shown.innerHTML = V.colorize(cur);
      if (i === t) { combo++; score += 1 + Math.floor(combo / 5); b.classList.add("right"); }
      else { combo = 0; b.classList.add("wrong"); buttons[t].classList.add("right"); }
      scoreEl.textContent = score;
      comboEl.textContent = combo >= 3 ? "×" + combo : "";
      setTimeout(nextSyl, i === t ? 550 : 1200);
    }
    startBtn.addEventListener("click", function () {
      startBtn.remove(); running = true; intro.querySelector("p").textContent = "Hör hin!";
      nextSyl();
      timer = setInterval(function () {
        timeLeft--; timerEl.textContent = timeLeft;
        if (timeLeft <= 0) end();
      }, 1000);
    });
    function end() {
      clearInterval(timer); running = false; S.stop();
      var rec = score > store.state.toneBest;
      if (rec) store.state.toneBest = score;
      var xp = Math.min(30, 3 + score);
      G.addXP(xp);
      U.clear(sh.body); U.clear(sh.footInner);
      U.append(sh.body, h("div.result", null, [
        h("div.eyebrow", { text: "Ton-Jäger" }),
        h("h2", { text: score + " Punkte" }),
        h("p.muted", { text: rec ? "Neuer Rekord!" : "Rekord: " + store.state.toneBest }),
        h("div.result-stats", null, [h("div", null, [h("b", { text: "+" + xp }), h("small", { text: "XP" })]), h("div", null, [h("b", { text: String(store.state.toneBest) }), h("small", { text: "Rekord" })]), h("div", null, [h("b", { text: "60 s" }), h("small", { text: "Zeit" })])])
      ]));
      var again = h("button.btn.block", { type: "button", text: "Nochmal" });
      again.addEventListener("click", function () { VN.startToneGame(onClose); });
      var back = h("button.btn.block.ghost", { type: "button", text: "Fertig" });
      back.addEventListener("click", function () { sh.close(); });
      U.append(sh.footInner, [again, back]);
    }
    var origClose = sh.close;
    sh.close = function () { clearInterval(timer); origClose(); };
  };
})();
