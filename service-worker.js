self.addEventListener('install', () => {
  console.log('[sw]', 'Your ServiceWorker is installed');
});

self.addEventListener('push', ev => {
  console.log('[sw]', 'pushed!!', ev.data.json());
  const {title, msg, icon} = ev.data.json();
  self.registration.showNotification(title, {
    body: msg,
    icon: icon,
  });
});
