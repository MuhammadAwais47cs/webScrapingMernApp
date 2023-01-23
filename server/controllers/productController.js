const tryCatchAsyncError = require('../middleware/tryCatchAsyncError');
const Product = require('../models/productModel');
const ApiFeatures = require('../utils/apiFeature');
const ErrorHandler = require('../utils/ErrorHandler');
// Create product
exports.createProduct = tryCatchAsyncError( async (req , res , next)=> {
  console.log('req.body :>> ', req.body);
  const product = await Product.create(req.body)
  return res.status(201).json({
    success:true,
    message:'product created successfully',
    product
  })
})

// get Product by Id OR get Product details 

exports.getProductDetails = tryCatchAsyncError( async (req, res , next ) => {
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
  const apiFeatures = new ApiFeatures(Product.find() , req.query).search();
  const products = await apiFeatures.query
  if(!products) {
   return next(new ErrorHandler(`Product not found`, 404));
  }
  res.status(400).json({success: false , products
})
})