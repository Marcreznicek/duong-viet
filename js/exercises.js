/* Übungstypen. Jede Fabrik erhält (ex, api) und liefert {el, check?, info?, autoPlay?}.
   api.ready(bool) aktiviert „Prüfen“, api.done(result) beendet selbstständig.
   result = {ok, solution?, explain?, near?} */
(function () {
  var VN = window.VN, U = VN.U, V = VN.V, S = VN.S, h = U.h;
  var EX = (VN.EX = {});

  function label(t) { return h("div.q-label", { text: t }); }
  function viLine(text, big) {
    return h("div.prompt-row", null, [S.button(text), S.button(text, "slow"), h("div.q-main" + (big ? ".vi-big" : ""), { html: V.colorize(V.display(text)) })]);
  }
  function optionButtons(opts, onSel, cls) {
    var wrap = h("div.options" + (cls ? "." + cls : ""));
    var btns = opts.map(function (o, i) {
      var b = h("button.opt", { type: "button" }, [h("span.k", { text: i + 1 }), h("span", { html: o.html || U.esc(o.text) })]);
      b.addEventListener("click", function () {
        if (b.disabled) return;
        btns.forEach(function (x) { x.classList.remove("sel"); });
        b.classList.add("sel");
        if (o.say) S.speak(o.say);
        onSel(i);
      });
      wrap.appendChild(b);
      return b;
    });
    wrap.mark = function (sel, right) {
      btns.forEach(function (b, i) { b.disabled = true; if (i === right) b.classList.add("right"); else if (i === sel) b.classList.add("wrong"); });
    };
    return wrap;
  }
  function distractVocab(pool, correct, n, field) {
    var others = U.uniq(pool.filter(function (v) { return v[field] !== correct[field] && v.vi !== correct.vi; }).map(function (v) { return v[field]; }));
    if (others.length < n) {
      var all = VN.content.allVocab();
      others = U.uniq(others.concat(Object.keys(all).map(function (k) { return all[k][field]; }).filter(function (x) { return x !== correct[field]; })));
    }
    return U.pick(others, n);
  }

  // ---------- Informationsseiten ----------
  EX.intro = function (ex) {
    var v = ex.v;
    var meta = [];
    if (v.pos) meta.push(h("span.pill", { text: posName(v.pos) }));
    if (v.cls) meta.push(h("span.pill.gold", { text: "Klassifikator: " + v.cls }));
    if (v.south && VN.store.state.settings.south) meta.push(h("span.pill.jade", { text: "Süd: " + v.south }));
    var el = h("div", null, [
      label("Neues Wort"),
      h("div.card.word-card", null, [
        v.emoji ? h("div.emoji", { text: v.emoji }) : null,
        h("div.w", { html: V.colorize(v.vi) }),
        h("div.tr", { text: v.de }),
        h("div.meta", null, meta),
        h("div", { html: V.curveSVG(v.vi) }),
        h("div.row", { style: { justifyContent: "center", marginTop: "10px" } }, [S.button(v.vi), S.button(v.vi, "slow")]),
        v.note ? h("p.muted", { style: { marginTop: "10px", fontSize: "14px" }, html: U.inline(v.note) }) : null,
        v.ex ? h("div.ex", null, [h("div.row", null, [S.button(v.ex.vi), h("div.grow", null, [h("div.v", { text: V.display(v.ex.vi) }), h("div.muted", { text: v.ex.de })])])]) : null
      ])
    ]);
    return { el: el, info: true, autoPlay: v.vi };
  };
  function posName(p) {
    return { N: "Nomen", V: "Verb", Adj: "Stativverb (Adj.)", Adv: "Adverb", Pron: "Pronomen/Anrede", CL: "Klassifikator", Num: "Zahlwort", Part: "Partikel", "Präp": "Präposition", Konj: "Konjunktion", QW: "Fragewort", Phr: "Formel" }[p] || p;
  }
  EX.posName = posName;

  EX.grammar = function (ex) {
    return { el: grammarView(ex.g, true), info: true };
  };
  function grammarView(g, withLabel) {
    var kids = [];
    if (withLabel) kids.push(label("Grammatik"));
    kids.push(h("span.term-tag", { text: g.term }));
    kids.push(h("h2", { style: { fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "28px", margin: "8px 0 12px" }, text: g.title }));
    if (g.pattern) kids.push(h("div.pattern", { text: g.pattern }));
    kids.push(h("div.gram", { html: U.md(g.text) }));
    if (g.table) {
      var tbl = h("table", null, [
        h("thead", null, h("tr", null, g.table.head.map(function (c) { return h("th", { html: U.inline(c) }); }))),
        h("tbody", null, g.table.rows.map(function (r) { return h("tr", null, r.map(function (c) { return h("td", { html: U.inline(String(c)) }); })); }))
      ]);
      kids.push(h("div.tbl-wrap", null, tbl));
    }
    if (g.examples && g.examples.length) {
      kids.push(h("div.examples", null, g.examples.map(function (e) {
        return h("div.example", null, [S.button(e.vi), h("div", null, [h("div.v", { html: V.colorize(V.display(e.vi)) }), e.gloss ? h("div.g", { text: e.gloss }) : null, h("div.d", { text: e.de })])]);
      })));
    }
    if (g.contrast) kids.push(h("div.note", null, [h("b", { text: "Im Vergleich zum Deutschen" }), h("div", { html: U.inline(g.contrast) })]));
    if (g.south && VN.store.state.settings.south) kids.push(h("div.note.south", null, [h("b", { text: "Im Süden" }), h("div", { html: U.inline(g.south) })]));
    return h("div", null, kids);
  }
  EX.grammarView = grammarView;

  EX.dialogue = function (ex) {
    var d = ex.d;
    var names = U.uniq(d.lines.map(function (l) { return l.who; }));
    var rightName = names.indexOf("Jonas") >= 0 ? "Jonas" : names[1];
    var chat = h("div.chat");
    var bubbles = d.lines.map(function (l) {
      var b = h("div.bubble." + (l.who === rightName ? "right" : "left"), null, [h("div.who", { text: l.who }), h("div.v", { text: V.display(l.vi) }), h("div.d", { text: l.de })]);
      b.addEventListener("click", function () { S.speak(l.vi); });
      chat.appendChild(b);
      return b;
    });
    var playing = false;
    var playBtn = h("button.btn.small.jade", { type: "button", text: "▶ Ganzen Dialog anhören" });
    playBtn.addEventListener("click", function () {
      if (playing) { playing = false; S.stop(); playBtn.textContent = "▶ Ganzen Dialog anhören"; return; }
      playing = true; playBtn.textContent = "■ Stopp";
      var i = 0;
      (function next() {
        bubbles.forEach(function (b) { b.classList.remove("speaking"); });
        if (!playing || i >= d.lines.length) { playing = false; playBtn.textContent = "▶ Ganzen Dialog anhören"; return; }
        bubbles[i].classList.add("speaking");
        bubbles[i].scrollIntoView({ block: "nearest", behavior: "smooth" });
        S.speak(d.lines[i].vi).then(function () { i++; setTimeout(next, 350); });
      })();
    });
    var hideBtn = h("button.btn.small.ghost", { type: "button", text: "Übersetzung aus" });
    hideBtn.addEventListener("click", function () {
      chat.classList.toggle("hide-de");
      hideBtn.textContent = chat.classList.contains("hide-de") ? "Übersetzung an" : "Übersetzung aus";
    });
    var el = h("div", null, [
      label("Dialog"),
      h("p.muted", { text: d.setting }),
      h("div.row", { style: { marginTop: "12px", flexWrap: "wrap" } }, [playBtn, hideBtn]),
      chat,
      h("p.muted", { style: { fontSize: "13px", marginTop: "12px" }, text: "Tipp: Tippe auf eine Sprechblase, um sie einzeln zu hören." })
    ]);
    return { el: el, info: true, stop: function () { playing = false; S.stop(); } };
  };

  // ---------- Übungen ----------
  EX.mc = function (ex, api) {
    var sel = -1;
    var opts = ex.options.map(function (o, i) { return { text: V.display(o), i: i }; });
    var order = U.shuffle(opts);
    var w = optionButtons(order, function (i) { sel = i; api.ready(true); });
    var el = h("div", null, [label("Wähle die richtige Antwort"), h("div.q-main", { text: ex.q }), ex.vi ? h("div", { style: { marginTop: "14px" } }, viLine(ex.vi)) : null, w]);
    return {
      el: el, autoPlay: ex.vi,
      check: function () {
        var right = order.findIndex(function (o) { return o.i === ex.answer; });
        w.mark(sel, right);
        return { ok: sel === right, solution: V.display(ex.options[ex.answer]), explain: ex.explain };
      }
    };
  };

  EX.gap = function (ex, api) {
    var sel = -1;
    var parts = ex.vi.split("___");
    var slot = h("span.gap-slot", { html: "&nbsp;" });
    var sentence = h("div.gap-sentence", null, [V.display(parts[0]), slot, V.display(parts[1] || "")]);
    var order = U.shuffle(ex.options);
    var w = optionButtons(order.map(function (o) { return { text: V.display(o) }; }), function (i) { sel = i; slot.textContent = V.display(order[i]); api.ready(true); }, "grid2");
    var el = h("div", null, [label("Ergänze die Lücke"), sentence, h("div.q-sub", { text: ex.de }), w]);
    return {
      el: el,
      check: function () {
        var right = order.indexOf(ex.answer);
        w.mark(sel, right);
        var full = ex.vi.replace("___", ex.answer);
        S.speak(full);
        return { ok: sel === right, solution: V.display(full), explain: ex.explain };
      }
    };
  };

  // Zeitangaben (Topik) dürfen auch ans Satzende wandern und umgekehrt
  var TIME = ["hôm nay", "hôm qua", "hôm kia", "ngày mai", "ngày kia", "sáng nay", "trưa nay", "chiều nay", "tối nay", "đêm nay", "bây giờ", "hồi nhỏ", "năm ngoái", "năm nay", "năm sau", "tuần sau", "tuần trước", "tháng sau", "tháng trước", "sáng mai", "chiều mai", "tối mai", "sáng qua", "tối qua", "cuối tuần"];
  function timeAlts(tiles) {
    var out = [], low = tiles.map(function (t) { return t.toLowerCase(); });
    for (var n = 1; n <= 2; n++) {
      var head = low.slice(0, n).join(" ");
      // nur satzinitiale Zeitangabe ans Ende (nicht bei Fragen mit Endpartikel)
      if (TIME.indexOf(head) >= 0 && tiles.length > n + 1 && !/^(không|chưa|ạ|à|nhé|nhỉ)$/.test(low[low.length - 1])) out.push(tiles.slice(n).concat(tiles.slice(0, n)));
    }
    return out;
  }

  function tileExercise(ex, api, listenMode) {
    var target = V.tiles(ex.vi);
    var extra = (ex.extra || []).map(function (x) { return x.replace(/_/g, " "); });
    if (!extra.length && api.pool) {
      extra = U.pick(api.pool.map(function (v) { return v.vi; }).filter(function (w) { return target.indexOf(w) < 0 && w.split(" ").length === 1; }), 2);
    }
    var bankWords = U.shuffle(target.concat(extra));
    var answer = h("div.tiles-answer");
    var bank = h("div.tiles-bank");
    var chosen = [];
    var bankBtns = bankWords.map(function (w, i) {
      var b = h("button.tile", { type: "button", text: w });
      b.addEventListener("click", function () {
        if (b.classList.contains("used")) return;
        b.classList.add("used");
        var a = h("button.tile", { type: "button", text: w });
        a.addEventListener("click", function () {
          var idx = chosen.findIndex(function (c) { return c.a === a; });
          chosen.splice(idx, 1); a.remove(); b.classList.remove("used");
          api.ready(chosen.length > 0);
        });
        answer.appendChild(a);
        chosen.push({ a: a, w: w, i: i });
        if (!listenMode) S.speak(w);
        api.ready(true);
      });
      bank.appendChild(b);
      return b;
    });
    var head = listenMode
      ? h("div", null, [label("Hör zu und baue den Satz"), h("div.row", { style: { justifyContent: "center", gap: "16px", margin: "8px 0 4px" } }, [S.button(ex.vi, "big"), S.button(ex.vi, "slow")])])
      : h("div", null, [label("Übersetze ins Vietnamesische"), h("div.q-main", { text: ex.de })]);
    var el = h("div", null, [head, answer, bank]);
    return {
      el: el, autoPlay: listenMode ? ex.vi : null,
      check: function () {
        var given = chosen.map(function (c) { return c.w; }).join(" ");
        var accepted = [ex.vi].concat(listenMode ? [] : (ex.alts || []).concat(timeAlts(target)));
        var ok = accepted.some(function (a) { return V.key(given) === V.key(Array.isArray(a) ? a.join(" ") : V.tiles(a).join(" ")); });
        bankBtns.forEach(function (b) { b.disabled = true; });
        S.speak(ex.vi);
        return { ok: ok, solution: V.display(ex.vi), explain: listenMode ? ex.de : null, near: !ok && V.keyNoTone(given) === V.keyNoTone(target.join(" ")) ? "tone" : null };
      }
    };
  }
  EX.build = function (ex, api) { return tileExercise(ex, api, false); };
  EX.listen = function (ex, api) { return tileExercise(ex, api, true); };

  function typingField(api) {
    var ta = h("textarea.answer-input", { rows: 3, placeholder: "Auf Vietnamesisch tippen …", lang: "vi", "aria-label": "Antwort" });
    V.attachTelex(ta, function () { return VN.store.state.settings.telex; });
    ta.addEventListener("input", function () { api.ready(ta.value.trim().length > 0); });
    ta.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); if (ta.value.trim()) api.submit(); } });
    var bar = h("div.accent-bar");
    V.TONES.forEach(function (t, i) {
      if (!i) return;
      var b = h("button.tone-key", { type: "button", style: { "--tc": t.color }, title: t.name, text: "a" + t.mark });
      b.textContent = ("a" + t.mark).normalize("NFC");
      b.addEventListener("mousedown", function (e) { e.preventDefault(); });
      b.addEventListener("click", function () { V.applyToneAtCursor(ta, i); api.ready(ta.value.trim().length > 0); });
      bar.appendChild(b);
    });
    ["ă", "â", "đ", "ê", "ô", "ơ", "ư"].forEach(function (c) {
      var b = h("button", { type: "button", text: c });
      b.addEventListener("mousedown", function (e) { e.preventDefault(); });
      b.addEventListener("click", function () { V.insertAtCursor(ta, c); api.ready(true); });
      bar.appendChild(b);
    });
    var hint = h("div.telex-hint", { text: VN.store.state.settings.telex ? "Telex an: aa→â, aw→ă, ee→ê, oo→ô, ow→ơ, uw→ư, dd→đ · Töne: s ´  f `  r ̉  x ~  j ̣ (z löscht)" : "Telex aus – nutze die Leiste oder die vietnamesische iPhone-Tastatur." });
    return { ta: ta, wrap: h("div", null, [ta, bar, hint]) };
  }

  EX.translate = function (ex, api) {
    var f = typingField(api);
    var el = h("div", null, [label("Schreibe auf Vietnamesisch"), h("div.q-main", { text: ex.de }), h("div", { style: { marginTop: "14px" } }, f.wrap)]);
    return {
      el: el, focus: f.ta,
      check: function () {
        var r = V.check(f.ta.value, ex.answers);
        f.ta.disabled = true;
        S.speak(r.best);
        var res = { ok: r.ok, solution: V.display(r.best) };
        if (r.near === "tone") res.explain = "Fast! Nur die Töne stimmen nicht – achte auf die Tonzeichen.";
        else if (r.near === "marks") res.explain = "Fast! Die Vokalzeichen (ă, â, ê, ô, ơ, ư, đ) fehlen oder sind falsch.";
        else if (r.typo) res.explain = "Kleiner Tippfehler – zählt als richtig.";
        if (ex.explain) res.explain = (res.explain ? res.explain + " " : "") + ex.explain;
        return res;
      }
    };
  };

  // Vokabel schreiben (de → vi)
  EX.type = function (ex, api) {
    var v = ex.v;
    var f = typingField(api);
    var el = h("div", null, [label("Wie heißt das auf Vietnamesisch?"), h("div.q-main", null, [v.emoji ? v.emoji + " " : "", v.de]), h("div", { style: { marginTop: "14px" } }, f.wrap)]);
    return {
      el: el, focus: f.ta, vocab: v.vi,
      check: function () {
        var r = V.check(f.ta.value, [v.vi].concat(v.alt || []));
        f.ta.disabled = true;
        S.speak(v.vi);
        return { ok: r.ok, solution: v.vi, explain: r.near === "tone" ? "Fast – nur der Ton stimmt nicht." : r.near === "marks" ? "Fast – Vokalzeichen prüfen." : null };
      }
    };
  };

  // vi → de wählen
  EX.pick = function (ex, api) {
    var v = ex.v, sel = -1;
    var opts = U.shuffle([v.de].concat(distractVocab(api.pool || [], v, 3, "de")));
    var w = optionButtons(opts.map(function (o) { return { text: o }; }), function (i) { sel = i; api.ready(true); });
    var el = h("div", null, [label("Was bedeutet das?"), viLine(v.vi, true), w]);
    return { el: el, autoPlay: v.vi, vocab: v.vi, check: function () { var r = opts.indexOf(v.de); w.mark(sel, r); return { ok: sel === r, solution: v.vi + " = " + v.de }; } };
  };
  // de → vi wählen
  EX.pickvi = function (ex, api) {
    var v = ex.v, sel = -1;
    var opts = U.shuffle([v.vi].concat(distractVocab(api.pool || [], v, 3, "vi")));
    var w = optionButtons(opts.map(function (o) { return { html: V.colorize(o), say: o }; }), function (i) { sel = i; api.ready(true); });
    var el = h("div", null, [label("Wähle das vietnamesische Wort"), h("div.q-main", null, [v.emoji ? v.emoji + " " : "", v.de]), w]);
    return { el: el, vocab: v.vi, check: function () { var r = opts.indexOf(v.vi); w.mark(sel, r); return { ok: sel === r, solution: v.vi + " = " + v.de }; } };
  };
  // Hören → vi wählen (ähnlich klingende Ablenker bevorzugt)
  EX.hear = function (ex, api) {
    var v = ex.v, sel = -1;
    var pool = (api.pool || []).filter(function (x) { return x.vi !== v.vi; });
    var base = V.keyLoose(v.vi);
    var similar = pool.filter(function (x) { return V.keyLoose(x.vi) === base; }).map(function (x) { return x.vi; });
    // künstliche Ton-Ablenker bei einsilbigen Wörtern
    if (V.syllables(v.vi).length === 1) {
      var t = V.toneOf(v.vi);
      [0, 1, 2, 3, 4, 5].filter(function (i) { return i !== t; }).forEach(function (i) { similar.push(V.placeTone(V.stripTone(v.vi), i)); });
    }
    var opts = U.uniq(U.shuffle(similar)).slice(0, 2);
    opts = U.shuffle(U.uniq([v.vi].concat(opts, distractVocab(pool, v, 3, "vi"))).slice(0, 4));
    if (opts.indexOf(v.vi) < 0) opts[0] = v.vi;
    var w = optionButtons(opts.map(function (o) { return { html: U.esc(o) }; }), function (i) { sel = i; api.ready(true); }, "grid2");
    var el = h("div", null, [label("Was hörst du?"), h("div.row", { style: { justifyContent: "center", gap: "16px", margin: "8px 0" } }, [S.button(v.vi, "big"), S.button(v.vi, "slow")]), w]);
    return { el: el, autoPlay: v.vi, vocab: v.vi, check: function () { var r = opts.indexOf(v.vi); w.mark(sel, r); return { ok: sel === r, solution: v.vi + " = " + v.de }; } };
  };

  EX.tone = function (ex, api) {
    var word = ex.word, t = V.toneOf(word), sel = -1;
    var grid = h("div.tone-grid");
    var btns = V.TONES.map(function (tn, i) {
      var b = h("button.tone-btn", { type: "button", style: { "--tc": tn.color }, html: V.toneGlyph(i) + "<b>" + tn.name + "</b><small>" + tn.de + "</small>" });
      b.addEventListener("click", function () { btns.forEach(function (x) { x.style.outline = ""; }); b.style.outline = "3px solid " + tn.color; sel = i; api.ready(true); });
      grid.appendChild(b);
      return b;
    });
    var el = h("div", null, [
      label("Welcher Ton ist das?"),
      h("div.row", { style: { justifyContent: "center", gap: "16px", margin: "8px 0" } }, [S.button(word, "big"), S.button(word, "slow")]),
      h("p.muted", { style: { textAlign: "center" }, text: "Hör genau hin – das Wort wird erst nach dem Prüfen gezeigt." }),
      grid
    ]);
    return {
      el: el, autoPlay: word,
      check: function () {
        btns.forEach(function (b, i) { b.disabled = true; if (i === t) b.classList.add("right"); else if (i === sel) b.classList.add("wrong"); });
        return { ok: sel === t, solution: word + " – Ton " + V.TONES[t].name + " (" + V.TONES[t].de + ", " + V.TONES[t].chao + ")" };
      }
    };
  };

  EX.pairs = function (ex, api) {
    var pairs = ex.pairs.slice(0, 6);
    var left = U.shuffle(pairs.map(function (p, i) { return { t: p[0], i: i, vi: true }; }));
    var right = U.shuffle(pairs.map(function (p, i) { return { t: p[1], i: i }; }));
    var grid = h("div.pairs");
    var selL = null, selR = null, solved = 0, mistakes = 0;
    var mk = function (o) {
      var b = h("button.opt", { type: "button", text: V.display(o.t) });
      o.b = b;
      b.addEventListener("click", function () {
        if (b.classList.contains("gone")) return;
        if (o.vi) { S.speak(o.t); if (selL) selL.b.classList.remove("sel"); selL = o; } else { if (selR) selR.b.classList.remove("sel"); selR = o; }
        b.classList.add("sel");
        if (selL && selR) {
          if (selL.i === selR.i) {
            [selL, selR].forEach(function (x) { x.b.classList.remove("sel"); x.b.classList.add("right"); var bb = x.b; setTimeout(function () { bb.classList.remove("right"); bb.classList.add("gone"); }, 350); });
            solved++;
            if (solved === pairs.length) setTimeout(function () { api.done({ ok: mistakes <= 1, solution: mistakes ? mistakes + " Fehlversuch(e)" : "Alle Paare gefunden!" }); }, 450);
          } else {
            mistakes++;
            var a = selL.b, c = selR.b;
            a.classList.add("wrong"); c.classList.add("wrong");
            setTimeout(function () { a.classList.remove("wrong", "sel"); c.classList.remove("wrong", "sel"); }, 450);
          }
          selL = selR = null;
        }
      });
      return b;
    };
    for (var i = 0; i < pairs.length; i++) { grid.appendChild(mk(left[i])); grid.appendChild(mk(right[i])); }
    return { el: h("div", null, [label("Finde die Paare"), grid]), selfDone: true };
  };

  EX.speak = function (ex, api) {
    var target = ex.vi;
    var heard = h("div.heard");
    var info = h("p.muted", { style: { textAlign: "center", fontSize: "14px" } });
    var mic = h("button.mic-ring", { type: "button", "aria-label": "Aufnahme starten", html: U.svgIcon.mic });
    var result = null;
    var canSR = S.canListen() && VN.store.state.settings.speak;
    var self = h("div.foot-row", { style: { marginTop: "16px" } });
    function selfMode() {
      info.textContent = "Sprich den Satz laut nach und vergleiche mit dem Vorbild. Wie war es?";
      mic.hidden = true;
      U.clear(self);
      var good = h("button.btn.jade", { type: "button", text: "Klang gut" });
      var again = h("button.btn.ghost", { type: "button", text: "Nochmal hören" });
      good.addEventListener("click", function () { VN.store.state.stats.spoken++; api.done({ ok: true, solution: V.display(target), self: true }); });
      again.addEventListener("click", function () { S.speak(target, { slow: true }); });
      U.append(self, [again, good]);
    }
    if (canSR) {
      info.textContent = "Tippe aufs Mikrofon und sprich den Satz.";
      mic.addEventListener("click", function () {
        if (mic.classList.contains("listening")) return;
        S.stop();
        mic.classList.add("listening");
        heard.textContent = "…";
        S.listen(function (p) { heard.textContent = p; }).then(function (r) {
          mic.classList.remove("listening");
          if (r.error) {
            if (r.error === "not-allowed" || r.error === "service-not-allowed" || r.error === "unsupported") { heard.textContent = ""; selfMode(); return; }
            heard.textContent = "Nichts verstanden – nochmal versuchen.";
            return;
          }
          var best = r.alts.map(function (a) { return S.compare(target, a); }).sort(function (a, b) { return b.score - a.score; })[0];
          var orig = V.display(target).replace(/[.,!?;:…"“”„«»()\[\]–—]/g, " ").split(/\s+/).filter(Boolean);
          heard.innerHTML = best.marks.map(function (m, i) { return '<span class="' + (m.ok ? "ok" : "no") + '">' + U.esc(orig[i] || m.w) + "</span>"; }).join(" ");
          VN.store.state.stats.spoken++;
          result = best;
          if (best.score >= 0.7) api.done({ ok: true, solution: V.display(target), explain: Math.round(best.score * 100) + " % der Silben erkannt." });
          else info.textContent = Math.round(best.score * 100) + " % erkannt. Rot = Silbe nicht erkannt (oft der Ton). Nochmal?";
        });
      });
    } else selfMode();
    var skip = h("button.btn.small.ghost", { type: "button", text: "Kann gerade nicht sprechen" });
    skip.addEventListener("click", function () { api.done({ ok: true, skipped: true, solution: V.display(target) }); });
    var el = h("div", null, [
      label("Sprich nach"),
      viLine(target, true),
      h("div.q-sub", { text: ex.de }),
      h("div", { html: V.curveSVG(target) }),
      mic, heard, info, self,
      h("div", { style: { textAlign: "center", marginTop: "14px" } }, skip)
    ]);
    return { el: el, autoPlay: target, selfDone: true };
  };
})();
