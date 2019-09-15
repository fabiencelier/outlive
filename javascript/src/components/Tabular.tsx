import React, { ComponentType } from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import { Desktop } from "../responsive/Responsive";
import { WelcomeHome } from "./welcome/WelcomeHome";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../store/configureStore";

const Tab = (props: {
  active: boolean;
  path: string;
  icon: string;
  text: string;
}) => (
  <div>
    <Link
      className="Header-link"
      to={props.path}
      style={{ color: props.active ? "white" : "grey" }}
    >
      <Icon type={props.icon} /> <Desktop>{props.text}</Desktop>
    </Link>
  </div>
);

interface HocArguments {
  WrappedComponent: ComponentType;
  active: string;
}

const innerAddTabs = (args: HocArguments) => {
  return (props: { isNew: boolean; dispatch: Dispatch }) => {
    if (props.isNew) {
      return (
        <div className="App">
          <div className="App-header">
            <WelcomeHome dispatch={props.dispatch} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="App-header">
            <div style={{ zIndex: 10 }} className="flex-container">
              <Tab
                path="/"
                icon="home"
                text="Home"
                active={args.active === "home"}
              />
              <Tab
                path="/statistics"
                icon="bar-chart"
                text="Statistics"
                active={args.active === "statistics"}
              />
              <Tab
                path="/settings"
                icon="setting"
                text="Settings"
                active={args.active === "settings"}
              />
            </div>
            <args.WrappedComponent />
          </div>
        </div>
      );
    }
  };
};

const mapStateToProps = (state: AppState) => ({
  isNew: state.user.birth ? false : true
});

export const addTabs = (args: HocArguments) =>
  connect(mapStateToProps)(innerAddTabs(args));
