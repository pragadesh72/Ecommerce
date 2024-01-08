import { Col, Row } from "antd";
import { Typography } from "antd";
import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/gridwallActions";
import {
  LikeOutlined,
  DislikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Tile = () => {
  const { Title, Paragraph, Text, Link } = Typography;

  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
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
    setProducts([...products]);
  };

  const addTocart = id => {
    const ExistedItem = cartItems.some(item => item === id);
    if (ExistedItem) {
      toast.info("Item Already In Cart !", {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      setCartItems([...cartItems, id]);
      const cartProduct = products.filter(item => item.id === id);
      dispatch(addToCart(cartProduct));
    }
  };
  return (
    <>
     <ToastContainer 
     position="top-right"
     autoClose={3000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"/>
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
            <Button
              className="AddToCart"
              type="primary"
              onClick={() => addTocart(data.id)}
            >
              Add To Cart
            </Button>
          </div>
        </Col>
      ))}
    </Row>
    </>
  );
};
