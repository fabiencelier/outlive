import React from "react";
import { Dispatch } from "redux";
import { ConnectedBirthPicker } from "../util/ConnectedBirthPicker";

export const BirthSettings = (props: {
  user: { birth?: Date };
  dispatch: Dispatch;
}) => (
  <div>
    <h2 className="theme">Birthdate</h2>
    <ConnectedBirthPicker dispatch={props.dispatch} value={props.user.birth} />
  </div>
);
