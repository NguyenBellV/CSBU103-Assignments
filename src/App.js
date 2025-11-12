import React from "react";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <FormSection />
    </div>
  );
}

export default App;
