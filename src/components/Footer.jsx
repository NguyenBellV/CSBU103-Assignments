import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Cột 1: Giới thiệu */}
        <div className="footer-section">
          <h3>LOGISTICS SERVICE</h3>
          <p>Dịch vụ vận chuyển uy tín, nhanh chóng và an toàn hàng đầu Việt Nam.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/thanhgiangvnpt">Facebook</a> | 
            <a href="https://zalo.me/0919421578">Zalo</a>
          </div>
        </div>

        {/* Dịch vụ */}
        <div className="footer-section">
          <h4>Dịch vụ</h4>
          <ul>
            <li><a href="/domestic">📦 Gửi hàng trong nước</a></li>
            <li><a href="/international">✈️ Gửi hàng quốc tế</a></li>
            <li><a href="#">🔍 Tra cứu đơn hàng</a></li>
          </ul>
        </div>

        {/* Cột 3: Liên hệ */}
        <div className="footer-section">
          <h4>Liên hệ</h4>
          <p><span>📍</span> 2/8 Tân Lập, Tân Thới Nhì, Hóc Môn, TP. HCM</p>
          <p><span>📞</span> Hotline: 0919 421 578</p>
          <p><span>✉️</span> Email: giangvnpt@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Logistics Service. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;