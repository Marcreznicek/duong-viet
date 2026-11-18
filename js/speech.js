/* Sprachausgabe (iPhone-Stimme bzw. Browser) und Spracherkennung */
(function () {
  var VN = window.VN, U = VN.U, V = VN.V;
  var S = (VN.S = {});
  var synth = window.speechSynthesis || null;
  var voice = null, voices = [];
  var claudeTts = null;

  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices() || [];
    var vi = voices.filter(function (v) { return /^vi([-_]|$)/i.test(v.lang); });
    var wanted = VN.store && VN.store.state.settings.voice;
    voice = vi.find(function (v) { return v.name === wanted; }) ||
      vi.find(function (v) { return /linh|an\b|premium|enhanced|natural|neural/i.test(v.name); }) ||
      vi[0] || null;
  }
  if (synth) {
    loadVoices();
    if (typeof synth.addEventListener === "function") synth.addEventListener("voiceschanged", loadVoices);
    else synth.onvoiceschanged = loadVoices;
  }
  S.viVoices = function () { loadVoices(); return voices.filter(function (v) { return /^vi([-_]|$)/i.test(v.lang); }); };
  S.hasVoice = function () { loadVoices(); return !!voice || !!claudeTts; };
  S.voiceName = function () { loadVoices(); return voice ? voice.name : claudeTts ? "Claude-Stimme" : ""; };
  S.setClaudeTts = function (t) { claudeTts = t; };

  var current = null;
  // speak(text, {slow, el}) → Promise
  S.speak = function (text, opts) {
    opts = opts || {};
    text = V.display(text).replace(/[“”"]/g, "");
    if (!text.trim()) return Promise.resolve();
    loadVoices();
    var rate = (VN.store ? VN.store.state.settings.rate : 0.9) * (opts.slow ? 0.62 : 1);
    var el = opts.el;
    if (el) el.classList.add("playing");
    var done = function () { if (el) el.classList.remove("playing"); };
    if (synth && voice) {
      return new Promise(function (resolve) {
        try { synth.cancel(); } catch (e) {}
        var u = new SpeechSynthesisUtterance(text);
        u.voice = voice; u.lang = voice.lang; u.rate = rate; u.pitch = 1;
        var fin = function () { done(); resolve(); };
        u.onend = fin; u.onerror = fin;
        current = u;
        synth.speak(u);
        // iOS beendet manchmal ohne onend
        setTimeout(fin, 2500 + text.length * 160 / rate);
      });
    }
    if (claudeTts) {
      return claudeTts.speak(text, { language: "vi", rate: Math.max(0.7, Math.min(1.5, rate)) })
        .catch(function () {}).then(done);
    }
    done();
    if (!S._warned) { S._warned = true; U.toast("Keine vietnamesische Stimme gefunden – siehe Profil › Stimme.", 4200); }
    return Promise.resolve();
  };
  S.stop = function () { try { synth && synth.cancel(); } catch (e) {} try { claudeTts && claudeTts.stop(); } catch (e) {} };

  // Knopf zum Vorlesen
  S.button = function (text, cls) {
    var b = U.h("button.say-btn" + (cls ? "." + cls : ""), { type: "button", "aria-label": cls === "slow" ? "Langsam vorlesen" : "Vorlesen", html: cls === "slow" ? U.svgIcon.turtle : U.svgIcon.speaker });
    b.addEventListener("click", function (e) { e.stopPropagation(); S.speak(text, { slow: cls === "slow", el: b }); });
    return b;
  };
  // Antippbare VI-Wörter in Erklärtexten
  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest("[data-say]");
    if (t && !t.classList.contains("say-btn")) S.speak(t.getAttribute("data-say"));
  });

  // ---------- Spracherkennung ----------
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  S.canListen = function () { return !!SR && !S._srBroken; };
  // listen() → Promise<{alts:[...]} | {error}>
  S.listen = function (onPartial) {
    return new Promise(function (resolve) {
      if (!SR) return resolve({ error: "unsupported" });
      var rec;
      try { rec = new SR(); } catch (e) { return resolve({ error: "unsupported" }); }
      rec.lang = "vi-VN";
      rec.interimResults = true;
      rec.maxAlternatives = 5;
      rec.continuous = false;
      var finalAlts = [], settled = false;
      var finish = function (r) { if (settled) return; settled = true; try { rec.stop(); } catch (e) {} resolve(r); };
      rec.onresult = function (ev) {
        var res = ev.results[ev.results.length - 1];
        var alts = [];
        for (var i = 0; i < res.length; i++) alts.push(res[i].transcript);
        if (onPartial) onPartial(alts[0] || "");
        if (res.isFinal) { finalAlts = alts; finish({ alts: finalAlts }); }
      };
      rec.onerror = function (ev) {
        if (ev.error === "not-allowed" || ev.error === "service-not-allowed") S._srBroken = true;
        finish({ error: ev.error || "error" });
      };
      rec.onend = function () { finish(finalAlts.length ? { alts: finalAlts } : { error: "no-speech" }); };
      try { rec.start(); } catch (e) { finish({ error: "start" }); }
      setTimeout(function () { finish(finalAlts.length ? { alts: finalAlts } : { error: "timeout" }); }, 9000);
    });
  };
  // Silbenweiser Vergleich → {score, marks:[{w, ok}]}
  S.compare = function (target, heard) {
    var t = V.key(target).split(" ");
    var h = V.key(heard).split(" ");
    var used = {};
    var marks = t.map(function (w) {
      var i = h.findIndex(function (x, j) { return !used[j] && x === w; });
      if (i >= 0) { used[i] = 1; return { w: w, ok: true }; }
      return { w: w, ok: false };
    });
    var score = marks.filter(function (m) { return m.ok; }).length / Math.max(1, t.length);
    return { score: score, marks: marks };
  };
})();
