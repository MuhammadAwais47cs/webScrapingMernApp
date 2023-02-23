const tryCatchAsyncError = require('../middleware/tryCatchAsyncError');
const Product = require('../models/productModel');
const ApiFeatures = require('../utils/apiFeature');
const ErrorHandler = require('../utils/ErrorHandler');
// // Create product
exports.createProduct = tryCatchAsyncError(async (req, res, next) => {
  const { name } = req.body.product;

  const existingProduct = await Product.findOne({ name });
  if (existingProduct) {
    return res.status(400).json({
      success: false,
      message: 'A product with the same name already exists',
    });
  }
  // const existingProducts = await Product.find({ name });
  // if (existingProducts.length > 0) {
  //   const deletedProducts = await Product.deleteMany({ name });
  //   console.log('Deleted products:', deletedProducts);
  // }

  const product = await Product.create(req.body?.product);
  console.log('res :>> ', product?.id);
  return res.status(201).json({
    success:true,
    message:'product created successfully',
    product
  })
})

// get Product by Id OR get Product details 

exports.getProductDetails = tryCatchAsyncError( async (req, res , next ) => {
  console.log('req.params.id :>> ', req.params.id);
   const product = await Product.findById(req.params.id);
   if(!product) {
    return next(new ErrorHandler(`Product not found`, 404));
   }
   return res.status(200).json({
    success:true,
    product
  });
})
exports.getAllProducts = tryCatchAsyncError( async (req , res , next)=> {
  // return next(new ErrorHandler('template error'))
  const resultPerPage = 20;
  const productsCount = await Product.countDocuments();

  console.log('productsCount :>> ', productsCount);
  const apiFeatures = new ApiFeatures(Product.find() , req.query).search().filter().pagination(resultPerPage);
  const products = await apiFeatures.query
  if(!products) {
   return next(new ErrorHandler(`Product not found`, 404));
  }
  res.status(200).json({success: true , products , productsCount, resultPerPage})
})