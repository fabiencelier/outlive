import React from "react";
import { Divider } from "antd";
import { addTabs } from "../Tabular";
import { connect } from "react-redux";
import { BirthSettings } from "./BirthSettings";
import { NotificationSettings } from "./NotificationSettings";
import { CategorySettings } from "./CategorySettings";

const SettingsContent = props => (
  <div className="settings">
    <h1 className="theme">Settings</h1>
    <BirthSettings {...props} />
    <Divider type="horizontal" />
    <NotificationSettings {...props} />
    <Divider type="horizontal" />
    <CategorySettings {...props} />
  </div>
);

const mapStateToProps = state => ({
  user: state.user
});

export const Settings = addTabs(
  connect(mapStateToProps)(SettingsContent),
  "settings"
);
