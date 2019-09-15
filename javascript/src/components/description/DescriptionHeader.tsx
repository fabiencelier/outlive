import React from "react";
import { Icon, PageHeader } from "antd";

export const DescriptionHeader = props => (
  <PageHeader
    style={{
      backgroundColor: "black",
      color: "white",
      paddingTop: "1em",
      paddingBottom: "1em"
    }}
    title={
      props.description && (
        <div style={{ color: "white" }}>{props.description.title}</div>
      )
    }
    subTitle={
      props.description && (
        <div style={{ color: "white" }}>{`${props.description.days} days`}</div>
      )
    }
    onBack={() => props.history.goBack()}
    backIcon={<Icon style={{ color: "white" }} type="arrow-left" />}
  />
);
