// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = "mongodb+srv://nguyen081104:Tringuyen0811@csbu103.ee8e10a.mongodb.net/shipmentDB?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log("✅ Kết nối MongoDB thành công!"))
  .catch(err => console.error("❌ Lỗi kết nối:", err));

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
    res.status(500).json({ error: "Lỗi khi lưu đơn hàng" });
  }
});

app.listen(5000, () => console.log("🚀 Server đang chạy tại port 5000"));