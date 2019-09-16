import {
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SET_BIRTH_DATE,
  SET_NOTIF_PREF,
  SET_ORDER_PREF,
  UserActionTypes,
  SET_BIRTH_TIME
} from "../actions/userTypes";
import { UserState } from "../store/userStoreTypes";

export const defaultUserState: UserState = {
  categories: ["Famous"],
  time: [0, 0, 0],
  notifPref: "never",
  orderPref: "outlived"
};

export default (
  state: UserState = defaultUserState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case SET_BIRTH_DATE:
      return {
        ...state,
        birth: action.date
      };
    case SET_BIRTH_TIME:
      return {
        ...state,
        time: action.time
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.category]
      };
    case REMOVE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(cat => cat === action.category)
      };
    case SET_NOTIF_PREF:
      return {
        ...state,
        notifPref: action.pref
      };
    case SET_ORDER_PREF:
      return {
        ...state,
        orderPref: action.pref
      };
    default:
      return state;
  }
};
