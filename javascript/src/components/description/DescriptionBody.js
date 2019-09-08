import React from 'react';
import {formatDate} from '../../date/date';
import {TagList} from '../util/TagList';
import {Desktop, Mobile} from '../../responsive/Responsive';

const outterStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "30px",
};

const innerStyle = {
  backgroundColor:"#282c34",
  color:"white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "1000px",
};

const textStyle = {
  textAlign: "justify",
  textJustify: "inter-word",
  textIndent: "40px",
  marginLeft: "15px",
  marginRight: "15px",
};

const Image = (props) => (
  <div>
    <Desktop>
      <img src={props.image} style={{maxHeight: "500px"}} alt={props.alt} />
    </Desktop>
    <Mobile>
    <img src={props.image} style={{maxHeight: "200px"}} alt={props.alt} />
    </Mobile>
  </div>
)

const TopDescription = (props) => (
  <div style={innerStyle}>
    <Image image={props.image} alt={props.title} />
    <h2 style={{color: "white"}}>{props.title}</h2>
    <h3 style={{color: "white"}}>{props.days} days</h3>
    <p>Birth : {formatDate(props.birthDate)}<br/>
    Death : {formatDate(props.deathDate)}<br/>
    Cause : {props.description.cause ? props.cause : "Unknown"}</p>
  </div>
);

export const DescriptionBody = (props) => (
  <div style={outterStyle}>
    <TopDescription {...props}/>
    <div style={innerStyle}>
      <div style={textStyle}>
        {props.description && <p>{props.description}</p>}
      </div>
      <TagList categories={props.categories} />
      <p><br/><a href={props.link}>Wikipedia Page</a></p>
    </div>
  </div>
)