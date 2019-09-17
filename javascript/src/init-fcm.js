import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
  messagingSenderId: "734287808356"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  "BHaxJ58YCs9VFQYjPPo0KzeXAeAVpCXNhbhymeblFTand362yWEmpnRWqjCXfCg01vSEL1twic4_d-6rz7YdN28"
);
export { messaging };
