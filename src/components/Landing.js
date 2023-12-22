import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="Landing perfect-center">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "50px", margin: "0px" }}>Welcome to ShopApp</h1>
        <span style={{ fontSize: "20px" }}>
          <Link
            to="/gridwall"
            style={{ textDecoration: "none", color: "black" }}
          >
            Shop Here
          </Link>
        </span>
      </div>
    </div>
  );
};
