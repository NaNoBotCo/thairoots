// v6: adds searchcore.js (the shared Thai-aware matcher). The cache name MUST
// change whenever the precache list does, or an installed reader keeps serving
// v5's file list and never fetches the new script offline.
const C='trd-v6';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./manifest.json','./searchcore.js'])))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
