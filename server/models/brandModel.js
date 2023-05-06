const mongoose = require("mongoose");
const brandSchema = mongoose.Schema({
  brandName: {
    type: String,
    // required: [true, "Please Enter product Name"],
    trim: true,
  },
  sName: {
    type: String,
    //required: [true, "Please Enter product Description"],
  },
  description: {
    type: String,
    //required: [true, "Please Enter product Description"],
  },
  link: {
    type: String,
    //required: [true, "Please Enter product Stock"],
  },
  category: {
    type: String,
    // required: [true, "Please Enter product Description"],
  },

  store: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  brand: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  DeliveryCharges: {
    type: String,
    required: [true, "Please Enter product DeliveryCharges"],
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

module.exports = mongoose.model("Brand", brandSchema);
