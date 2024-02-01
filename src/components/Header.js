import { Row, Col } from "antd";
import React, {useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/Header.css";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import { filterProductsOnSearch } from "../redux/actions/gridwallActions";
import { ToastMessage } from "../common/ToastMessage";
import { toast } from "react-toastify";
import {flag} from "../common/icon/Icons";

export default function Header() {
  const cartQty = useSelector(state => state.gw.cartQty);
  const[language, setLanguage] = useState("English");
  const[searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const InputRef = useRef();

 
  const products = useSelector(state =>  state.gw.productList);
  const AllProducts = useSelector(state =>  state.gw.originalList);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    let lan = e.target.value === "en" ? "English" : e.target.value === "fr" 
    ? "French" : "None";
    setLanguage(lan);
  };

  const searchFilter = () => {
   
  if(searchValue) {
    const regexPattern = new RegExp(searchValue, 'i');
    let filteredProducts = AllProducts.filter((item) => regexPattern.test(item.title));
    dispatch(filterProductsOnSearch(filteredProducts))
  }  
  
  }

  const gotoCart = () => {
    navigate("/cart");
  }
  return (
<>

      <Col
        className="perfect-center"
        span={4}
        style={{ color: "white" }}
      >
      <ToastMessage/>
        <h1 style={{ margin: "0" }}>ShopApp</h1>
      </Col>
      <Col span={2} className="perfect-center" />
      <Col span={12} className="perfect-center">
      <TextField style={{width:"90%", background:"white"}}
      value="sjkfhjkfhskjfhs"
       id="outlined-basic" label="Search Items..." variant="filled"
       value={searchValue}
       ref={InputRef}
       onChange={(e) => setSearchValue(e.target.value) }
       onKeyPress={(event) => {
        if(event.key === 'Enter'){
          searchFilter();
        }
       }}
       >
       
       </TextField>
       <SearchOutlined 
       style={{fontSize:"30px", color: "black", position:"relative", right:"50px"}} 
       onClick={() => searchFilter()}
       />
      </Col>
      {/* <Col span={2} className="perfect-center" /> */}
      
      <Col span={2} className="perfect-center">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} style={{display: "flex"}}>
        <InputLabel style={{color : "white", fontWeight: "bold"}} id="demo-simple-select-standard-label">
        Language
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={language}
          label="Language"
          onChange={changeLanguage}
          className="one"
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fr">French</MenuItem>
        </Select>
      </FormControl>
      </Col>
      <Col
        className="perfect-center"
        span={2}
        style={{ color: "white", position: "relative" }}
      >
        <ShoppingCartOutlined style={{ fontSize: "55px" }} onClick={gotoCart}/>
        <span style={{ fontSize: "14px", position: "absolute", top: "38px", fontWeight : "bold" }}>
          {cartQty}
        </span>
      </Col>
  </>
  );
}


