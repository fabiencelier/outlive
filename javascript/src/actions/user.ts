import {
  SET_BIRTH_DATE,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SET_NOTIF_PREF,
  SET_ORDER_PREF,
  UserActionTypes
} from "./userTypes";

export const setBirthDate = (date: Date): UserActionTypes => ({
  type: SET_BIRTH_DATE,
  date
});

export const addCatagory = (category: string): UserActionTypes => ({
  type: ADD_CATEGORY,
  category
});

export const removeCatagory = (category: string): UserActionTypes => ({
  type: REMOVE_CATEGORY,
  category
});

export const setNotifPreferences = (pref: string): UserActionTypes => ({
  type: SET_NOTIF_PREF,
  pref
});

export const setOrderPreference = (pref: string): UserActionTypes => ({
  type: SET_ORDER_PREF,
  pref
});
