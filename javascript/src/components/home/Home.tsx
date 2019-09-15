import React, { Component } from "react";
import { getAllDatabase } from "../../api/query";
import { addTabs } from "../Tabular";
import { diffWithTodayInDays } from "../../date/date";
import { connect } from "react-redux";
import { fillDatabase } from "../../actions/database";
import { databaseSelecter } from "../../selecters/databaseSelecter";
import { AppState } from "../../store/configureStore";
import { Dispatch } from "redux";
import { DatabaseStore } from "../../store/databaseStoreTypes";
import { OrderPicker } from "./OrderPicker";
import { InfiniteList } from "./InfiniteList";

export interface HomeProps {
  database: DatabaseStore;
  age: number;
  order: string;
  dispatch: Dispatch;
}

class HomeContent extends Component<HomeProps> {
  componentDidMount() {
    getAllDatabase().then(res => res && this.props.dispatch(fillDatabase(res)));
  }

  render = () => (
    <div style={{ width: "100%", paddingTop: "100px", maxWidth: "400px" }}>
      <h2 style={{ color: "white" }}>{this.props.age} days</h2>
      <OrderPicker {...this.props} />
      <InfiniteList people={this.props.database} />
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
    order: state.user.orderPref
  };
};

export const Home = addTabs({
  WrappedComponent: connect(mapStateToProps)(HomeContent),
  active: "home"
});
