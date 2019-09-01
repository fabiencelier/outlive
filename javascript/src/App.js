import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {  Avatar, Button, Checkbox, Col, DatePicker, Divider, Icon, List, PageHeader, Radio, Row, Statistic } from 'antd';
import {dateDiffInDays, diffWithTodayInDays} from './date/date';
import {getAllDatabase} from './api/query';

const birthDate = new Date("1993-10-12")
const days = diffWithTodayInDays(birthDate)

const Description = props => (
  <div>
    <PageHeader backIcon={<Icon type="arrow-left" />} title="Description" subTitle="32 000 days" />
  </div>
);

const Page = ({ title, content }) => (
    <div className="App">
      <div className="App-header">
        <div  class="flex-container">
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
        {content}
      </div>
    </div>
);

class HomeContent extends Component{

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { people: [] };
  }

  componentDidMount() {
    getAllDatabase().then(res => this.setState({people: res}))
  }

  render() {
    return (
      <div>
        <h2>{days} days</h2>
        <List
          itemLayout="horizontal"
          dataSource={this.state.people}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={<a href={item.link}>{item.title}</a>}
                description={`${item.days} days`}
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}

const Home = (props) => (
  <Page title="Home" content={<HomeContent/>}/>
);



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

const Statistics = (props) => (
  <Page title="About" content={<StatisticsContent/>}/>
);

const suscribeToNotif = () => {
  Notification.requestPermission().then(function(result) {
    if(result === 'granted') {
        //randomNotification();
    }
  });
}

const SettingsContent = (props) => (
  <div className="settings">
    <h1 className="theme">Settings</h1>
    <div>
      <h2 className="theme">Birthdate</h2>
      <DatePicker onChange={() => {}} />
    </div>
    <Divider type="horizontal" />
    <div>
      <h2 className="theme">Notifications Mode</h2>
      <Button onClick={suscribeToNotif}>Allow notification</Button>
      <Radio.Group onChange={() => {}} value={1}>
        <Radio value={1}>
          When I outlive
        </Radio>
        <Radio value={2}>
          Recap once a week
        </Radio>
        <Radio value={3}>
          Never
        </Radio>
      </Radio.Group>
    </div>
    <Divider type="horizontal" />
    <div>
      <h2 className="theme">Categories</h2>
      <Checkbox.Group style={{ width: '100%' }} onChange={() => {}}>
        <Row>
          <Col span={12}>
            <Checkbox>Famous</Checkbox>
          </Col>
          <Col span={12}>
          <Checkbox>Actors</Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox>Artists</Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox>Politics</Checkbox>
            </Col>
          <Col span={12}>
            <Checkbox>Science</Checkbox>
            </Col>
          <Col span={12}>
            <Checkbox>Singers</Checkbox>
            </Col>
          <Col span={12}>
            <Checkbox>Sport</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </div>
  </div>
)

const Settings = (props) => (
  <Page title="Settings" content={<SettingsContent/>}/>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/settings" component={Settings} />
          <Route path="/description" component={Description} />
        </div>
      </Router>
    );
  }
}

export default App;
