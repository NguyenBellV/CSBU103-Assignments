import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FormSection from "./components/FormSection";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <FormSection />
    </div>
  );
}

export default App;
