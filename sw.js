/* Service worker de TE Cars VIP v2.
   - La page est cherchée en ligne d'abord (nouveautés dès l'ouverture), et lue depuis la mémoire sans internet.
   - Icônes et polices : lues depuis la mémoire, mises à jour en arrière-plan. */
const VERSION = 'tecars-vip-v2';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(req) {
  const cache = await caches.open(VERSION);
  try {
    const res = await Promise.race([
      fetch(req),
      new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 4000))
    ]);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch (err) {
    return (await cache.match(req, { ignoreSearch: true }))
      || (await cache.match('./index.html'))
      || (await cache.match('./'))
      || Response.error();
  }
}

async function staleWhileRevalidate(req, sameOrigin) {
  const cache = await caches.open(VERSION);
  const hit = await cache.match(req, { ignoreSearch: sameOrigin });
  const net = fetch(req).then(res => {
    if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
    return res;
  }).catch(() => null);
  return hit || (await net) || Response.error();
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const fonts = /(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!sameOrigin && !fonts) return;
  if (req.mode === 'navigate') { e.respondWith(networkFirst(req)); return; }
  e.respondWith(staleWhileRevalidate(req, sameOrigin));
});
