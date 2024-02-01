import { Col, Row } from "antd";
import { Button } from "antd";
import { Typography } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart, fetchProducts } from "../redux/actions/gridwallActions";
import {
  LikeOutlined,
  DislikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import CircularProgress from "@mui/material/CircularProgress";

import Rating from "@mui/material/Rating";
import "react-toastify/dist/ReactToastify.css";
import { ToastMessage } from "../common/ToastMessage";

export const Tile = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [pos, setPos] = useState({ startPos: 0, endPos: 6 });
 // const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoader] = useState(true);

  const products = useSelector(state =>  state.gw.productList);
 
  

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProducts(pos));
      setPos({
        ...pos,
        startPos: pos.startPos + 6,
            endPos: pos.endPos + 6,
      });
      setLoader(false);
    }, 2000)
     
  }, []);

  const updateLikeandDislike = (id, value) => {
    
    if (value == "like") {
      products[id].like = !products[id].like;
      products[id].dislike = false;
    } else if (value == "dislike") {
      products[id].dislike = !products[id].dislike;
      products[id].like = false;
    }
    //setProducts([...products]);
  };

  const addTocart = id => {
    const ExistedItem = cartItems.some(item => item === id);
    if (ExistedItem) {
      toast.info("Already Existing In Cart !!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setCartItems([...cartItems, id]);
      const cartProduct = products.filter(item => item.id === id);
      dispatch(addToCart(cartProduct));
    }
  };

  const fetchData = () => {
    // Simulate fetching more data
    
    if (products.length < 18) {
      setTimeout(() => {
        dispatch(fetchProducts(pos));
        setPos({
          ...pos,
          startPos: pos.startPos + 6,
              endPos: pos.endPos + 6,
        });
      }, 1500); // Simulated delay for API call
    } else {
      setHasMore(false);
      setPos({
        ...pos,
        startPos: 0,
        endPos: 6,
      });
    }
  };

  return (
    <>
      <ToastMessage/>

      <InfiniteScroll
        dataLength={products.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
        height={600}
      >
        {loading && <CircularProgress style={{ color: "black", position : "absolute", top:"50%" }} />}
        <Row>
          {products.map((data, index) => (
            <Col id={data.id} span={8} style={{ padding: "20px" }}>
              <div style={{ marginBottom: "10px" }}>
                <img src={data.images[0]} style={{ height: "200px", width: "300px" }} />
              </div>

              <div
                style={{
                  fontSize: "14px",
                  textAlign: "start",
                  padding: "10px",
                }}
              >
                <span>
                  <strong style={{ fontSize: "18px" }}>{data.title}</strong>
                </span>
                <div style={{ marginTop: "10px" }}>
                  <span>
                    <strong>
                      {t("Price")} : {data.price}
                    </strong>
                  </span>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <span>
                    <strong>
                      {t("Rating")} :
                      <Rating
                        style={{ fontSize: "20px", position: "absolute" }}
                        name="half-rating-read"
                        defaultValue={0}
                        value={data.rating}
                        precision={0.1}
                        readOnly
                      />
                    </strong>
                  </span>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <span>
                    <strong>
                      {" "}
                      {t("Quantity")} : {data.stock}
                    </strong>
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "5px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
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
                  {t("AddToCart")}
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </>
  );
};
