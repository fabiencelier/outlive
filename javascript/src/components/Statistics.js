import React, { Component } from 'react';
import { Statistic } from 'antd';
import { addTabs } from './Tabular';
import { diffWithTodayInDays } from '../date/date';

class StatisticsContent extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { age : diffWithTodayInDays(new Date("1993-10-12")) };
  }

  render() {
    return (
      <div>
        <h1 style={{color: "white"}}>Statistics</h1>
        <h3 style={{color: "white"}}>Survival Time</h3>
        <Statistic title="Days" value={this.state.age} />
        <Statistic title="Hours" value={this.state.age*24} />
        <Statistic title="Minutes" value={this.state.age*24*60} />
        <Statistic title="Seconds" value={this.state.age*24*60*60} />
      </div>
    )
  }
}

export const Statistics = addTabs(StatisticsContent, "statistics");
