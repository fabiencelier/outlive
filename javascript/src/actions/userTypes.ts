export const SET_BIRTH_DATE = "SET_BIRTH_DATE";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";
export const SET_NOTIF_PREF = "SET_NOTIF_PREF";
export const SET_ORDER_PREF = "SET_ORDER_PREF";
export const SET_BIRTH_TIME = "SET_BIRTH_TIME";

interface SetBirthDateAction {
  type: typeof SET_BIRTH_DATE;
  date: Date;
}

interface SetBirthTimeAction {
  type: typeof SET_BIRTH_TIME;
  time: [number, number, number];
}

interface AddCategoryAction {
  type: typeof ADD_CATEGORY;
  category: string;
}

interface RemoveCategoryAction {
  type: typeof REMOVE_CATEGORY;
  category: string;
}

interface SetNotifPrefAction {
  type: typeof SET_NOTIF_PREF;
  pref: string;
}

interface SetOrderPrefAction {
  type: typeof SET_ORDER_PREF;
  pref: string;
}

export type UserActionTypes =
  | SetBirthDateAction
  | AddCategoryAction
  | RemoveCategoryAction
  | SetNotifPrefAction
  | SetOrderPrefAction
  | SetBirthTimeAction;
