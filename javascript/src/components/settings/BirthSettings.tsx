import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { setBirthDate } from "../../actions/user";
import { Dispatch } from "redux";

export const BirthSettings = (props: {
  user: { birth: Date };
  dispatch: Dispatch;
}) => (
  <div>
    <h2 className="theme">Birthdate</h2>
    <DatePicker
      onChange={value =>
        value !== null && props.dispatch(setBirthDate(value.toDate()))
      }
      defaultValue={moment(props.user.birth)}
    />
  </div>
);
