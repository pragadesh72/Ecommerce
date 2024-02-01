import React, {useState} from "react";
import { Row, Col } from "antd";
import { Checkbox } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { removeFilters, filterProductsOnSearch } from "../redux/actions/gridwallActions";
import{priceCheckboxValues, ratingCheckboxValues} from "../common/constants";

export function SideBar() {
const dispatch = useDispatch();
  const products = useSelector(state =>  state.gw.productList);
  const AllProducts = useSelector(state =>  state.gw.originalList);
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [ratingValues, setRatingValues] = useState([]);
  const [priceArr, setPriceArr] = useState([]);
  const [ratingArr, setRatingArr] = useState([]);
  const filterCount = useSelector(state => state.gw.filterCount);


  console.log(priceArr, ratingArr);
  console.log(products);

const PriceAndRangeFilter = (e,data,filterOption) => {

const filterValue = filterOption == "price" ?  checkboxValues : ratingValues;
  const isChecked = filterValue.includes(data.value);

  if(filterOption == "price") {
    setCheckboxValues((prevValues) => {
      if (isChecked) {
        return prevValues.filter((item) => item !== data.value);
      } else {
        return [...prevValues, data.value];
      }
    });
  } else {
    setRatingValues((prevValues) => {
      if (isChecked) {
        return prevValues.filter((item) => item !== data.value);
      } else {
        return [...prevValues, data.value];
      }
    });
  }
 
if(!isChecked) {
  if(filterOption == "price") {

    if(ratingArr.length > 0) {
      const filteredProducts = ratingArr.filter((item) => {
        return item.price >= data.range.min && item.price <= data.range.max
      });
      const UpdatedPricearr = AllProducts.filter((item) => {  
        return item.price >= data.range.min && item.price <= data.range.max
      });
      const finalArr = priceArr.length > 0 ? [...products,...filteredProducts] : [...filteredProducts];
      setPriceArr([...priceArr,...UpdatedPricearr]);
      dispatch(filterProductsOnSearch([...finalArr],filterCount+1))

    } else {
      const filteredProducts = AllProducts.filter((item) => {
        return item.price >= data.range.min && item.price <= data.range.max
      });
      setPriceArr([...priceArr,...filteredProducts]);
      dispatch(filterProductsOnSearch([...priceArr,...filteredProducts],filterCount+1))
    }
  } else {

    
    if(priceArr.length > 0) {

      const filteredProducts = priceArr.filter((item) => {
        return item.rating >= data.range.min && item.rating <= data.range.max
      });
      const UpdatedRatingarr = AllProducts.filter((item) => {
        return item.rating >= data.range.min && item.rating <= data.range.max
      });
      const finalArr = ratingArr.length > 0 ? [...products,...filteredProducts] : [...filteredProducts];
            setRatingArr([...ratingArr,...UpdatedRatingarr]);
      dispatch(filterProductsOnSearch([...finalArr],filterCount+1))
      

    } else {
      const filteredProducts = AllProducts.filter((item) => {
        return item.rating >= data.range.min && item.rating <= data.range.max
      });
      setRatingArr([...ratingArr,...filteredProducts]);
      dispatch(filterProductsOnSearch([...ratingArr,...filteredProducts],filterCount+1))
    }

  }
 
} else {

  if(filterOption == "price" ) {
    const filteredProducts = products.filter((item) => {
      return !(item.price >= data.range.min && item.price <= data.range.max)
    });
    const UpdatedPricearr = priceArr.filter((item) => {
      return !(item.price >= data.range.min && item.price <= data.range.max)
    });
    setPriceArr(UpdatedPricearr);
    const finalArr = filterCount <= 1 ?   AllProducts : UpdatedPricearr.length >=1 ? filteredProducts : ratingArr;
    dispatch(filterProductsOnSearch([...finalArr],filterCount-1))
  } else {

    const filteredProducts = products.filter((item) => {
      return !(item.rating >= data.range.min && item.rating <= data.range.max)
    });
    const UpdatedRatingearr = ratingArr.filter((item) => {
      return !(item.rating >= data.range.min && item.rating <= data.range.max)
    });
    const finalArr = filterCount <= 1 ?   AllProducts : UpdatedRatingearr.length >=1 ? filteredProducts : priceArr;
    setRatingArr(UpdatedRatingearr);
    dispatch(filterProductsOnSearch([...finalArr],filterCount-1))

  }
 
}
}

const removeAllFilters = () => {
  //set products to allproducts
  //uncheck all checkboxes
  setPriceArr([]);
  setRatingArr([]);
  setCheckboxValues([]);
  setRatingValues([]);
  dispatch(removeFilters())
}

  return (
   
    <>
    <Col span={24} style={{padding: "0px 10px", fontWeight: "bold",
      display:"flex", flexDirection:"column", alignItems: "start", height:"150px"}}>
      <h2 style={{textAlign:"start"}}>Price</h2>
      {priceCheckboxValues.map((item) => (
         <Col>
         <Checkbox 
         value={item.value}
         checked={checkboxValues.includes(item.value)}
          onChange={(e) => PriceAndRangeFilter(e,item,"price")}>
          {item.label}</Checkbox>
         </Col>
      ))
      }
    
      
    </Col>
    <Col span={24} style={{padding: "0px 10px", fontWeight: "bold",
      display:"flex", flexDirection:"column", alignItems: "start"}}>
      <h2 style={{textAlign:"start"}}>Rating</h2>
      {/* <div>
      <Checkbox onChange={(e) => PriceAndRangeFilter(e,{minVal : 1, maxVal : 2},"rating")}>1-2</Checkbox>
      </div>
      <Col>
      <Checkbox onChange={(e) => PriceAndRangeFilter(e,{minVal : 2, maxVal : 3},"rating")}>2-3 </Checkbox>
      </Col>
      <Col>
      <Checkbox onChange={(e) => PriceAndRangeFilter(e,{minVal : 3, maxVal : 4},"rating")}>3-4</Checkbox>
      </Col>
      <Col>
      <Checkbox onChange={(e) => PriceAndRangeFilter(e,{minVal : 4, maxVal : 5},"rating")}>4-5</Checkbox>
      </Col> */}

      {ratingCheckboxValues.map((item) => (
         <Col>
         <Checkbox 
         value={item.value}
         checked={ratingValues.includes(item.value)}
          onChange={(e) => PriceAndRangeFilter(e,item,"rating")}>
          {item.label}</Checkbox>
         </Col>
      ))
      }
    </Col>
    <div className="perfect-center" style={{marginTop:"30px"}}>
                <Button
                  className="AddToCart"
                  type="primary"
                  style={{width:"80%"}}
                  onClick={removeAllFilters}
                >
                  Remove Filters
                </Button>
              </div>
    </>
  );
}

export default SideBar;
