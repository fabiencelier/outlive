import React from "react";
import { Button, Radio } from "antd";
import { setNotifPreferences } from "../../actions/user";
import { Dispatch } from "redux";
import { UserState } from "../../store/userStoreTypes";
import { diffWithTodayInDays } from "../../date/date";

const showNotification = (age: number) => {
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

const suscribeToNotif = (age: number) => {
  Notification.requestPermission().then(function(result) {
    if (result === "granted") {
      showNotification(age);
    }
  });
};

const setPref = (value: string, dispatch: Dispatch) => {
  dispatch(setNotifPreferences(value));
};

export const NotificationSettings = (props: {
  user: UserState;
  dispatch: Dispatch;
}) => (
  <div>
    <h2 className="theme">Notifications Mode</h2>
    <Button
      onClick={() => suscribeToNotif(diffWithTodayInDays(props.user.birth))}
    >
      Allow notification
    </Button>
    <Radio.Group
      onChange={e => setPref(e.target.value, props.dispatch)}
      value={props.user.notifPref}
    >
      <Radio value={"outlive"}>When I outlive</Radio>
      <Radio value={"never"}>Never</Radio>
    </Radio.Group>
  </div>
);
