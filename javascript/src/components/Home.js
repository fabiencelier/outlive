import React, { Component } from 'react';
import {  Avatar, List, Tag } from 'antd';
import {getAllDatabase} from '../api/query';
import { addTabs } from './Tabular';
import { diffWithTodayInDays } from '../date/date';

const birthDate = new Date("1993-10-12")
const days = diffWithTodayInDays(birthDate)

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
                avatar={<Avatar size={64} src={item.image} />}
                title={<a href={item.link}>{item.title}</a>}
                description={
                  <div>
                    <div>{item.days} days</div>
                    <div>
                      {item.categories.map(cat => <Tag color="purple">{cat}</Tag> )}
                    </div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export const Home = addTabs(HomeContent);