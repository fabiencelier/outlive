import React from "react";
import { Divider } from "antd";
import { addTabs } from "../Tabular";
import { connect } from "react-redux";
import { BirthSettings } from "./BirthSettings";
import { NotificationSettings } from "./NotificationSettings";
import { CategorySettings } from "./CategorySettings";
import { AppState } from "../../store/configureStore";
import { UserState } from "../../store/userStoreTypes";
import { Dispatch } from "redux";

const SettingsContent = (props: { user: UserState; dispatch: Dispatch }) => (
  <div className="settings">
    <h1 className="theme">Settings</h1>
    <BirthSettings {...props} />
    <Divider type="horizontal" />
    <NotificationSettings {...props} />
    <Divider type="horizontal" />
    <CategorySettings {...props} />
  </div>
);

const mapStateToProps = (state: AppState) => ({
  user: state.user
});

export const Settings = addTabs({
  WrappedComponent: connect(mapStateToProps)(SettingsContent),
  active: "settings"
});
