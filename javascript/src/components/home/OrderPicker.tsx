import React from "react";
import { Radio } from "antd";
import { setOrderPreference } from "../../actions/user";
import { HomeProps } from "./Home";

export const OrderPicker = (props: HomeProps) => (
  <div>
    <Radio.Group
      value={props.order}
      buttonStyle="solid"
      onChange={e => props.dispatch(setOrderPreference(e.target.value))}
    >
      <Radio.Button value="outlived">Oulived</Radio.Button>
      <Radio.Button value="next">Next</Radio.Button>
    </Radio.Group>
  </div>
);
