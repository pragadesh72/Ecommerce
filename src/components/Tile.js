import { Col, Row } from "antd";
import { Typography } from "antd";
import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  LikeOutlined,
  DislikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

export const Tile = () => {
  const { Title, Paragraph, Text, Link } = Typography;

  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    console.log("useeffect called");
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      const products = data.slice(0, 9).map(item => {
        item.like = false;
        item.dislike = false;
        return item;
      });
      setProducts(products);
    });
  }, []);

  const updateLikeandDislike = (id, value) => {
    console.log("clicked", id);
    if (value == "like") {
      products[id].like = !products[id].like;
      products[id].dislike = false;
    } else if (value == "dislike") {
      products[id].dislike = !products[id].dislike;
      products[id].like = false;
    }
    console.log(products);
    setProducts([...products]);
  };

  const addTocart = () => {
    console.log("item added to cart");
  };
  return (
    <Row style={{ padding: "20px" }}>
      {products.map((data, index) => (
        <Col id={data.id} span={8} style={{ height: "500px", padding: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <img src={data.image} style={{ height: "200px" }} />
          </div>

          <div
            style={{ fontSize: "14px", textAlign: "start", padding: "10px" }}
          >
            <span>
              <strong style={{ fontSize: "18px" }}>{data.title}</strong>
            </span>
            <div style={{ marginTop: "10px" }}>
              <span>
                <strong>Price : {data.price}</strong>
              </span>
            </div>
            <div style={{ marginTop: "5px" }}>
              <span>
                <strong>Rating : {data.rating.rate}</strong>
              </span>
            </div>
            <div style={{ marginTop: "5px" }}>
              <span>
                <strong>Quantity : {data.rating.count}</strong>
              </span>
            </div>
            <div
              style={{ marginTop: "5px", fontSize: "20px", cursor: "pointer" }}
            >
              <span
                style={{ marginRight: "10px" }}
                onClick={() => updateLikeandDislike(index, "like")}
              >
                {data.like ? <LikeFilled /> : <LikeOutlined />}
              </span>
              <span onClick={() => updateLikeandDislike(index, "dislike")}>
                {data.dislike ? <DislikeFilled /> : <DislikeOutlined />}
              </span>
            </div>
          </div>

          <div style={{ marginTop: "15px" }}>
            <Button className="AddToCart" type="primary" onClick={addTocart}>
              Add To Cart
            </Button>
          </div>
        </Col>
      ))}
    </Row>
  );
};
