const defaultUserState = {
  notifPref: ["Famous"],
  birth: new Date("1993-10-12"),
}

export default (state = defaultUserState, action) => {
  switch (action.type) {
    case 'SET_BIRTH_DATE':
      return {
        ...state,
        birth: action.date,
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.categories
      }
    case 'SET_NOTIF_PREF': 
      return {
        ...state,
        notifPref: action.pref,
      };
    default:
      return state;
  }
}