import { Row, Col } from "antd";
import React, { useState } from "react";
import "../css/Header.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function Header() {
  const [cartQty, setCartQty] = useState(0);
  return (
    <Row>
      <Col
        className="header perfect-center"
        span={4}
        style={{ color: "white" }}
      >
        <h1 style={{ margin: "0" }}>ShopApp</h1>
      </Col>
      <Col span={16} className="header perfect-center" />
      <Col
        className="header perfect-center"
        span={4}
        style={{ color: "white", position: "relative" }}
      >
        <ShoppingCartOutlined style={{ fontSize: "45px" }} />
        <span style={{ fontSize: "16px", position: "absolute", top: "36px" }}>
          {cartQty}
        </span>
      </Col>
    </Row>
  );
}
