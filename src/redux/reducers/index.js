import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import gwReducer from "./gwReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  gw: gwReducer,
});
export default rootReducer;
