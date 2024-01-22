const initialState = {
  productList: [],
  cartItems: [],
  cartQty: 0,
  loader: false,
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, ...payload],
        cartQty: state.cartQty + 1,
      };
    case "FETCH_PRODUCTS":
      return {
        ...state,
        productList: [...state.productList, ...payload],
      };
    default:
      return state;
  }
};

export default reducer;
