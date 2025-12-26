import React, { useState } from "react";
import "../css/International.css";

function International() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressFrom: "",
    countryTo: "USA", // Thêm quốc gia
    postcodeTo: "",   // Thêm mã bưu chính (Bắt buộc quốc tế)
    addressTo: "",
    itemName: "",
    itemCategory: "Hàng thường",
    weight: "",
    value: "",
    length: "", width: "", height: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi đến cùng API hoặc API riêng tùy bạn (ở đây dùng chung api shipments)
    fetch("http://localhost:5000/api/shipments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, type: "International" }),
    })
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then(() => alert("Đã gửi đơn hàng QUỐC TẾ thành công!"))
      .catch(() => alert("Lỗi kết nối server!"));
  };

  return (
    <section className="form-section">
      <h2>Gửi Hàng Quốc Tế</h2>
      <p>Vui lòng điền thông tin người nhận tại nước ngoài chính xác.</p>
      <form onSubmit={handleSubmit}>
        <div className="section-group">
          <h3>1. Thông tin người gửi</h3>
          <input type="text" name="fullName" placeholder="Họ tên" onChange={handleChange} required />
          <div className="form-row">
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Số điện thoại" onChange={handleChange} required />
          </div>
          <input type="text" name="addressFrom" placeholder="Địa chỉ gửi tại Việt Nam" onChange={handleChange} required />
        </div>

        <div className="section-group">
          <h3>2. Thông tin người nhận (Quốc tế)</h3>
          <div className="form-row">
            <select name="countryTo" onChange={handleChange}>
              <option value="USA">Hoa Kỳ (USA)</option>
              <option value="JPN">Nhật Bản (Japan)</option>
              <option value="KOR">Hàn Quốc (Korea)</option>
              <option value="AUS">Australia</option>
            </select>
            <input type="text" name="postcodeTo" placeholder="Mã Zipcode/Postcode *" onChange={handleChange} required />
          </div>
          <input type="text" name="addressTo" placeholder="Địa chỉ chi tiết tại nước ngoài" onChange={handleChange} required />
        </div>

        <div className="section-group">
          <h3>3. Chi tiết kiện hàng</h3>
          <input type="text" name="itemName" placeholder="Tên hàng hóa (Nên ghi tiếng Anh)" onChange={handleChange} required />
          <div className="form-row">
            <input type="number" name="weight" placeholder="Cân nặng (kg)" onChange={handleChange} required />
            <input type="number" name="value" placeholder="Giá trị khai báo ($)" onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="submit-btn">Tạo đơn quốc tế</button>
      </form>
    </section>
  );
}

export default International;