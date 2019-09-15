import React from "react";
import { Statistic } from "antd";
import { addTabs } from "./Tabular";
import { diffWithTodayInDays } from "../date/date";
import { connect } from "react-redux";
import { AppState } from "../store/configureStore";

const StatisticsContent = (props: { age: number }) => (
  <div>
    <h1 style={{ color: "white" }}>Statistics</h1>
    <h3 style={{ color: "white" }}>Survival Time</h3>
    <Statistic title="Days" value={props.age} />
    <Statistic title="Hours" value={props.age * 24} />
    <Statistic title="Minutes" value={props.age * 24 * 60} />
    <Statistic title="Seconds" value={props.age * 24 * 60 * 60} />
  </div>
);

const mapStateToProps = (state: AppState) => ({
  age: diffWithTodayInDays(state.user.birth)
});

export const Statistics = addTabs(
  connect(mapStateToProps)(StatisticsContent),
  "statistics"
);
