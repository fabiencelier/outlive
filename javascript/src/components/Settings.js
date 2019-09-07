import React from 'react';
import { Button, Checkbox, Col, DatePicker, Divider, Radio, Row } from 'antd';
import { addTabs } from './Tabular';


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

export const Settings = addTabs(SettingsContent, "settings");
