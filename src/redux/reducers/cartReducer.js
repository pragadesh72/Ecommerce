const initialState = {
  cartQty: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CART_QTY":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
