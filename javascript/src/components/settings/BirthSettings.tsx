import React from "react";
import { Dispatch } from "redux";
import { ConnectedBirthPicker } from "../util/ConnectedBirthPicker";
import { TimePicker } from "antd";
import moment from "moment";
import { setBirthTime } from "../../actions/user";

const createMoment = (
  date: Date,
  time: [number, number, number]
): moment.Moment => {
  date.setHours(time[0]);
  date.setMinutes(time[1]);
  date.setSeconds(time[2]);
  return moment(date);
};

const onTimeChange = (moment: moment.Moment, dispatch: Dispatch) => {
  const date = moment.toDate();
  dispatch(
    setBirthTime([date.getHours(), date.getMinutes(), date.getSeconds()])
  );
};

export const BirthSettings = (props: {
  user: { birth?: Date; time: [number, number, number] };
  dispatch: Dispatch;
}) => (
  <div>
    <h2 className="theme">Birthdate</h2>
    <ConnectedBirthPicker dispatch={props.dispatch} value={props.user.birth} />
    <TimePicker
      onChange={value => onTimeChange(value, props.dispatch)}
      value={
        props.user.birth && createMoment(props.user.birth, props.user.time)
      }
    />
  </div>
);
