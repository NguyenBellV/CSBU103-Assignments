import React, { useState } from "react";
import "./FormSection.css";

function FormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
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
            placeholder="Nhập họ và tên đầy đủ"
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
          Địa Chỉ <span>*</span>
          <input
            type="text"
            name="address"
            placeholder="Nhập địa chỉ"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>

        <div className="form-row">
          <label>
            Thành Phố <span>*</span>
            <input
              type="text"
              name="city"
              placeholder="Nhập thành phố"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Quận/Huyện <span>*</span>
            <input
              type="text"
              name="district"
              placeholder="Nhập quận/huyện"
              value={formData.district}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Gửi Đơn
        </button>
      </form>
    </section>
  );
}

export default FormSection;
