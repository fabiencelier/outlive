import { AnyAction } from "redux";
import { DatabaseStore } from "../store/databaseStoreTypes";
import { FILL_DATABASE } from "../actions/databaseTypes";

export const defaultDatabaseState: DatabaseStore = [];

export default (
  state: DatabaseStore = defaultDatabaseState,
  action: AnyAction
): DatabaseStore => {
  switch (action.type) {
    case FILL_DATABASE:
      return action.data;
    default:
      return state;
  }
};
