export const setBirthDate = date => ({
  type: "SET_BIRTH_DATE",
  date
});

export const addCatagory = (category: string) => ({
  type: "ADD_CATEGORY",
  category
});

export const removeCatagory = (category: string) => ({
  type: "REMOVE_CATEGORY",
  category
});

export const setNotifPreferences = pref => ({
  type: "SET_NOTIF_PREF",
  pref
});

export const setOrderPreference = pref => ({
  type: "SET_ORDER_PREF",
  pref
});