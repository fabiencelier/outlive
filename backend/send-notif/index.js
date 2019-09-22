// AWS lambda executed every day to notif all registered users

const fetch = require("node-fetch");

const key = process.env["FIREBASE_KEY"];

exports.handler = async event => {
  console.log("started");
  const json = JSON.stringify({
    to: "/topics/test",
    data: {
      message: "This is a Firebase Cloud Messaging Topic Message!"
    }
  });

  await fetch("https://fcm.googleapis.com/fcm/send", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `key=${key}`
    },
    body: json
  })
    .then(response => {
      return response.json();
    })
    .then(result => {
      console.log("Succesfull", result);
    })
    .catch(function(error) {
      console.log("Request failed", error);
    });
};
