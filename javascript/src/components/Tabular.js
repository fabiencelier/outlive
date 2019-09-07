import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

const Tab = (props) => (
  <div>
    <Link
      className="Header-link"
      to={props.path}
      style={{color: props.active ? "white" : "grey"}}
    >
        <Icon type={props.icon} /> {props.text}
    </Link>
  </div>
)

export const addTabs = (WrappedComponent, active) => {
  return () => (
    <div className="App">
      <div className="App-header">
        <div style={{zIndex: 10}}  className="flex-container">
          <Tab path="/" icon="home" text="Home" active={active==="home"}/>
          <Tab path="/statistics" icon="bar-chart" text="Statistics" active={active==="statistics"}/>
          <Tab path="/settings" icon="setting" text="Settings" active={active==="settings"}/>
          </div>
        <WrappedComponent />
      </div>
    </div>
  )
}