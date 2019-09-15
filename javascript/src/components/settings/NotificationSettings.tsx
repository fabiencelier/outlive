import React from "react";
import { Button, Radio } from "antd";
import { setNotifPreferences } from "../../actions/user";

const showNotification = age => {
  console.log("Checking for notif");
  Notification.requestPermission(result => {
    if (result === "granted") {
      console.log("Notif Allowed");
      navigator.serviceWorker.ready.then(registration => {
        console.log("Notif !");
        registration.showNotification(`${age} days !`, {
          body: "Congratulations ! Keep living !",
          icon: "logo192.png",
          vibrate: [200, 100]
        });
      });
    }
  });
};

const suscribeToNotif = age => {
  Notification.requestPermission().then(function(result) {
    if (result === "granted") {
      showNotification(age);
    }
  });
};

const setPref = (value, dispatch) => {
  console.log(value);
  dispatch(setNotifPreferences(value.target.value));
};

export const NotificationSettings = props => (
  <div>
    <h2 className="theme">Notifications Mode</h2>
    <Button onClick={() => suscribeToNotif(props.user.age)}>
      Allow notification
    </Button>
    <Radio.Group
      onChange={value => setPref(value, props.dispatch)}
      value={props.user.notifPref}
    >
      <Radio value={"outlive"}>When I outlive</Radio>
      <Radio value={"never"}>Never</Radio>
    </Radio.Group>
  </div>
);
