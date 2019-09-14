export const defaultUserState = {
  categories: ["Famous"],
  birth: new Date("1993-10-12"),
  notifPref: "never",
  orderPref: "outlived",
}

export default (state = defaultUserState, action) => {
  switch (action.type) {
    case 'SET_BIRTH_DATE':
      return {
        ...state,
        birth: action.date,
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [ ...state.categories, action.category]
      }
    case 'REMOVE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter(cat => cat === action.ategory)
      }
    case 'SET_NOTIF_PREF': 
      return {
        ...state,
        notifPref: action.pref,
      };
    case 'SET_ORDER_PREF':
      return {
        ...state,
        orderPref: action.pref,
      }
    default:
      return state;
  }
}
