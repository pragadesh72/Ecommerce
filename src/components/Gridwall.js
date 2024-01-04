import { Row } from "antd";

import React from "react";

import Header from "./Header";
import { Tile } from "./Tile";

export const Gridwall = () => {
  return (
    <div className="gridwall">
      <Header />
      <Row>
        <Tile />
      </Row>
    </div>
  );
};
