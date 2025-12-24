import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-icon">🏛️</div>
        <div className="header-text">
          <h1>Cổng thông tin</h1>
          <p>Hệ thống nhận đơn trực tiếp</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
