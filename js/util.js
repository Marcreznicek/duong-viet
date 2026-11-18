/* Allgemeine Helfer */
(function () {
  var VN = window.VN;
  var U = (VN.U = {});

  U.$ = function (sel, root) { return (root || document).querySelector(sel); };
  U.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  U.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  // h("div.card#x", {onclick:..., "data-a":1}, [children | "text"])
  U.h = function (tag, attrs, kids) {
    var m = /^([a-z0-9]+)?((?:[.#][\w-]+)*)$/i.exec(tag) || [];
    var el = document.createElement(m[1] || "div");
    (m[2] || "").replace(/([.#])([\w-]+)/g, function (_, t, v) {
      if (t === ".") el.classList.add(v); else el.id = v;
    });
    if (attrs) for (var k in attrs) {
      var v = attrs[k];
      if (v == null || v === false) continue;
      if (k.slice(0, 2) === "on" && typeof v === "function") el.addEventListener(k.slice(2), v);
      else if (k === "html") el.innerHTML = v;
      else if (k === "text") el.textContent = v;
      else if (k === "class") el.className += " " + v;
      else if (k === "style" && typeof v === "object") Object.assign(el.style, v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    if (kids != null) U.append(el, kids);
    return el;
  };
  U.append = function (el, kids) {
    if (!Array.isArray(kids)) kids = [kids];
    kids.forEach(function (k) {
      if (k == null || k === false) return;
      if (Array.isArray(k)) return U.append(el, k);
      el.appendChild(typeof k === "object" ? k : document.createTextNode(String(k)));
    });
    return el;
  };
  U.clear = function (el) { while (el.firstChild) el.removeChild(el.firstChild); return el; };

  U.shuffle = function (a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };
  U.pick = function (a, n) { return U.shuffle(a).slice(0, n); };
  U.uniq = function (a) { var s = new Set(); return a.filter(function (x) { if (s.has(x)) return false; s.add(x); return true; }); };

  U.today = function (d) {
    d = d || new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  };
  U.dayDiff = function (a, b) { // b - a in Tagen (YYYY-MM-DD)
    var pa = a.split("-"), pb = b.split("-");
    return Math.round((Date.UTC(pb[0], pb[1] - 1, pb[2]) - Date.UTC(pa[0], pa[1] - 1, pa[2])) / 86400000);
  };
  U.addDays = function (day, n) {
    var p = day.split("-"); var d = new Date(Date.UTC(p[0], p[1] - 1, p[2]) + n * 86400000);
    return d.getUTCFullYear() + "-" + String(d.getUTCMonth() + 1).padStart(2, "0") + "-" + String(d.getUTCDate()).padStart(2, "0");
  };

  // Leichtes Markdown: **fett**, *kursiv*, `vi`, Absätze, Listen "- "
  U.inline = function (s) {
    return U.esc(s)
      .replace(/`([^`]+)`/g, function (_, v) { return '<span class="vi" data-say="' + v.replace(/"/g, "&quot;") + '">' + v + "</span>"; })
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
  };
  U.md = function (s) {
    if (!s) return "";
    return String(s).split(/\n\s*\n/).map(function (block) {
      var lines = block.split("\n");
      if (lines.every(function (l) { return /^\s*[-•]\s+/.test(l); })) {
        return "<ul>" + lines.map(function (l) { return "<li>" + U.inline(l.replace(/^\s*[-•]\s+/, "")) + "</li>"; }).join("") + "</ul>";
      }
      return "<p>" + lines.map(U.inline).join("<br>") + "</p>";
    }).join("");
  };

  var toastTimer;
  U.toast = function (msg, ms) {
    var t = document.getElementById("toast");
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, ms || 2600);
  };

  U.svgIcon = {
    speaker: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>',
    turtle: '<span aria-hidden="true" style="font-size:19px;line-height:1">🐢</span>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 6-8 11-8 11z"/></svg>',
    mic: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V22h2v-3.1a7 7 0 0 0 6-6.9h-2z"/></svg>'
  };
})();
