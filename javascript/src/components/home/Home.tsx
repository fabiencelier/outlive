import React, { Component } from "react";
import { List } from "antd";
import { getAllDatabase } from "../../api/query";
import { addTabs } from "../Tabular";
import { diffWithTodayInDays } from "../../date/date";
import { connect } from "react-redux";
import { fillDatabase } from "../../actions/database";
import { databaseSelecter } from "../../selecters/databaseSelecter";
import { AppState } from "../../store/configureStore";
import { Dispatch } from "redux";
import { DatabaseStore } from "../../store/databaseStoreTypes";
import { ListItem } from "./HomeItemList";
import { OrderPicker } from "./OrderPicker";

export interface HomeProps {
  database: DatabaseStore;
  age: number;
  order: string;
  isNew: boolean;
  dispatch: Dispatch;
}

class HomeContent extends Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
    this.state = { people: [] };
  }

  componentDidMount() {
    getAllDatabase().then(res => res && this.props.dispatch(fillDatabase(res)));
  }

  render = () => (
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

const mapStateToProps = (state: AppState) => {
  const age = diffWithTodayInDays(state.user.birth);
  return {
    database: databaseSelecter(
      state.database,
      age,
      state.user.orderPref === "outlived"
    ),
    age,
    order: state.user.orderPref,
    isNew: state.user.birth ? false : true
  };
};

export const Home = addTabs({
  WrappedComponent: connect(mapStateToProps)(HomeContent),
  active: "home"
});
