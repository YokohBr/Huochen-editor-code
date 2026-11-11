// Huochen Code Station - service worker (modo offline)
// Página principal: rede primeiro (atualizações aparecem na hora), cache se estiver offline.
// Bibliotecas (Monaco, fontes): cache primeiro, atualizando em segundo plano.
const C = 'huochen-v10';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => clients.claim())));
self.addEventListener('fetch', e => {
  const q = e.request; if (q.method !== 'GET' || !q.url.startsWith('http')) return;
  e.respondWith(caches.open(C).then(async c => {
    if (q.mode === 'navigate'){ try { const r = await fetch(q); c.put(q, r.clone()); return r; } catch { return (await c.match(q)) || (await c.match('/')) || Response.error(); } }
    const hit = await c.match(q);
    const net = fetch(q).then(r => { if (r && (r.status === 200 || r.type === 'opaque')) c.put(q, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
