import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import "./App.css";
import { Cart } from "./components/Cart";
import { Gridwall } from "./components/Gridwall";
import { Landing } from "./components/Landing";
import reducers from "./redux/reducers/index";

function App() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/gridwall" element={<Gridwall />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
