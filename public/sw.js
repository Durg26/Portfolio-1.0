// Kill-switch service worker.
// Earlier versions cached the app shell and trapped stale asset hashes,
// which broke the page after each deploy. This version installs, immediately
// deletes every cache, unregisters itself, and stops intercepting fetches —
// so any browser still holding an old SW gets fully cleaned up.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.clients.claim();
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});

// No fetch handler — requests go straight to the network.
