import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { setBirthDate } from "../../actions/user";
import { Dispatch } from "redux";

const defaultBirthDate = new Date("1993-10-12");

export const ConnectedBirthPicker = (props: {
  value: Date | undefined;
  dispatch: Dispatch;
}) => (
  <div>
    <DatePicker
      onChange={value =>
        value !== null && props.dispatch(setBirthDate(value.toDate()))
      }
      defaultValue={moment(props.value ? props.value : defaultBirthDate)}
    />
  </div>
);
