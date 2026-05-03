self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : { title: 'カウントダウン', body: '' };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'https://zc9yy2.github.io/countdown/icon.png',
      tag: 'countdown-daily',
      renotify: true,
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('https://zc9yy2.github.io/countdown/'));
});
