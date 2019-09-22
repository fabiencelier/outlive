// AWS lambda to register a user to the notif list

const admin = require("firebase-admin");
const topic = "test";

exports.handler = async event => {
  const token = JSON.parse(event.body).token;
  const response = {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  };
  if (!token) {
    console.log("No token");
    response.statusCode = 400;
    response.body = JSON.stringify({ "Missing token": event.body });
  } else {
    response.statusCode = 200;
    response.body = JSON.stringify(token);
  }

  const registrationTokens = [token];

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      databaseURL: "https://outlive.firebaseio.com"
    });
  }

  // Subscribe the devices corresponding to the registration tokens to the
  // topic.
  await admin
    .messaging()
    .subscribeToTopic(registrationTokens, topic)
    .then(response => {
      console.log("Successfully subscribed to topic:", response);
    })
    .catch(function(error) {
      console.log("Error subscribing to topic:", error);
    });

  return response;
};
