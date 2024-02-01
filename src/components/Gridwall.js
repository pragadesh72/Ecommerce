import { Row } from "antd";

import React from "react";
import Header from "./Header";
import { SideBar } from "./SideBar";
import { Tile } from "./Tile";

export const Gridwall = () => {
  return (
    <div className="gridwall">
      <Row className="header">
        <Header />
      </Row>
      <Row>
        <Row className="sidebar" style={{ display: "block" }}>
          <SideBar />
        </Row>
        <Row className="tile">
          <Tile />
        </Row>
      </Row>
      {/* <Row className="footer">
        <Footer />
      </Row> */}
    </div>
  );
};
