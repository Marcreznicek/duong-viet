/* Vietnamesisch-spezifische Logik: Töne, Silben, Telex, Antwortvergleich, Tonkurven */
(function () {
  var VN = window.VN, U = VN.U;
  var V = (VN.V = {});

  // Ton-Kennungen
  V.TONES = [
    { id: "ngang", name: "ngang", de: "eben", mark: "", chao: "33", color: "var(--t-ngang)", telex: "z" },
    { id: "huyen", name: "huyền", de: "fallend", mark: "̀", chao: "21", color: "var(--t-huyen)", telex: "f" },
    { id: "sac", name: "sắc", de: "steigend", mark: "́", chao: "35", color: "var(--t-sac)", telex: "s" },
    { id: "hoi", name: "hỏi", de: "fallend-steigend", mark: "̉", chao: "313", color: "var(--t-hoi)", telex: "r" },
    { id: "nga", name: "ngã", de: "gebrochen steigend", mark: "̃", chao: "3ʔ5", color: "var(--t-nga)", telex: "x" },
    { id: "nang", name: "nặng", de: "tief, abgehackt", mark: "̣", chao: "21ʔ", color: "var(--t-nang)", telex: "j" }
  ];
  var MARK2TONE = {}; V.TONES.forEach(function (t, i) { if (t.mark) MARK2TONE[t.mark] = i; });
  var TONE_MARKS = /[̣̀́̃̉]/g;

  // Ton einer Silbe (Index 0–5)
  V.toneOf = function (syl) {
    var d = String(syl).normalize("NFD");
    var m = d.match(/[̣̀́̃̉]/);
    return m ? MARK2TONE[m[0]] : 0;
  };
  V.stripTone = function (s) { return String(s).normalize("NFD").replace(TONE_MARKS, "").normalize("NFC"); };
  V.stripAll = function (s) {
    return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").normalize("NFC");
  };
  V.syllables = function (s) { return String(s).split(/[\s\-–]+/).map(function (x) { return x.replace(/[^\p{L}]/gu, ""); }).filter(Boolean); };
  V.hasLetters = function (s) { return /\p{L}/u.test(s); };

  // Vokale (ohne Ton) und Tonplatzierung
  var VOWELS = "aăâeêioôơuưy";
  var isV = function (c) { return VOWELS.indexOf(c.toLowerCase()) >= 0; };
  function placeTone(word, toneIdx) {
    var base = V.stripTone(word);
    if (!toneIdx) return base;
    var chars = Array.from(base);
    var lower = chars.map(function (c) { return c.toLowerCase(); });
    // Vokalgruppe finden (qu/gi berücksichtigen)
    var start = -1, end = -1;
    for (var i = 0; i < lower.length; i++) {
      if (isV(lower[i])) {
        if (lower[i] === "u" && i > 0 && lower[i - 1] === "q") continue;
        if (lower[i] === "i" && i > 0 && lower[i - 1] === "g" && i + 1 < lower.length && isV(lower[i + 1])) continue;
        if (start < 0) start = i;
        end = i;
      } else if (start >= 0) break;
    }
    if (start < 0) return base;
    var group = lower.slice(start, end + 1).join("");
    var hasFinal = end + 1 < lower.length;
    var pos = start;
    var special = -1;
    for (var j = start; j <= end; j++) if ("ăâêôơư".indexOf(lower[j]) >= 0) special = j;
    if (special >= 0) pos = special;           // Vokal mit Diakritikum (bei ươ das ơ = letztes)
    else if (group.length === 1) pos = start;
    else if (group.length === 2) pos = hasFinal ? start + 1 : start;   // hòa, khỏe, thủy, mùa | hoàn, toán
    else pos = start + 1;
    var mark = V.TONES[toneIdx].mark;
    chars[pos] = (chars[pos] + mark).normalize("NFC");
    return chars.join("").normalize("NFC");
  }
  V.placeTone = placeTone;

  // Vergleichsschlüssel: unabhängig von alter/neuer Tonplatzierung, Groß/Klein, Satzzeichen
  V.key = function (s) {
    return String(s).normalize("NFC").toLowerCase()
      .replace(/_/g, " ")
      .replace(/[.,!?;:…"“”„«»()\[\]¿¡–—]/g, " ")
      .split(/\s+/).filter(Boolean)
      .map(function (w) { return V.stripTone(w) + V.toneOf(w); })
      .join(" ");
  };
  V.keyNoTone = function (s) { return V.key(s).replace(/\d/g, ""); };
  V.keyLoose = function (s) { return V.stripAll(V.key(s)).replace(/\d/g, ""); };

  // Vergleicht Eingabe mit Antwortliste → {ok, near, best}
  V.check = function (input, answers) {
    var k = V.key(input);
    for (var i = 0; i < answers.length; i++) if (V.key(answers[i]) === k) return { ok: true, best: answers[i] };
    var kn = V.keyNoTone(input);
    for (i = 0; i < answers.length; i++) if (V.keyNoTone(answers[i]) === kn) return { ok: false, near: "tone", best: answers[i] };
    var kl = V.keyLoose(input);
    for (i = 0; i < answers.length; i++) if (V.keyLoose(answers[i]) === kl) return { ok: false, near: "marks", best: answers[i] };
    // Tippfehler-Toleranz: 1 Zeichen bei langen Antworten
    for (i = 0; i < answers.length; i++) {
      var a = V.key(answers[i]);
      if (a.length > 12 && lev(a, k) <= 1) return { ok: true, typo: true, best: answers[i] };
    }
    return { ok: false, best: answers[0] };
  };
  function lev(a, b) {
    var m = a.length, n = b.length, d = [];
    for (var i = 0; i <= m; i++) { d[i] = [i]; }
    for (var j = 0; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  V.lev = lev;

  // ---------- Telex ----------
  // Verarbeitet einen weiteren Tastendruck ch auf das aktuelle Wort prev. Gibt neues Wort zurück oder null (keine Umwandlung).
  var TELEX_TONE = { s: 2, f: 1, r: 3, x: 4, j: 5, z: 0 };
  V.telexKey = function (prev, ch) {
    if (!prev) return null;
    var lc = ch.toLowerCase();
    var plain = V.stripTone(prev);
    var tone = V.toneOf(prev);
    var hasVowel = Array.from(plain).some(isV);
    // Ton
    if (TELEX_TONE.hasOwnProperty(lc) && hasVowel) {
      var t = TELEX_TONE[lc];
      if (t === tone && t !== 0) return placeTone(plain, 0) + ch; // doppelt → zurücknehmen
      if (t === 0 && tone === 0) return null;
      return placeTone(plain, t);
    }
    var last = plain.slice(-1), lastL = last.toLowerCase();
    var up = last !== lastL;
    var withTone = function (w) { return placeTone(w, tone); };
    // aa ee oo → â ê ô (auch über einen Endkonsonanten hinweg: "toan" + "a"? → nur direkt)
    if ((lc === "a" || lc === "e" || lc === "o") && lastL === lc) {
      var map = { a: "â", e: "ê", o: "ô" };
      return withTone(plain.slice(0, -1) + (up ? map[lc].toUpperCase() : map[lc]));
    }
    if ((lc === "a" && lastL === "â") || (lc === "e" && lastL === "ê") || (lc === "o" && lastL === "ô")) {
      return withTone(plain.slice(0, -1) + (up ? lc.toUpperCase() : lc)) + ch;
    }
    // Zirkumflex nachträglich: "tien" + "e" → "tiên" (Vokal vor Endkonsonant)
    if (lc === "a" || lc === "e" || lc === "o") {
      var mm = plain.match(/^(.*?)([aeoAEO])([^aăâeêioôơuưyAĂÂEÊIOÔƠUƯY]+)$/);
      if (mm && mm[2].toLowerCase() === lc && /^[cmnpthg]+$/i.test(mm[3])) {
        var mp = { a: "â", e: "ê", o: "ô" };
        var rep = mm[2] === mm[2].toUpperCase() ? mp[lc].toUpperCase() : mp[lc];
        return withTone(mm[1] + rep + mm[3]);
      }
    }
    // dd → đ
    if (lc === "d" && lastL === "d" && plain.length === 1) return up ? "Đ" : "đ";
    if (lc === "d" && /^d/i.test(plain) && plain.length > 1 && !/^đ/i.test(plain)) {
      // "dong" + "d" → "đong" (Telex erlaubt d am Ende)
      return withTone((plain[0] === "D" ? "Đ" : "đ") + plain.slice(1));
    }
    // w
    if (lc === "w") {
      var low = plain.toLowerCase();
      var idx;
      if ((idx = low.lastIndexOf("uo")) >= 0 && /^[^aăâeêioôơuưy]*$/.test(low.slice(idx + 2))) {
        var arr = Array.from(plain);
        arr[idx] = arr[idx] === "U" ? "Ư" : "ư";
        arr[idx + 1] = arr[idx + 1] === "O" ? "Ơ" : "ơ";
        return withTone(arr.join(""));
      }
      for (var i = plain.length - 1; i >= 0; i--) {
        var c = plain[i], cl = c.toLowerCase();
        var tgt = { a: "ă", o: "ơ", u: "ư" }[cl];
        if (tgt) { var a2 = Array.from(plain); a2[i] = c === cl ? tgt : tgt.toUpperCase(); return withTone(a2.join("")); }
        var back = { "ă": "a", "ơ": "o", "ư": "u" }[cl];
        if (back) { var a3 = Array.from(plain); a3[i] = c === cl ? back : back.toUpperCase(); return withTone(a3.join("")) + ch; }
        if (isV(cl)) break;
      }
      if (!hasVowel || /[^aăâeêioôơuưy]$/i.test(plain)) return null;
    }
    // Ton nach Vokaländerung erneut setzen: z. B. "toá" + "n" bleibt korrekt → Ton neu platzieren
    if (tone && /[a-zđ]/i.test(ch)) return placeTone(plain + ch, tone);
    return null;
  };
  // Einzelnes "w" am Wortanfang → ư
  V.telexStandaloneW = function (ch) { return ch === "w" ? "ư" : ch === "W" ? "Ư" : null; };

  // Bindet Telex an ein Eingabefeld
  V.attachTelex = function (input, isOn) {
    input.setAttribute("autocapitalize", "off");
    input.setAttribute("autocorrect", "off");
    input.setAttribute("autocomplete", "off");
    input.setAttribute("spellcheck", "false");
    input.addEventListener("beforeinput", function (e) {
      if (!isOn()) return;
      if (e.inputType !== "insertText" || !e.data || e.data.length !== 1) return;
      var ch = e.data;
      if (!/[a-z]/i.test(ch)) return;
      var pos = input.selectionStart, endSel = input.selectionEnd;
      if (pos !== endSel) return;
      var before = input.value.slice(0, pos);
      var m = before.match(/[\p{L}]+$/u);
      var prev = m ? m[0] : "";
      var res = prev ? V.telexKey(prev, ch) : V.telexStandaloneW(ch);
      if (res == null) return;
      e.preventDefault();
      var start = pos - prev.length;
      input.value = input.value.slice(0, start) + res + input.value.slice(pos);
      var np = start + res.length;
      input.setSelectionRange(np, np);
      input.dispatchEvent(new Event("input", { bubbles: true }));
    });
  };

  // Tonzeichen per Taste auf das Wort vor dem Cursor setzen (Akzentleiste)
  V.applyToneAtCursor = function (input, toneIdx) {
    var pos = input.selectionStart;
    var before = input.value.slice(0, pos);
    var m = before.match(/[\p{L}]+$/u);
    if (!m) return;
    var w = m[0];
    var res = placeTone(V.stripTone(w), V.toneOf(w) === toneIdx ? 0 : toneIdx);
    var start = pos - w.length;
    input.value = input.value.slice(0, start) + res + input.value.slice(pos);
    input.setSelectionRange(start + res.length, start + res.length);
    input.focus();
  };
  V.insertAtCursor = function (input, txt) {
    var p = input.selectionStart, e = input.selectionEnd;
    input.value = input.value.slice(0, p) + txt + input.value.slice(e);
    input.setSelectionRange(p + txt.length, p + txt.length);
    input.focus();
  };

  // ---------- Tonkurven ----------
  // Punkte auf einer Skala 1–5 (Chao), x 0..1
  V.CURVES = [
    [[0, 3.3], [1, 3.3]],                         // ngang 33
    [[0, 2.4], [1, 1.2]],                         // huyền 21
    [[0, 3.1], [0.35, 3.3], [1, 4.9]],            // sắc 35
    [[0, 3], [0.55, 1.2], [1, 2.4]],              // hỏi 313 (Nord: tief fallend-steigend)
    [[0, 3.1], [0.42, 3.6], null, [0.58, 3.4], [1, 5]], // ngã 3ʔ5 (Bruch)
    [[0, 2.3], [0.55, 1.1]]                       // nặng 21ʔ (kurz, Knarrstimme)
  ];
  function curvePath(ti, x0, w, y) {
    var pts = V.CURVES[ti], d = "", move = true;
    pts.forEach(function (p) {
      if (!p) { move = true; return; }
      var X = x0 + p[0] * w, Y = y(p[1]);
      d += (move ? "M" : "L") + X.toFixed(1) + " " + Y.toFixed(1) + " ";
      move = false;
    });
    return d.trim();
  }
  V.curvePath = curvePath;

  // SVG mit Tonkurven aller Silben eines Ausdrucks
  V.curveSVG = function (text) {
    var syls = V.syllables(text).slice(0, 8);
    var n = Math.max(syls.length, 1);
    var W = 340, H = 120, padL = 22, padR = 8, top = 10, bot = 26;
    var cw = (W - padL - padR) / n;
    var y = function (v) { return top + (5 - v) / 4 * (H - top - bot); };
    var s = '<svg class="tone-curve" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Tonhöhenverlauf"><g class="grid">';
    for (var l = 1; l <= 5; l++) s += '<line x1="' + padL + '" x2="' + (W - padR) + '" y1="' + y(l) + '" y2="' + y(l) + '"/><text x="4" y="' + (y(l) + 3) + '">' + l + "</text>";
    s += "</g>";
    syls.forEach(function (sy, i) {
      var t = V.toneOf(sy);
      var x0 = padL + i * cw + cw * 0.14, w = cw * 0.72;
      s += '<path class="c" style="stroke:' + V.TONES[t].color + '" d="' + curvePath(t, x0, w, y) + '"/>';
      if (t === 5) { var p = V.CURVES[5][1]; s += '<circle cx="' + (x0 + p[0] * w) + '" cy="' + y(p[1]) + '" r="4" style="fill:' + V.TONES[5].color + '"/>'; }
      s += '<text class="lbl" text-anchor="middle" x="' + (x0 + w / 2) + '" y="' + (H - 8) + '" style="fill:' + V.TONES[t].color + '">' + U.esc(sy) + "</text>";
    });
    return s + "</svg>";
  };
  // Kleines Ton-Icon (für Tonknöpfe)
  V.toneGlyph = function (ti) {
    var y = function (v) { return 4 + (5 - v) / 4 * 26; };
    var s = '<svg viewBox="0 0 56 34" aria-hidden="true"><path d="' + curvePath(ti, 6, 44, y) + '"/>';
    if (ti === 5) { var p = V.CURVES[5][1]; s += '<circle cx="' + (6 + p[0] * 44) + '" cy="' + y(p[1]) + '" r="3.5" style="fill:var(--tc)"/>'; }
    return s + "</svg>";
  };

  // Text mit tonfarbigen Silben
  V.colorize = function (text) {
    return String(text).split(/(\s+)/).map(function (part) {
      if (!part.trim() || !V.hasLetters(part)) return U.esc(part);
      var t = V.toneOf(part);
      return '<span class="syl" data-tone="' + t + '" style="--tc:' + V.TONES[t].color + '">' + U.esc(part) + "</span>";
    }).join("");
  };

  // Kacheln aus Satz (Unterstrich verbindet)
  V.tiles = function (vi) {
    return String(vi).replace(/[.,!?;:…"“”„«»()]/g, " ").split(/\s+/).filter(Boolean).map(function (t) { return t.replace(/_/g, " "); });
  };
  V.display = function (vi) { return String(vi).replace(/_/g, " "); };
})();
