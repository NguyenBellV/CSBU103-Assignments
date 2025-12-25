import React, { useState } from "react";
import "../css/Domestic.css";

function Domestic() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressFrom: "",
    addressTo: "",
    // Goods
    itemName: "",
    itemCategory: "Hàng thường",
    weight: "",
    length: "",
    width: "",
    height: "",
    value: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle when Clicking Submit Button
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("http://localhost:5000/api/shipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gửi dữ liệu thất bại!");
        }
        return response.json(); // Chuyển dữ liệu phản hồi sang dạng JSON
      })
      .then((data) => {
        // Xử lý khi thành công
        console.log("Thành công:", data);
        alert("Đã gửi đơn hàng thành công và lưu vào MongoDB!");
        
        // Reset form về trạng thái trống
        setFormData({
          fullName: "", email: "", phone: "",
          addressFrom: "", addressTo: "",
          itemName: "", itemCategory: "Hàng thường",
          weight: "", value: "",
          length: "", width: "", height: "",
        });
      })
      .catch((error) => {
        // Xử lý khi có lỗi (lỗi mạng hoặc lỗi từ throw ở trên)
        console.error("Lỗi:", error);
        alert("Không thể kết nối tới Server. Vui lòng kiểm tra lại Backend!");
      });
  };

  return (
    <section className="form-section">
      <h2>Nhập Thông Tin</h2>
      <p>Vui lòng điền đầy đủ thông tin dưới đây theo biểu mẫu</p>

      <form onSubmit={handleSubmit}>
        <div className="section-group">
          <h3>1. Thông tin liên hệ</h3>
          <label>
            Họ và Tên <span>*</span>
            <input 
              type="text" 
              name="fullName" 
              placeholder="Nguyen Van A" 
              value={formData.fullName} 
              onChange={handleChange} 
              required
            />
          </label>

          <div className="form-row">
            <label>
              Email <span>*</span>
              <input 
                type="email" 
                name="email" 
                placeholder="example@gmail.com" 
                value={formData.email} 
                onChange={handleChange} 
                required
              />
            </label>

            <label>
              Số điện thoại <span>*</span>
              <input 
                type="tel" 
                name="phone" 
                placeholder="090..." 
                value={formData.phone} 
                onChange={handleChange} 
                required
              />
            </label>
          </div>
        </div>

        <div>
          <h3>2. Địa chỉ giao hàng</h3>
          <label>
            Địa chỉ người gửi (From) <span>*</span>
            <input
              type="text"
              name="addressFrom"
              placeholder="Số nhà, tên đường, phường..."
              value={formData.addressFrom}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Địa chỉ người nhận (To) <span>*</span>
            <input
              type="text"
              name="addressTo"
              placeholder="Số nhà, tên đường, phường..."
              value={formData.addressTo}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        
        <div className="section-group">
          <h3>3. Thông tin hàng hoá</h3>
          <div className="form-row">
            <label>
              Tên mặt hàng <span>*</span>
              <input
                type="text"
                name="itemName"
                placeholder="Tên mặt hàng"
                value={formData.itemName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Loại hàng <span>*</span>
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
            </label>
          </div>

          <div className="form-row">
            <label>
              Cân nặng - kg <span>*</span>
              <input
                type="number"
                name="weight"
                placeholder="0.5"
                step="0.1"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <p className="sub-label">Size (Length x Width x Height) - cm</p>
          <div className="form-row-tri">
            <input type="number" name="length" placeholder="Dài" value={formData.length} onChange={handleChange} />
            <input type="number" name="width" placeholder="Rộng" value={formData.width} onChange={handleChange} />
            <input type="number" name="height" placeholder="Cao" value={formData.height} onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Gửi Đơn
        </button>
      </form>
    </section>
  );
}

export default Domestic;
