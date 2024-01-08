import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import "./App.css";
import { Gridwall } from "./components/Gridwall";
import { Landing } from "./components/Landing";
import reducers from "./redux/reducers/index";

function App() {
  const store = createStore(reducers);
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/gridwall" element={<Gridwall />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
