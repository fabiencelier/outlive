import React from 'react';
import { Avatar } from 'antd';
import {formatDate} from '../../date/date';
import {TagList} from '../util/TagList';

const outterStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const innerStyle = {
  backgroundColor:"#282c34",
  color:"white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "10px",
  maxWidth: "1000px",
}

const textStyle = {
  textAlign: "justify",
  textJustify: "inter-word",
  textIndent: "40px",
  marginLeft: "15px",
  marginRight: "15px",
}

export const DescriptionBody = (props) => (
  <div style={outterStyle}>
    <div style={innerStyle}>
      <Avatar size={200} shape="square" src={props.image} />
      <h2 style={{color: "white"}}>{props.title}</h2>
      <h3 style={{color: "white"}}>{props.days} days</h3>
      <p>Birth : {formatDate(props.birthDate)}<br/>
      Death : {formatDate(props.deathDate)}<br/>
      Cause : {props.description.cause ? props.cause : "Unknown"}</p>
      <div style={textStyle}>
        {props.description && <p>{props.description}</p>}
      </div>
      <TagList categories={props.categories} />
      <p><br/><a href={props.link}>Wikipedia Page</a></p>
    </div>
  </div>
)