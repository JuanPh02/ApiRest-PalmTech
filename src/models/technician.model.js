const mongoose = require('mongoose');
const { Schema } = mongoose;

const TechnicianSchema = new Schema({
  technicianID: String,
  documentID: String,
  name: String,
  lastname: String,
  sector: String,
  birthday: String,
  address: String,
  email: String,
  phone: String
})
//Convert Model
module.exports = mongoose.model('technician', TechnicianSchema) 