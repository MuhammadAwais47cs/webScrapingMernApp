const express = require("express");
const {
  getAllBrands,
  createBrand,
  getBrandDetails,
} = require("../controllers/brandController");
const router = express.Router();
router.route("/brands").get(getAllProducts);
router.route("/brand/new").post(createBrand);
router.route("/brand/:id").get(getProductDetails);

module.exports = router;
