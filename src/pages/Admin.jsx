import React, { useEffect, useState } from "react";
import "../css/Admin.css";

function Admin() {
  const [shipments, setShipments] = useState([]);

  // Lấy dữ liệu từ server khi vào trang
  const fetchShipments = () => {
    fetch("http://localhost:5000/api/shipments")
      .then((res) => res.json())
      .then((data) => setShipments(data))
      .catch((err) => console.error("Lỗi:", err));
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  // Hàm xử lý xóa
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa đơn hàng này?")) {
      fetch(`http://localhost:5000/api/shipments/${id}`, { method: "DELETE" })
        .then(() => fetchShipments()) // Load lại danh sách sau khi xóa
        .catch((err) => alert("Lỗi khi xóa!"));
    }
  };

  return (
    <div className="admin-container">
      <h2>Quản Lý Đơn Hàng (Admin)</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Ngày tạo</th>
            <th>Loại</th>
            <th>Người gửi</th>
            <th>SĐT</th>
            <th>Hàng hóa</th>
            <th>Trọng lượng</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((item) => (
            <tr key={item._id}>
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
              <td>
                <span className={`badge ${item.type === "International" ? "intl" : "dom"}`}>
                  {item.type === "International" ? "Quốc tế" : "Trong nước"}
                </span>
              </td>
              <td>{item.fullName}</td>
              <td>{item.phone}</td>
              <td>{item.itemName}</td>
              <td>{item.weight} kg</td>
              <td>
                <button className="del-btn" onClick={() => handleDelete(item._id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;