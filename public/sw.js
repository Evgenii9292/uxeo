// ── Skillum Service Worker ────────────────────────────────────────────────────
// Handles Web Push notifications

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

// ── Push event ────────────────────────────────────────────────────────────────
self.addEventListener("push", (e) => {
  if (!e.data) return;

  let payload;
  try {
    payload = e.data.json();
  } catch {
    payload = { title: "Skillum", body: e.data.text() };
  }

  const { title = "Skillum", body = "", icon = "/icon-192.png", badge = "/icon-192.png", data = {} } = payload;

  e.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon,
      badge,
      data,
      vibrate: [100, 50, 100],
      requireInteraction: false,
    })
  );
});

// ── Notification click ────────────────────────────────────────────────────────
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  let url;
  try {
    const target = new URL(e.notification.data?.url || "/", self.location.origin);
    url = target.origin === self.location.origin ? target.href : self.location.origin + "/";
  } catch { url = self.location.origin + "/"; }

  e.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      // Focus existing tab if open
      for (const client of clientList) {
        if (new URL(client.url).origin === self.location.origin) {
          return client.navigate(url).then(() => client.focus());
        }
      }
      // Open new tab
      return self.clients.openWindow(url);
    })
  );
});
