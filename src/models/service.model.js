const mongoose = require('mongoose');
const { Schema } = mongoose;

const ServiceSchema = new Schema({
  serviceID: String,
  category: String,
  brand: String,
  model: String,
  imei: String,
  damage: String,
  description: String,
  price: Number,
  customerName: String,
  customerPhoneNumber: String,
  customerEmail: String
})
//Convert Model
module.exports = mongoose.model('service', ServiceSchema) 