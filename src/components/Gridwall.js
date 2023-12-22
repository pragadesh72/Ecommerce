import { Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { Tile } from "./Tile";

export const Gridwall = () => {
  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setProducts(data.slice(0, 9));
    });
  }, []);

  return (
    <div className="gridwall">
      <Row>
        <Tile products={products} />
      </Row>
    </div>
  );
};
