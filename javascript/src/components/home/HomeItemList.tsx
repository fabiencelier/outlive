import React from "react";
import { List } from "antd";
import { Link } from "react-router-dom";
import { TagList } from "../util/TagList";
import { Person } from "../../api/person";

const PersonDescription = (props: Person) => (
  <div>
    <div style={{ color: "white" }}>{props.days} days</div>
    <TagList categories={props.categories} />
  </div>
);

export const ListItem = (props: Person) => (
  <List.Item key={props.id}>
    <Link
      style={{ width: "100%" }}
      to={props.id === "you" ? "settings" : `description/${props.id}`}
    >
      <List.Item.Meta
        avatar={
          <img
            src={props.image}
            style={{
              width: 64,
              height: 64,
              objectFit: "cover",
              borderRadius: "10px"
            }}
            alt={props.title}
          />
        }
        style={{ width: "100%" }}
        title={<span style={{ color: "white" }}>{props.title}</span>}
        description={<PersonDescription {...props} />}
      />
    </Link>
  </List.Item>
);
