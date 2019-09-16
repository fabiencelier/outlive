import React from "react";
import { Statistic } from "antd";
import { addTabs } from "./Tabular";
import { diffWithTodayInDays } from "../date/date";
import { connect } from "react-redux";
import { AppState } from "../store/configureStore";

interface StatisticsProps {
  age: number;
  time: [number, number, number];
}

const createState = (age: number, time: [number, number, number]) => {
  const now = new Date();
  const seconds =
    ((age * 24 + now.getHours() - time[0]) * 60 + now.getMinutes() - time[1]) *
      60 +
    now.getSeconds() -
    time[2];
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return {
    hours,
    minutes,
    seconds
  };
};

class StatisticsContent extends React.Component<StatisticsProps> {
  interval: NodeJS.Timeout = setInterval(
    () => this.setState(createState(this.props.age, this.props.time)),
    250
  );

  state = createState(this.props.age, this.props.time);

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render = () => (
    <div>
      <h1 style={{ color: "white" }}>Statistics</h1>
      <h3 style={{ color: "white" }}>Survival Time</h3>
      <Statistic title="Days" value={this.props.age} />
      <Statistic title="Hours" value={this.state.hours} />
      <Statistic title="Minutes" value={this.state.minutes} />
      <Statistic title="Seconds" value={this.state.seconds} />
    </div>
  );
}
const mapStateToProps = (state: AppState) => ({
  age: diffWithTodayInDays(state.user.birth),
  time: state.user.time
});

export const Statistics = addTabs({
  WrappedComponent: connect(mapStateToProps)(StatisticsContent),
  active: "statistics"
});
