import { Col } from "antd";
import React from "react";

export const Tile = ({ products }) => {
  return (
    <>
    {
    products.map((data) => (
    <Col span={8} style={{ height: "500px", padding:"10px" }}>
    <div style={{marginBottom : "10px"}}>
    <img src={data.image} style={{height:"200px"}} />
    </div>
    <span ><strong>{data.title}</strong></span>
    <div style={{marginTop : "10px"}}>
    <span><strong>Price :{" "}{data.price}</strong></span>
    </div>
    <div style={{marginTop : "10px"}}>
    <span><strong>Rating :{" "}{data.rating.rate}</strong></span>
    
    </div>
    <div style={{marginTop : "10px"}}>
    <span><strong>Quantity :{" "}{data.rating.count}</strong></span>
    </div>
   
     
    </Col>
  ))
}
    </> 
    )};
