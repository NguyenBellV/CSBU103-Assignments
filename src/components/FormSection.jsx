import React, { useState } from "react";
import "./FormSection.css";

function FormSection() {
  const [formData, setFormData] = useState({
    lastName: "",
    middleAndFirstName: "",
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
    // name is "lastName", or "middleAndFirstName"
    setFormData({ ...formData, [name]: value });
  };

  // Handle when Clicking Submit Button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu Form:", formData);
    alert("Đã gửi đơn thành công!");
  };

  const fullNameCalculated = (
    formData.lastName +
    " " +
    formData.middleAndFirstName
  ).trim();

  return (
    <section className="form-section">
      <h2>Nhập Thông Tin</h2>
      <p>Vui lòng điền đầy đủ thông tin dưới đây theo biểu mẫu</p>

      <form onSubmit={handleSubmit}>
        <div className="form-name">
          <label>
            Họ<span>*</span>
            <input
              type="text"
              name="lastName"
              placeholder="Nhập họ"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Tên đệm và Tên <span>*</span>
            <input
              type="text"
              name="middleAndFirstName"
              placeholder="Nhập tên đệm và tên"
              value={formData.middleAndFirstName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Họ và Tên <span>*</span>
            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
              value={fullNameCalculated} //Gán value đã được tính toán
              readOnly //Người dùng không thể chỉnh sửa trực tiếp
              required
            />
          </label>
        </div>

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

        <label>
          Địa chỉ người nhận/ To <span>*</span>
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
