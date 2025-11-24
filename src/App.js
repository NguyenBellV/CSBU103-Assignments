import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import các opponents
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import "./App.css";
import Home from "./pages/Home";
import Domestic from "./pages/Domestic";
import International from "./pages/International";
import Preview from "./pages/Preview";

function App() {
  return (
    // Bọc toàn bộ ứng dụng bằng <Router>
    <Router>
      <div className="App">
        {/* Header sẽ được hiện ở mọi trang */}
        <Header />

        {/* phần trong Routes sẽ là các trang điều hướng */}
        <Routes>
          {/* Đường dẫn mặc định đến TRANG CHỦ */}
          <Route path="/" element={<Home />} />

          <Route path="/formsection" element={<FormSection />} />
          <Route path="/domestic" element={<Domestic />} />
          <Route path="/international" element={<International />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
