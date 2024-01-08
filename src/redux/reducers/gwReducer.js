const initialState = {
  cartItems: [],
  cartQty: 0,
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
    default:
      return state;
  }
};

export default reducer;
