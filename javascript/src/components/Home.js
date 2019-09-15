import React, { Component } from "react";
import { List, Radio } from "antd";
import { getAllDatabase } from "../api/query";
import { addTabs } from "./Tabular";
import { diffWithTodayInDays } from "../date/date";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fillDatabase } from "../actions/database";
import { setOrderPreference } from "../actions/user";
import { TagList } from "./util/TagList";
import { databaseSelecter } from "../selecters/databaseSelecter";

const PersonDescription = props => (
  <div>
    <div style={{ color: "white" }}>{props.days} days</div>
    <TagList categories={props.categories} />
  </div>
);

const ListItem = props => (
  <List.Item key={props.id}>
    <Link
      style={{ width: "100%" }}
      state={props}
      to={props.id === "you" ? "settings" : `description/${props.id}`}
    >
      <List.Item.Meta
        avatar={
          <img
            src={props.image}
            style={{
              width: 64,
              height: 64,
              objectFit: "cover",
              borderRadius: "10px"
            }}
            alt={props.title}
          />
        }
        style={{ width: "100%" }}
        title={<span style={{ color: "white" }}>{props.title}</span>}
        description={<PersonDescription {...props} />}
      />
    </Link>
  </List.Item>
);

const OrderPicker = props => (
  <div>
    <Radio.Group
      value={props.order}
      buttonStyle="solid"
      onChange={e => props.dispatch(setOrderPreference(e.target.value))}
    >
      <Radio.Button value="outlived">Oulived</Radio.Button>
      <Radio.Button value="next">Next</Radio.Button>
    </Radio.Group>
  </div>
);

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = { people: [] };
  }

  componentDidMount() {
    getAllDatabase().then(res => this.props.dispatch(fillDatabase(res)));
  }

  render() {
    return (
      <div style={{ paddingTop: "100px" }}>
        <h2 style={{ color: "white" }}>{this.props.age} days</h2>
        <OrderPicker {...this.props} />
        <List
          itemLayout="horizontal"
          dataSource={this.props.database}
          renderItem={item => <ListItem {...item} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const age = diffWithTodayInDays(state.user.birth);
  return {
    database: databaseSelecter(
      state.database,
      age,
      state.user.orderPref === "outlived"
    ),
    age,
    order: state.user.orderPref
  };
};

export const Home = addTabs(connect(mapStateToProps)(HomeContent), "home");
