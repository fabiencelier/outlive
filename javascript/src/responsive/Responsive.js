import React from "react";
import MediaQuery from "react-responsive";

export const Desktop = ({ children }) => (
  <MediaQuery query="(min-device-width: 1224px)">{children}</MediaQuery>
);

export const Mobile = ({ children }) => (
  <MediaQuery className="mobile" query="(max-device-width: 1224px)">
    {children}
  </MediaQuery>
);
