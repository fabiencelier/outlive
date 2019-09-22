import * as firebase from "firebase/app";
import "firebase/messaging";
import { showNotification } from "./notif";

export const initFirebaseApp = (): firebase.messaging.Messaging | null => {
  const initializedFirebaseApp = firebase.initializeApp({
    messagingSenderId: "734287808356"
  });

  try {
    const messaging = initializedFirebaseApp.messaging();
    messaging.usePublicVapidKey(
      // Project Settings => Cloud Messaging => Web Push certificates
      "BHaxJ58YCs9VFQYjPPo0KzeXAeAVpCXNhbhymeblFTand362yWEmpnRWqjCXfCg01vSEL1twic4_d-6rz7YdN28"
    );
    return messaging;
  } catch (err) {
    console.log("Messaging is not allowed by this browser.");
    return null;
  }
};

export const registerToNotif = async (
  messaging: firebase.messaging.Messaging
) => {
  // this assumes that notif are allowed
  messaging
    .getToken()
    .then(token =>
      token
        ? console.log("Firebase token", token)
        : console.log("No firebase token")
    );
  navigator.serviceWorker.addEventListener("message", message => {
    console.log(message);
    showNotification({ title: "You are X days old", body: "Congratulations" });
  });
};

const register_url =
  "https://s3p4ucp4be.execute-api.us-west-2.amazonaws.com/default/register-notif";

export const sendTokenToServer = async (
  messaging: firebase.messaging.Messaging
) => {
  messaging.getToken().then(token =>
    fetch(register_url, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: token })
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log("Succesfull", result);
      })
      .catch(error => {
        console.log("Request failed", error);
      })
  );
};
