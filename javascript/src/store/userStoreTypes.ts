export interface UserState {
  categories: string[];
  birth?: Date;
  time: [number, number, number];
  notifPref: string;
  orderPref: string;
}

export interface SerializedUserState {
  categories: string[];
  birth: string;
  time: [number, number, number];
  notifPref: string;
  orderPref: string;
}

export const deserializeUserState = (
  serialized: SerializedUserState
): UserState => ({
  ...serialized,
  birth: new Date(serialized.birth)
});
