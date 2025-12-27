import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import các opponents
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Domestic from "./pages/Domestic";
import International from "./pages/International";
import Preview from "./pages/Preview";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* ROUTE: home page */}
          <Route path="/" element={<Home />} />

          <Route path="/domestic" element={<Domestic />} />
          <Route path="/international" element={<International />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
