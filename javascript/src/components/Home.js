import React, { Component } from 'react';
import {  Avatar, List, Tag } from 'antd';
import {getAllDatabase} from '../api/query';
import { addTabs } from './Tabular';
import { diffWithTodayInDays } from '../date/date';
import { Link } from 'react-router-dom';

const birthDate = new Date("1993-10-12")
const days = diffWithTodayInDays(birthDate)
const you = {
  id: "you",
  title: "You",
  days: days,
  image: "http://www.accountingweb.co.uk/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png",
  categories: [],
  link: "/settings",
}

const PersonDescription = (props) => (
  <div>
    <div style={{color: "white"}}>{props.days} days</div>
    <div>
      {props.categories.map(cat => <Tag key={cat} color="purple">{cat}</Tag> )}
    </div>
  </div>
)

const ListItem = (props) => (
  <List.Item key={props.id}>
    <Link 
      style={{width: '100%'}}
      state={props}
      to={props.id === "you" ? 'settings' : `description/${props.id}`}>
      <List.Item.Meta
        avatar={<Avatar size={64} src={props.image} />}
        style={{width: '100%'}}
        title={<a style={{color: "white"}} href={props.link}>{props.title}</a>}
        description={<PersonDescription {...props}/>}/>
    </Link>
  </List.Item>
)

class HomeContent extends Component{

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { people: [] };
  }

  componentDidMount() {
    getAllDatabase().then(res => this.setState({people: [you, ...res]}))
  }

  render() {
    return (
      <div>
        <h2>{days} days</h2>
        <List
          itemLayout="horizontal"
          dataSource={this.state.people}
          renderItem={item => <ListItem {...item}/>}
        />
      </div>
    )
  }
}

export const Home = addTabs(HomeContent, "home");