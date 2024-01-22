import axios from "axios";
const updateCartQty = qty => {
  console.log("action called");
  return {
    type: "UPDATE_CART_QTY",
    payload: qty,
  };
};

const fetchProducts = pos => {
  return dispatch => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(({ data }) => {
        const products = data.slice(pos.startPos, pos.endPos).map(item => {
          item.like = false;
          item.dislike = false;
          return item;
        });
        dispatch({ type: "FETCH_PRODUCTS", payload: products });
      })
      .catch(err => err);
  };
};

const addToCart = item => {
  console.log(item);
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export { updateCartQty, addToCart, fetchProducts };
