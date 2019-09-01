import React from 'react';
import { Statistic } from 'antd';
import { addTabs } from './Tabular';


const StatisticsContent = (props) => (
  <div>
    <h1>Statistics</h1>
    <h3>Survival Time</h3>
    <p>Units below day are approximative</p>
    <Statistic title="Days" value={31893} />
    <Statistic title="Hours" value={31893*24} />
    <Statistic title="Minutes" value={31893*24*60} />
    <Statistic title="Seconds" value={31893*24*60*60} />
    <p>Units below day are approximative</p>
    <Statistic title="Days" value={31893} />
    <Statistic title="Hours" value={31893*24} />
    <Statistic title="Minutes" value={31893*24*60} />
    <Statistic title="Seconds" value={31893*24*60*60} />
    <p>Units below day are approximative</p>
    <Statistic title="Days" value={31893} />
    <Statistic title="Hours" value={31893*24} />
    <Statistic title="Minutes" value={31893*24*60} />
    <Statistic title="Seconds" value={31893*24*60*60} />
  </div>
)

export const Statistics = addTabs(StatisticsContent);
