import axios from "axios";
const updateCartQty = qty => {
  return {
    type: "UPDATE_CART_QTY",
    payload: qty,
  };
};

const fetchProducts = pos => {
  return dispatch => {
    //https://dummyjson.com/products
    //https://fakestoreapi.com/products
    axios
      .get("https://dummyjson.com/products")
      .then(({ data }) => {
        const originalList = data.products.slice(0, 18);
        const products = data.products
          .slice(pos.startPos, pos.endPos)
          .map(item => {
            item.like = false;
            item.dislike = false;
            return item;
          });
        dispatch({
          type: "FETCH_PRODUCTS",
          payload: {
            products: products,
            originalList: originalList,
          },
        });
      })
      .catch(err => err);
  };
};

const filterProductsOnSearch = (products, filterCount) => {
  console.log(products);
  return dispatch => {
    dispatch({
      type: "FILTER_PRODUCTS_SEARCH",
      payload: {
        products: products,
        filterCount: filterCount,
      },
    });
  };
};
const removeFilters = () => {
  return {
    type: "REMOVE_FILTERS",
  };
};
const addToCart = item => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export {
  updateCartQty,
  addToCart,
  fetchProducts,
  filterProductsOnSearch,
  removeFilters,
};
