import React from 'react';
import {Tag} from 'antd';


export const TagList = (props) => (
  <div>
    {props.categories.map(cat => <Tag key={cat} color="purple">{cat}</Tag> )}
  </div>
)