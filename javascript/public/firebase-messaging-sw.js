importScripts("https://www.gstatic.com/firebasejs/6.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.6.1/firebase-messaging.js");

const firebaseConfig = {
  messagingSenderId: "734287808356"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  const title = payload.data.title;
  const options = {
    body: "Test"
  };
  return self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", function(event) {
  console.log("click");
});
