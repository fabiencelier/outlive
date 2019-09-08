import React, { Component } from 'react';
import { Avatar, List, Tag } from 'antd';
import {getAllDatabase} from '../api/query';
import { addTabs } from './Tabular';
import { diffWithTodayInDays } from '../date/date';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fillDatabase} from '../actions/database';
import {TagList} from './util/TagList';

const PersonDescription = (props) => (
  <div>
    <div style={{color: "white"}}>{props.days} days</div>
    <TagList categories={props.categories} />
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
    this.state = { people: [] };
  }

  componentDidMount() {
    getAllDatabase().then(res => this.props.dispatch(fillDatabase(res)))
  }

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.database}
        renderItem={item => <ListItem {...item}/>}
        style={{paddingTop: "100px"}}
      />
    )
  }
}

const buildYou = age => ({
  id: "you",
  title: "You",
  days: age,
  image: "http://www.accountingweb.co.uk/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png",
  categories: [],
  link: "/settings",
})

const mapStateToProps = (state) => {
  const age = diffWithTodayInDays(state.user.birth)
  const database = state.database.length > 0 ? [buildYou(age), ...state.database] : []
  return {
    database,
    age,
  }
}

export const Home = addTabs(connect(mapStateToProps)(HomeContent), "home");