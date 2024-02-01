const initialState = {
  originalList: [],
  productList: [],
  cartItems: [],
  cartQty: 0,
  loader: false,
  filteredProducts: [],
  filterCount: 0,
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
        productList: [...state.productList, ...payload.products],
        originalList: payload.originalList,
      };
    case "FILTER_PRODUCTS_SEARCH":
      return {
        ...state,
        productList: payload.products,
        filterCount: payload.filterCount,
      };
    case "REMOVE_FILTERS":
      return {
        ...state,
        productList: [...state.originalList],
      };
    default:
      return state;
  }
};

export default reducer;
