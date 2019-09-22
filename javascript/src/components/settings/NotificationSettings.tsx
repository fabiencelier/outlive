import React from "react";
import { Button, Radio } from "antd";
import { setNotifPreferences } from "../../actions/user";
import { Dispatch } from "redux";
import { UserState } from "../../store/userStoreTypes";
import { diffWithTodayInDays } from "../../date/date";
import { showNotification, isNotificationAllowed } from "../../notif/notif";

interface NotifSettingsProps {
  user: UserState;
  dispatch: Dispatch;
}

export class NotificationSettings extends React.Component<
  NotifSettingsProps,
  { notifAllowed: boolean }
> {
  constructor(props: NotifSettingsProps) {
    super(props);
    this.state = {
      notifAllowed: isNotificationAllowed()
    };
  }

  suscribeToNotif = (age: number) => {
    const component = this;
    Notification.requestPermission().then(function(result) {
      component.setState({ notifAllowed: result === "granted" });
      if (result === "granted") {
        showNotification({
          title: `${age} days`,
          body: "Congratulations, keep living !",
          icon: "logo192.png"
        });
      }
    });
  };

  render = () => (
    <div>
      <h2 className="theme">Notifications Mode</h2>
      {!this.state.notifAllowed && (
        <div>
          <Button
            onClick={() =>
              this.suscribeToNotif(diffWithTodayInDays(this.props.user.birth))
            }
          >
            Allow notification
          </Button>
        </div>
      )}
      {this.state.notifAllowed && (
        <Radio.Group
          onChange={e =>
            this.props.dispatch(setNotifPreferences(e.target.value))
          }
          value={this.props.user.notifPref}
        >
          <Radio value={"outlive"}>When I outlive</Radio>
          <Radio value={"never"}>Never</Radio>
        </Radio.Group>
      )}
    </div>
  );
}
