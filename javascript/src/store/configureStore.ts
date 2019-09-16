import { createStore, combineReducers } from "redux";
import databaseReducer, { defaultDatabaseState } from "../reducers/database";
import {
  deserializeDatabaseState,
  SerializedDatabaseState
} from "../store/databaseStoreTypes";
import {
  SerializedUserState,
  deserializeUserState
} from "../store/userStoreTypes";
import userReducer, { defaultUserState } from "../reducers/user";

const getDefaultState = () => ({
  user: defaultUserState,
  database: defaultDatabaseState
});

const deserializeState = (state: {
  database: SerializedDatabaseState;
  user: SerializedUserState;
}): AppState => ({
  user: deserializeUserState(state.user),
  database: deserializeDatabaseState(state.database)
});

const getPersistedState = () => {
  const storedState = localStorage.getItem("reduxState");
  const persistedState = storedState
    ? deserializeState(JSON.parse(storedState))
    : getDefaultState();
  if (persistedState.user.time === undefined) {
    persistedState.user.time = [0, 0, 0];
  }
  return persistedState;
};

const rootReducer = combineReducers({
  database: databaseReducer,
  user: userReducer
});

export default () => {
  const store = createStore(rootReducer, getPersistedState());
  store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  });
  return store;
};

export type AppState = ReturnType<typeof rootReducer>;
