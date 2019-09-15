import React from "react";
import { ConnectedBirthPicker } from "../util/ConnectedBirthPicker";
import { Dispatch } from "redux";

export const WelcomeHome = (props: { dispatch: Dispatch }) => (
  <div>
    <h1 className="theme">Outlive</h1>
    <h3 className="theme">Select your birth dateto start</h3>
    <ConnectedBirthPicker dispatch={props.dispatch} value={undefined} />
  </div>
);
