import React, { useState } from "react";
import "../css/Domestic.css";

function Domestic() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressFrom: "",
    addressTo: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle when Clicking Submit Button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu Form:", formData);
    alert("Đã gửi đơn thành công!");
  };

  return (
    <section className="form-section">
      <h2>Nhập Thông Tin</h2>
      <p>Vui lòng điền đầy đủ thông tin dưới đây theo biểu mẫu</p>

      <form onSubmit={handleSubmit}>
        <label>
          Họ và Tên <span>*</span>
          <input
            type="text"
            name="fullName"
            placeholder="Họ và tên"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email <span>*</span>
          <input
            type="email"
            name="email"
            placeholder="Nhập địa chỉ email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Số Điện Thoại <span>*</span>
          <input
            type="tel"
            name="phone"
            placeholder="Nhập số điện thoại"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Địa chỉ người gửi/ From <span>*</span>
          <input
            type="text"
            name="addressFrom"
            placeholder="Nhập địa chỉ"
            value={formData.addressFrom}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Địa chỉ người nhận/ To <span>*</span>
          <input
            type="text"
            name="addressTo"
            placeholder="Nhập địa chỉ"
            value={formData.addressTo}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="submit-btn">
          Gửi Đơn
        </button>
      </form>
    </section>
  );
}

export default Domestic;
