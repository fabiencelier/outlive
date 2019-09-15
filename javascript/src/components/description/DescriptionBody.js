import React from "react";
import { formatDate } from "../../date/date";
import { TagList } from "../util/TagList";
import { Desktop, Mobile } from "../../responsive/Responsive";
import { Avatar } from "antd";

const outterStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "30px"
};

const innerStyle = {
  backgroundColor: "#282c34",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "1000px"
};

const textStyle = {
  textAlign: "justify",
  textJustify: "inter-word",
  marginLeft: "15px",
  marginRight: "15px"
};

const Image = props => (
  <div>
    <Desktop>
      <img src={props.image} style={{ maxHeight: "500px" }} alt={props.alt} />
    </Desktop>
    <Mobile>
      <img src={props.image} style={{ maxHeight: "200px" }} alt={props.alt} />
    </Mobile>
  </div>
);

const getCause = (manner, cause) =>
  manner
    ? cause
      ? `${manner} (${cause})`
      : manner
    : cause
    ? cause
    : "Unknown";

const TopDescription = props => (
  <div style={innerStyle}>
    <Image image={props.image} alt={props.title} />
    <h2 style={{ color: "white" }}>{props.title}</h2>
    <h3 style={{ color: "white" }}>{props.days} days</h3>
    <p>
      Birth : {formatDate(props.birthDate)}
      <br />
      Death : {formatDate(props.deathDate)}
      <br />
      Cause : {getCause(props.mannerOfDeath, props.causeOfDeath)}
    </p>
  </div>
);

const get_deezer_link = id => `https://www.deezer.com/us/artist/${id}`;

const get_imdb_link = id => `https://www.imdb.com/name/${id}`;

const WikipediaLink = ({ link }) => (
  <div style={{ marginLeft: "20px", marginRight: "20px" }}>
    <a href={link}>
      <Avatar shape="square" size={64} src="/img/wikipedia-1024.png" />
    </a>
  </div>
);

const DeezerLink = ({ id }) => (
  <div style={{ marginLeft: "20px", marginRight: "20px" }}>
    <a href={get_deezer_link(id)}>
      <Avatar shape="square" size={64} src="/img/deezer-1024.png" />
    </a>
  </div>
);

const ImdbLink = ({ id }) => (
  <div style={{ marginLeft: "20px", marginRight: "20px" }}>
    <a href={get_imdb_link(id)}>
      <Avatar shape="square" size={64} src="/img/imdb-1024.png" />
    </a>
  </div>
);

export const DescriptionBody = props => (
  <div style={outterStyle}>
    <TopDescription {...props} />
    <div style={innerStyle}>
      <div style={textStyle}>
        {props.description && <p>{props.description}</p>}
      </div>
      <TagList categories={props.categories} />
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "space-around",
          marginTop: "20px"
        }}
      >
        <WikipediaLink link={props.link} />
        {props.deezerId && <DeezerLink id={props.deezerId} />}
        {props.imdbId && <ImdbLink id={props.imdbId} />}
      </div>
    </div>
  </div>
);
