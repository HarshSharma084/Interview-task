import Home from "../src/Home";
import Instruction from "../src/Instuction";
import React from "react";

// import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/ins" element={<Instruction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
