import { Row } from "antd";

import React from "react";

import Header from "./Header";
import { Tile } from "./Tile";

export const Gridwall = () => {
  return (
    <div className="gridwall">
      <Row className="header">
        <Header />
      </Row>

      <Row style={{ position: "relative", top: "100px" }}>
        <Tile />
      </Row>
    </div>
  );
};
