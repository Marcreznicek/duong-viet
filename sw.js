// Offline-Cache für Đường Việt (Version 202611181551)
const CACHE = "duongviet-202611181551";
const PRECACHE = ["./","index.html","manifest.webmanifest","css/app.css?v=202611181551","data/cards.js?v=202611181551","data/k01.js?v=202611181551","data/k02.js?v=202611181551","data/k03.js?v=202611181551","data/k04.js?v=202611181551","data/k05.js?v=202611181551","data/k06.js?v=202611181551","data/k07.js?v=202611181551","data/k08.js?v=202611181551","data/k09.js?v=202611181551","data/k10.js?v=202611181551","data/k11.js?v=202611181551","data/k12.js?v=202611181551","data/meta.js?v=202611181551","data/_core.js?v=202611181551","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","img/k01.jpg","img/k02.jpg","img/k03.jpg","img/k04.jpg","img/k05.jpg","img/k06.jpg","img/k07.jpg","img/k08.jpg","img/k09.jpg","img/k10.jpg","img/k11.jpg","img/k12.jpg","js/boss.js?v=202611181551","js/exercises.js?v=202611181551","js/lesson.js?v=202611181551","js/main.js?v=202611181551","js/speech.js?v=202611181551","js/store.js?v=202611181551","js/util.js?v=202611181551","js/viet.js?v=202611181551","js/views.js?v=202611181551"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
    if (res && (res.ok || res.type === "opaque") && /fonts\.(googleapis|gstatic)\.com|\/img\//.test(e.request.url)) {
      const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy));
    }
    return res;
  }).catch(() => caches.match("index.html"))));
});
