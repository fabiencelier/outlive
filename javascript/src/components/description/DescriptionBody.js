import React from 'react';
import { Avatar } from 'antd';
import {formatDate} from '../../date/date';

export const DescriptionBody = (props) => (
  <div style={{backgroundColor:"#282c34", color:"white"}}>
    <Avatar size={128} src={props.description.image} />
    <p>Birth : {formatDate(props.description.birthDate)}</p>
    <p>Death : {formatDate(props.description.deathDate)}</p>
    {props.description.description && <p>{props.description.description}</p>}
  </div>
)