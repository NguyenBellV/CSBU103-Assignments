import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/Domestic.css"; // Dùng chung CSS để đồng bộ

function Preview() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {}; // Nhận dữ liệu từ trang Domestic gửi qua

  if (!formData) {
    return (
      <div className="preview-container">
        <p>Không có dữ liệu đơn hàng. Vui lòng quay lại trang chủ.</p>
        <button onClick={() => navigate("/")}>Quay về</button>
      </div>
    );
  }

  return (
    <div className="preview-container" style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <div className="preview-card" style={{ background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
        <h2 style={{ color: "#002b80", textAlign: "center" }}>XÁC NHẬN ĐƠN HÀNG</h2>
        <hr />
        
        <div className="preview-section">
          <h4>1. Thông tin người gửi & nhận</h4>
          <p><strong>Họ tên:</strong> {formData.fullName}</p>
          <p><strong>Điện thoại:</strong> {formData.phone} | <strong>Email:</strong> {formData.email}</p>
          <p><strong>Địa chỉ gửi:</strong> {formData.addressFrom}</p>
          <p><strong>Địa chỉ nhận:</strong> {formData.addressTo}</p>
        </div>

        <div className="preview-section">
          <h4>2. Chi tiết hàng hóa</h4>
          <p><strong>Tên mặt hàng:</strong> {formData.itemName}</p>
          <p><strong>Loại hàng:</strong> {formData.itemCategory}</p>
          <p><strong>Cân nặng:</strong> {formData.weight} kg</p>
          <p><strong>Kích thước:</strong> {formData.length}x{formData.width}x{formData.height} cm</p>
        </div>

        <div className="preview-actions" style={{ marginTop: "30px", display: "flex", gap: "10px" }}>
          <button className="submit-btn" onClick={() => window.print()}>In vận đơn</button>
          <button className="submit-btn" style={{ background: "#666" }} onClick={() => navigate("/")}>Quay về trang chủ</button>
        </div>
      </div>
    </div>
  );
}

export default Preview;