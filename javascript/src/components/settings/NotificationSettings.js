import React from "react";
import { Button, Radio } from "antd";
import { setNotifPreferences } from "../../actions/user";

const suscribeToNotif = () => {
  Notification.requestPermission().then(function(result) {
    if (result === "granted") {
      //randomNotification();
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
    <Button onClick={suscribeToNotif}>Allow notification</Button>
    <Radio.Group
      onChange={value => setPref(value, props.dispatch)}
      value={props.user.notifPref}
    >
      <Radio value={"outlive"}>When I outlive</Radio>
      <Radio value={"never"}>Never</Radio>
    </Radio.Group>
  </div>
);
