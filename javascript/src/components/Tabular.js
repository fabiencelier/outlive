import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';


export const addTabs = (WrappedComponent) => {
  return () => (
    <div className="App">
      <div className="App-header">
        <div style={{zIndex: 10}}  className="flex-container">
          <div>
            <Link className="Header-link" to="/"><Icon type="home" /> Home</Link>
          </div>
          <div>
            <Link className="Header-link" to="/statistics"><Icon type="bar-chart" /> Statistics</Link>
          </div>
          <div>
            <Link className="Header-link" to="/settings"><Icon type="setting" /> Settings</Link>
          </div>
        </div>
        <WrappedComponent />
      </div>
    </div>
  )
}