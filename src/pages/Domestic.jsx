import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Domestic.css";

function Domestic() {
  const navigate = useNavigate();

  // Khởi tạo trạng thái form
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressFrom: "",
    addressTo: "",
    itemName: "",
    itemCategory: "Hàng thường",
    weight: "",
    length: "",
    width: "",
    height: "",
    value: "",
  });

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Hàm xử lý khi nhấn nút Gửi Đơn
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Gửi dữ liệu lên Backend
    fetch("http://localhost:5000/api/shipments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Lỗi Server khi lưu dữ liệu");
      })
      .then((data) => {
        console.log("Thành công:", data);
        
        // CHUYỂN TRANG: Sang trang Preview và đính kèm dữ liệu (state)
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
        <h2>Ký Gửi Trong Nước</h2>
        <p>Vui lòng điền đầy đủ thông tin dưới đây để tạo vận đơn</p>
      </div>

      <form onSubmit={handleSubmit} className="shipping-form">
        {/* THÔNG TIN LIÊN HỆ */}
        <div className="section-group">
          <h3>1. Thông tin liên hệ</h3>
          <div className="input-box">
            <label>Họ và Tên <span>*</span></label>
            <input 
              type="text" 
              name="fullName" 
              placeholder="Ví dụ: Nguyễn Văn A" 
              value={formData.fullName} 
              onChange={handleChange} 
              required
            />
          </div>

          <div className="form-row">
            <div className="input-box">
              <label>Email <span>*</span></label>
              <input 
                type="email" 
                name="email" 
                placeholder="example@gmail.com" 
                value={formData.email} 
                onChange={handleChange} 
                required
              />
            </div>

            <div className="input-box">
              <label>Số điện thoại <span>*</span></label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="0901234567" 
                value={formData.phone} 
                onChange={handleChange} 
                required
              />
            </div>
          </div>
        </div>

        {/* ĐỊA CHỈ */}
        <div className="section-group">
          <h3>2. Địa chỉ giao hàng</h3>
          <div className="input-box">
            <label>Địa chỉ người gửi (From) <span>*</span></label>
            <input
              type="text"
              name="addressFrom"
              placeholder="Số nhà, tên đường, quận/huyện, tỉnh thành..."
              value={formData.addressFrom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <label>Địa chỉ người nhận (To) <span>*</span></label>
            <input
              type="text"
              name="addressTo"
              placeholder="Địa chỉ chi tiết người nhận..."
              value={formData.addressTo}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        {/* THÔNG TIN HÀNG HÓA */}
        <div className="section-group">
          <h3>3. Thông tin hàng hoá</h3>
          <div className="form-row">
            <div className="input-box">
              <label>Tên mặt hàng <span>*</span></label>
              <input
                type="text"
                name="itemName"
                placeholder="Ví dụ: Quần áo, Phụ kiện..."
                value={formData.itemName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <label>Loại hàng <span>*</span></label>
              <select
                name="itemCategory"
                value={formData.itemCategory}
                onChange={handleChange}
                required
              >
                <option value="Hàng thường">Hàng thường</option>
                <option value="Hàng điện tử">Hàng điện tử</option>
                <option value="Hàng giá trị cao">Hàng giá trị cao</option>
                <option value="Thực phẩm">Thực phẩm</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-box">
              <label>Cân nặng (kg) <span>*</span></label>
              <input
                type="number"
                name="weight"
                placeholder="0.5"
                step="0.1"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <label>Giá trị hàng (VNĐ)</label>
              <input
                type="number"
                name="value"
                placeholder="Ví dụ: 500000"
                value={formData.value}
                onChange={handleChange}
              />
            </div>
          </div>

          <p className="sub-label">Kích thước (Dài x Rộng x Cao) - cm</p>
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

export default Domestic;