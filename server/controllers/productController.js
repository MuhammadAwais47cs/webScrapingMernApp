const tryCatchAsyncError = require("../middleware/tryCatchAsyncError");
const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apiFeature");
const ErrorHandler = require("../utils/ErrorHandler");
// // Create product
exports.createProduct = tryCatchAsyncError(async (req, res, next) => {
  const { name, imgUrl } = req.body.product;
  if (imgUrl == "https://static.priceoye.pk/images/badges/fever-cricket.png") {
    return res.status(400).json({
      success: false,
      message: "A product with the same name already exists",
    });
  } else {
    // const existingProduct = await Product.findOne({ name });
    // console.log('existingProduct :>> ', existingProduct);
    // if (existingProduct) {
    //   return res.status(400).json({
    //     success: false,
    //     message: 'A product with the same name already exists',
    //   });
    // }
    // const existingProducts = await Product.find({ name });
    // if (existingProducts.length > 0) {
    //   const deletedProducts = await Product.deleteMany({ name });
    //   console.log('Deleted products:', deletedProducts);
    // }

    const product = await Product.create(req.body?.product);
    console.log("res :>> ", product?.id);
    return res.status(201).json({
      success: true,
      message: "product created successfully",
      product,
    });
  }
});

// get Product by Id OR get Product details

exports.getProductDetails = tryCatchAsyncError(async (req, res, next) => {
  console.log("req.params.id :>> ", req.params.id);
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler(`Product not found`, 404));
  }
  return res.status(200).json({
    success: true,
    product,
  });
});
exports.getAllProducts = tryCatchAsyncError(async (req, res, next) => {
  // return next(new ErrorHandler('template error'))
  const resultPerPage = 60;
  const productsCount = await Product.countDocuments();
  let query = Product.find();

  // if (req.query.name) {
  //   query = query.where("name", new RegExp(req.query.name, "i"));
  // }
  // console.log("query :>> ", query);
  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  if (req.query.name) {
    // console.log("req.query.name IF:>> ", req.query.name);
    console.log("apiFeatures.query ", apiFeatures.query);
    const result = await apiFeatures.query;
    console.log("result :>> ", result);
    const key = "store";
    const products = [
      ...new Map(result?.map((item) => [item[key], item])).values(),
    ];

    if (!products) {
      return next(new ErrorHandler(`Product not found`, 404));
    }
    console.log(" if products :>> ", products);
    res
      .status(200)
      .json({ success: true, products, productsCount, resultPerPage });
  } else {
    console.log("req.query.name else:>> ");

    const result = await apiFeatures.query;
    const key = "name";
    const products = [
      ...new Map(result?.map((item) => [item[key], item])).values(),
    ];

    if (!products) {
      return next(new ErrorHandler(`Product not found`, 404));
    }
    console.log("else products :>> ", products);
    res
      .status(200)
      .json({ success: true, products, productsCount, resultPerPage });
  }
});
