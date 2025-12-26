import React from "react";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h3>VTP Express</h3>
        <p className="sub-title">
          Vận chuyển hàng hoá trong nước - quốc tế
          <br /> <span>Chọn loại dịch vụ bạn muốn sử dụng</span>
        </p>
      </header>

      <main className="home-main">
        <div className="home-options">
          {/* Group Domestic */}
          <div className="option-card">
            <button
              className="home-option-btn"
              onClick={() => navigate("/domestic")}
            >
              🚚 Ký gửi hàng trong nước
            </button>
            <p className="option-desc">Giao hàng nhanh toàn quốc, bảo hiểm 100% giá trị.</p>
          </div>

          {/* Group International */}
          <div className="option-card">
            <button
              className="home-option-btn"
              onClick={() => navigate("/international")}
            >
              ✈️ Ký gửi hàng quốc tế
            </button>
            <p className="option-desc">Kết nối các tuyến trọng điểm quốc tế, hỗ trợ khai báo trọn gói.</p>
          </div>
        </div>
      </main>

      <div className="notice-box">
        <div className="notice-icon">🛡️</div>
        <div className="notice-content">
          <h4>THÔNG BÁO TỪ HỆ THỐNG:</h4>
          <p>
            Khi đăng nhập các thông tin cá nhân (Họ và tên, ngày sinh, giới tính,
            số điện thoại,...) sẽ được bảo mật an toàn tuyệt đối theo tiêu chuẩn quốc tế.
          </p>
        </div>
      </div>
    </div>
  );
}