import React from 'react';
import { Statistic } from 'antd';
import { addTabs } from './Tabular';


const StatisticsContent = (props) => (
  <div>
    <h1 style={{color: "white"}}>Statistics</h1>
    <h3 style={{color: "white"}}>Survival Time</h3>
    <Statistic title="Days" value={31893} />
    <Statistic title="Hours" value={31893*24} />
    <Statistic title="Minutes" value={31893*24*60} />
    <Statistic title="Seconds" value={31893*24*60*60} />
  </div>
)

export const Statistics = addTabs(StatisticsContent);
