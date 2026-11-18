/* Start, Navigation, Kopfzeile */
(function () {
  var VN = window.VN, U = VN.U, h = U.h;
  var store = VN.store, G = VN.game, R = VN.srs;
  var TABS = ["reise", "ueben", "grammatik", "sammlung", "profil"];

  VN.applyTheme = function () {
    var t = store.state.settings.theme;
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
    else if (VN._themeSet) document.documentElement.removeAttribute("data-theme");
    VN._themeSet = !!t;
  };

  function currentTab() { var t = (location.hash || "").slice(1); return TABS.indexOf(t) >= 0 ? t : "reise"; }
  VN.refresh = function () { VN.views.render(currentTab()); updateTop(); };

  function updateTop() {
    var s = store.state;
    var today = U.today();
    var active = s.streak.last === today;
    document.getElementById("streak-num").textContent = s.streak.count;
    document.getElementById("stat-streak").classList.toggle("off", !active);
    document.getElementById("coins-num").textContent = s.coins;
    var x = G.todayXP(), goal = s.settings.goal;
    var frac = Math.min(1, x / goal);
    document.getElementById("ring-fg").style.strokeDashoffset = (97.4 * (1 - frac)).toFixed(1);
    document.getElementById("goal-txt").textContent = x;
    var due = R.due().length, b = document.getElementById("due-badge");
    b.hidden = !due; b.textContent = due > 99 ? "99+" : due;
  }
  store.on(updateTop);

  document.getElementById("stat-streak").addEventListener("click", function () {
    var s = store.state.streak;
    U.toast(s.count + " Tage Serie · Rekord " + s.best + " · Serienschutz " + s.freezes + "/3");
  });
  document.getElementById("stat-coins").addEventListener("click", function () {
    U.toast(store.state.coins + " đồng – im Profil gegen Serienschutz tauschen.");
  });
  document.getElementById("goal-ring").addEventListener("click", function () {
    U.toast("Heute " + G.todayXP() + " von " + store.state.settings.goal + " XP");
  });

  G.onLevelUp(function (lvl) {
    var r = G.rank(lvl);
    var ov = h("div.levelup", null, h("div.card", null, [
      h("div.eyebrow", { text: "Aufgestiegen" }),
      h("div.level-seal", { style: { margin: "14px auto" }, text: lvl }),
      h("h2", { style: { fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "28px" }, text: "Stufe " + lvl }),
      h("p.muted", { style: { marginTop: "6px" }, text: "Rang: " + r.vi + " – " + r.de }),
      h("button.btn.block", { type: "button", style: { marginTop: "18px" }, text: "Weiter" })
    ]));
    ov.querySelector("button").addEventListener("click", function () { ov.remove(); });
    document.body.appendChild(ov);
  });

  window.addEventListener("hashchange", function () { VN.views.render(currentTab()); window.scrollTo(0, 0); });

  // Start
  VN.applyTheme();
  G.checkStreak();
  VN.refresh();

  // claude.ai-Laufzeit (nur im Artifact): Sync + Stimme als Rückfall
  if (window.claude && typeof window.claude.use === "function") {
    store.initCloud().then(function (ok) { if (ok) VN.refresh(); });
    window.claude.use("tts").then(function (t) { if (t) VN.S.setClaudeTts(t); }).catch(function () {});
  } else if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
