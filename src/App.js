import './App.css';
import { Gridwall } from "./components/Gridwall";
import { Landing } from "./components/Landing";
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gridwall" element={<Gridwall />} />
      </Routes>
    </div>
  );
}

export default App;
