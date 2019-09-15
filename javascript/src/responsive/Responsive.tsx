import React from "react";
import MediaQuery from "react-responsive";

export const Desktop = (props: { children: JSX.Element | string }) => (
  <MediaQuery query="(min-device-width: 1224px)">{props.children}</MediaQuery>
);

export const Mobile = (props: { children: JSX.Element | string }) => (
  <MediaQuery className="mobile" query="(max-device-width: 1224px)">
    {props.children}
  </MediaQuery>
);
