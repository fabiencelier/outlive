export interface UserState {
  categories: string[];
  birth: Date;
  notifPref: string;
  orderPref: string;
}

export interface SerializedUserState {
  categories: string[];
  birth: string;
  notifPref: string;
  orderPref: string;
}

export const deserializeUserState = (
  serialized: SerializedUserState
): UserState => ({
  ...serialized,
  birth: new Date(serialized.birth)
});
