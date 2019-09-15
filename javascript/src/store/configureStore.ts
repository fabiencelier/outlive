import { createStore, combineReducers } from "redux";
import databaseReducer, { defaultDatabaseState } from "../reducers/database";
import userReducer, { defaultUserState } from "../reducers/user";

const getDefaultState = () => ({
  user: defaultUserState,
  database: defaultDatabaseState
});

const getPersistedState = () => {
  const persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : getDefaultState();
  if (persistedState.database) {
    persistedState.database = persistedState.database.map(obj => ({
      ...obj,
      birthDate: new Date(obj.birthDate),
      deathDate: new Date(obj.deathDate)
    }));
  }
  if (persistedState.user) {
    persistedState.user.birth = new Date(persistedState.user.birth);
  }
  return persistedState;
};

export default () => {
  const store = createStore(
    combineReducers({
      database: databaseReducer,
      user: userReducer
    }),
    getPersistedState()
  );

  store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  });

  return store;
};
