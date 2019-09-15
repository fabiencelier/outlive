import React from "react";
import { Skeleton } from "antd";
import { connect } from "react-redux";
import { DescriptionBody } from "./DescriptionBody";
import { DescriptionHeader } from "./DescriptionHeader";
import { AppState } from "../../store/configureStore";
import { History } from "history";
import { Person } from "../../api/person";

const DescriptionContent = (props: {
  description: Person;
  history: History;
}) => (
  <div style={{ minHeight: "100vh", backgroundColor: "#282c34" }}>
    <DescriptionHeader {...props} />
    {props.description ? (
      <DescriptionBody {...props.description} />
    ) : (
      <Skeleton />
    )}
  </div>
);

const mapStateToProps = (
  state: AppState,
  ownProps: { match: { params: { id: string } } }
) => {
  const description = state.database.filter(
    p => p.id === ownProps.match.params.id
  )[0];
  return { description };
};

export const Description = connect(mapStateToProps)(DescriptionContent);
