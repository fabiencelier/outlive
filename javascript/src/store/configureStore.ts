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
import { sendBirthToWorker } from "../worker/send";

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
  store.subscribe(() => {
    const birth = store.getState().user.birth;
    birth && sendBirthToWorker(birth);
  });
  return store;
};

export type AppState = ReturnType<typeof rootReducer>;
