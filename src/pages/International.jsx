import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/International.css";

function International() {
  const navigate = useNavigate();

  // State quản lý dữ liệu form
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressFrom: "",
    countryTo: "USA", 
    postcodeTo: "",   
    addressTo: "",
    itemName: "",
    itemCategory: "Hàng thường",
    weight: "",
    value: "",
    length: "", 
    width: "", 
    height: "",
    type: "International"
  });

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Hàm xử lý khi nhấn nút Gửi Đơn
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("http://localhost:5000/api/shipments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Lỗi kết nối Server!");
      })
      .then((data) => {
        console.log("Thành công đơn quốc tế:", data);
        // Chuyển sang trang Preview và truyền dữ liệu đi
        navigate("/preview", { state: { formData: formData } });
      })
      .catch((error) => {
        console.error("Lỗi:", error);
        alert("Không thể kết nối tới Server. Vui lòng kiểm tra lại Backend!");
      });
  };

  return (
    <section className="form-section">
      <div className="form-header">
        <h2>Gửi Hàng Quốc Tế</h2>
        <p>Vui lòng điền thông tin người nhận tại nước ngoài chính xác để thông quan.</p>
      </div>

      <form onSubmit={handleSubmit} className="shipping-form">
        
        {/* THÔNG TIN NGƯỜI GỬI */}
        <div className="section-group">
          <h3>1. Thông tin người gửi (Tại Việt Nam)</h3>
          <div className="input-box">
            <label>Họ tên <span>*</span></label>
            <input type="text" name="fullName" placeholder="Nguyễn Văn A" value={formData.fullName} onChange={handleChange} required />
          </div>
          
          <div className="form-row">
            <div className="input-box">
              <label>Email <span>*</span></label>
              <input type="email" name="email" placeholder="example@gmail.com" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-box">
              <label>Số điện thoại <span>*</span></label>
              <input type="tel" name="phone" placeholder="090..." value={formData.phone} onChange={handleChange} required />
            </div>
          </div>

          <div className="input-box">
            <label>Địa chỉ gửi <span>*</span></label>
            <input type="text" name="addressFrom" placeholder="Địa chỉ chi tiết tại Việt Nam" value={formData.addressFrom} onChange={handleChange} required />
          </div>
        </div>

        {/* THÔNG TIN NGƯỜI NHẬN QUỐC TẾ */}
        <div className="section-group">
          <h3>2. Thông tin người nhận (Quốc tế)</h3>
          <div className="form-row">
            <div className="input-box">
              <label>Quốc gia đến <span>*</span></label>
              <select name="countryTo" value={formData.countryTo} onChange={handleChange}>
                <option value="USA">🇺🇸 Hoa Kỳ (USA)</option>
                <option value="JPN">🇯🇵 Nhật Bản (Japan)</option>
                <option value="KOR">🇰🇷 Hàn Quốc (Korea)</option>
                <option value="AUS">🇦🇺 Australia</option>
              </select>
            </div>
            <div className="input-box">
              <label>Zipcode/Postcode <span>*</span></label>
              <input type="text" name="postcodeTo" placeholder="Mã bưu chính quốc tế" value={formData.postcodeTo} onChange={handleChange} required />
            </div>
          </div>
          
          <div className="input-box">
            <label>Địa chỉ tại nước ngoài <span>*</span></label>
            <input type="text" name="addressTo" placeholder="Số nhà, tên đường, tiểu bang..." value={formData.addressTo} onChange={handleChange} required />
          </div>
        </div>

        {/* CHI TIẾT KIỆN HÀNG */}
        <div className="section-group">
          <h3>3. Chi tiết kiện hàng</h3>
          <div className="input-box">
            <label>Tên hàng hóa (Tiếng Anh) <span>*</span></label>
            <input type="text" name="itemName" placeholder="E.g. Cotton T-shirt, Dried food..." value={formData.itemName} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <div className="input-box">
              <label>Cân nặng (kg) <span>*</span></label>
              <input type="number" name="weight" placeholder="0.0" step="0.1" value={formData.weight} onChange={handleChange} required />
            </div>
            <div className="input-box">
              <label>Giá trị khai báo ($) <span>*</span></label>
              <input type="number" name="value" placeholder="USD" value={formData.value} onChange={handleChange} required />
            </div>
          </div>

          <p className="sub-label">Kích thước kiện hàng (cm)</p>
          <div className="form-row-tri">
            <input type="number" name="length" placeholder="Dài" value={formData.length} onChange={handleChange} />
            <input type="number" name="width" placeholder="Rộng" value={formData.width} onChange={handleChange} />
            <input type="number" name="height" placeholder="Cao" value={formData.height} onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Xác nhận và Xem Preview
        </button>
      </form>
    </section>
  );
}

export default International;