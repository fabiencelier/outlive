importScripts("https://www.gstatic.com/firebasejs/6.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.6.1/firebase-messaging.js");

// https://codeburst.io/how-to-add-push-notifications-on-firebase-cloud-messaging-to-react-web-app-de7c6f04c920

let birth = null;
let database = null;

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const dateDiffInDays = (a, b) => {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

const diffWithTodayInDays = date =>
  date ? dateDiffInDays(date, new Date()) : 0;

const firebaseConfig = {
  messagingSenderId: "734287808356"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  const title = payload.data.title;
  const options = {
    title: birth ? `You are ${diffWithTodayInDays(birth)} old.` : "Age unkown",
    body: database ? `${database[0].age}` : `No database available`,
    icon: "logo192.png"
  };
  return self.registration.showNotification(title, options);
});

self.addEventListener("message", function(event) {
  console.log("SW Received Message: " + event.data);
  if (event.data.type == "BIRTH") {
    birth = event.data.birth;
  } else if (event.data.type == "DATABASE") {
    database = event.data.database;
  } else {
    this.console.log("Unrecognized data");
  }
});

self.addEventListener("notificationclick", function(event) {
  console.log("click");
});
