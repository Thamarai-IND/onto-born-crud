const mongoose = require('mongoose');


const SalesSchema = new mongoose.Schema({
    id : {
        type: Number,
        required:true
    },
    productName : {
        type: String,
        required:true
    },
    quantity : {
        type: String,
        required:true
    },
    price : {
        type: Number,
        required:true
    },
  });

  const Sales = mongoose.model('Sales', SalesSchema);

  module.exports = Sales;

