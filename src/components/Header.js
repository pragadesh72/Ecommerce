import { Row, Col } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "../css/Header.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function Header() {
  const cartQty = useSelector(state => state.gw.cartQty);
  return (
<>
      <Col
        className="perfect-center"
        span={4}
        style={{ color: "white" }}
      >
        <h1 style={{ margin: "0" }}>ShopApp</h1>
      </Col>
      <Col span={16} className="perfect-center" />
      <Col
        className="perfect-center"
        span={4}
        style={{ color: "white", position: "relative" }}
      >
        <ShoppingCartOutlined style={{ fontSize: "45px" }} />
        <span style={{ fontSize: "16px", position: "absolute", top: "36px" }}>
          {cartQty}
        </span>
      </Col>
  </>
  );
}


