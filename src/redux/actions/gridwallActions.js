const updateCartQty = qty => {
  console.log("action called");
  return {
    type: "UPDATE_CART_QTY",
    payload: qty,
  };
};

const addToCart = item => {
  console.log(item);
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export { updateCartQty, addToCart };
