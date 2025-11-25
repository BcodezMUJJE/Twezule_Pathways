import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Destination from "./components/Destinations";
import Impact from "./components/Impact";
import GetInvolved from "./components/GetInvolved";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Destination />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </div>
    </Router>
  );
}
