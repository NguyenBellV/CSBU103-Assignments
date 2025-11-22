import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>VTP Express</h1>
        <p>Vận chuyển hàng hoá trong nước - quốc tế</p>
      </header>

      <main className="home-main">
        <h2>Chọn dịch vụ</h2>

        <div className="home-options">
          <button
            className="home-option-btn"
            onClick={() => navigate("/dosmetic")}
          >
            🚚 Ký gửi hàng trong nước
          </button>
        </div>

        <div>
          <button
            className="home-option-btn"
            onClick={() => navigate("/international")}
          >
            ✈️ Ký gửi hàng quốc tế
          </button>
        </div>
      </main>
    </div>
  );
}
