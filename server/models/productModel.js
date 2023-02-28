const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  category: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  store: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  brand: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  rating: {
    type: String,
    required: [true, "Please Enter product rating"],
  },
  imgUrl: {
    type: String,
    required: [true, "Please Enter product imgUrl"],
  },
  productUrl: {
    type: String,
    required: [true, "Please Enter product productUrl"],
  },
  price: {
    type: String,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  
});

module.exports = mongoose.model("Product", productSchema);