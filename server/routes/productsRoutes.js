const express = require('express');
const { getAllProducts , createProduct ,getProductDetails } = require('../controllers/productController');
const router = express.Router();
router.route('/products').get(getAllProducts);
router.route('/products/new').post(createProduct);
router.route("/product/:id").get(getProductDetails);

module.exports = router