const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { 
    required: true,
    type: String
  },
  payPalName: {
    required: true,
    type: String
  },
  plusOne: {
    type: Number,
    required: true,
    default: false
  },
  paid: {
    type: Boolean,
    required: true,
    default: false
  }
})

module.exports = mongoose.model('Person', personSchema);