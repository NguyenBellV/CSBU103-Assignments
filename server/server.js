// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']); // Sử dụng DNS của Google

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = "mongodb+srv://nguyen081104:Tringuyen0811@csbu103.ee8e10a.mongodb.net/?appName=CSBU103";

mongoose.connect(mongoURI)
  .then(() => console.log("Kết nối MongoDB thành công!"))
  .catch(err => console.error("Lỗi kết nối:", err));

const ShipmentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  addressFrom: String,
  addressTo: String,
  itemName: String,
  itemCategory: String,
  weight: Number,
  length: Number,
  width: Number,
  height: Number,
  value: Number,
  countryTo: String,
  postcodeTo: String,
  type: String,
  createdAt: { type: Date, default: Date.now }
});

const Shipment = mongoose.model('Shipment', ShipmentSchema);

// API Endpoint để nhận dữ liệu từ React
app.post('/api/shipments', async (req, res) => {
  try {
    const newShipment = new Shipment(req.body);
    await newShipment.save();
    res.status(201).json({ message: "Lưu đơn hàng thành công!" });
  } catch (error) {
    console.log("Lỗi khi lưu đơn hàng:", error);
    res.status(500).json({ error: "Lỗi khi lưu đơn hàng" });
  }
});

// 1. Lấy tất cả đơn hàng từ MongoDB
app.get('/api/shipments', async (req, res) => {
  try {
    const shipments = await Shipment.find().sort({ createdAt: -1 }); // Mới nhất hiện lên đầu
    res.json(shipments);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy dữ liệu" });
  }
});

// 2. Xóa một đơn hàng theo ID
app.delete('/api/shipments/:id', async (req, res) => {
  try {
    await Shipment.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa đơn hàng thành công" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa đơn hàng" });
  }
});

app.listen(5000, () => console.log('Server đang chạy tại port 5000'));