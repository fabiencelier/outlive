export const defaultDatabaseState = [];

export default (state = defaultDatabaseState, action) => {
  switch (action.type) {
    case "FILL_DATABASE":
      return action.data;
    default:
      return state;
  }
};
