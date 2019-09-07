import React from 'react';
import { DatePicker} from 'antd';
import moment from 'moment';
import {setBirthDate} from '../../actions/user';

export const BirthSettings = (props) => (
  <div>
    <h2 className="theme">Birthdate</h2>
    <DatePicker
      onChange={ value => props.dispatch(setBirthDate(value.toDate()))}
      defaultValue={moment(props.user.birth)}
    />
  </div>
)