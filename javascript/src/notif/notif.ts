export const isNotificationAllowed = () => {
  return Notification.permission === "granted";
};

export const showNotification = ({
  title,
  body,
  icon
}: {
  title: string;
  body: string;
  icon: string;
}) => {
  if (isNotificationAllowed()) {
    console.log("Notif Allowed");
    if (!navigator.serviceWorker) {
      console.log("No service worker, cannot notify... sorry !");
      return;
    }
    navigator.serviceWorker.ready.then(registration => {
      console.log("Notif !");
      registration.showNotification(title, {
        body,
        icon
      });
    });
  } else {
    console.log("Cannot notify, please allow notification.");
  }
};
