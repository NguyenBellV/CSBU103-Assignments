import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header>
        <h3>VTP Express</h3>
        <p>
          Vận chuyển hàng hoá trong nước - quốc tế
          <br /> Chọn loại dịch vụ bạn muốn sử dụng
        </p>
      </header>

      <main>
        <div className="home-options">
          <button
            className="home-option-btn"
            onClick={() => navigate("/domestic")}
          >
            🚚 Ký gửi hàng trong nước
          </button>

          <button
            className="home-option-btn"
            onClick={() => navigate("/international")}
          >
            ✈️ Ký gửi hàng quốc tế
          </button>
        </div>
      </main>
      <div className="notice">
        <h4>THÔNG BÁO TỪ HỆ THỐNG:</h4>
        <p>
          Khi đăng nhập các thông tin cá nhân (Họ và tên, ngày sinh, giới tính,
          số điện thoại,...) sẽ được bảo mật an toàn!!!
        </p>
      </div>
    </div>
  );
}
