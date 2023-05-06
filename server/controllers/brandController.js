const tryCatchAsyncError = require("../middleware/tryCatchAsyncError");
const Brand = require("../models/brandModel");
const ApiFeatures = require("../utils/apiFeature");
const ErrorHandler = require("../utils/ErrorHandler");
// // Create brand
exports.createBrand = tryCatchAsyncError(async (req, res, next) => {
  const brand = await Brand.create(req.body?.brand);
  return res.status(201).json({
    success: true,
    message: "Brand created successfully",
    brand,
  });
});

// get Brand by Id OR get Brand details

exports.getBrandDetails = tryCatchAsyncError(async (req, res, next) => {
  console.log("req.params.id :>> ", req.params.id);
  const brand = await Brand.findById(req.params.id);
  if (!brand) {
    return next(new ErrorHandler(`brand not found`, 404));
  }
  return res.status(200).json({
    success: true,
    brand,
  });
});
exports.getAllBrands = tryCatchAsyncError(async (req, res, next) => {
  // return next(new ErrorHandler('template error'))
  const resultPerPage = 100;
  const brandsCount = await Brand.countDocuments();
  const apiFeatures = new ApiFeatures(Brand.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  if (req.query.name) {
    const result = await apiFeatures.query;
    const key = "store";
    const brands = [
      ...new Map(result?.map((item) => [item[key], item])).values(),
    ];

    if (!brands) {
      return next(new ErrorHandler(`Brand not found`, 404));
    }
    res.status(200).json({ success: true, brands, brandsCount, resultPerPage });
  } else {
    const result = await apiFeatures.query;
    const [min, max] = await apiFeatures.range;
    console.log(min, max, "min , max");
    const filteredResult = result.filter((doc) => {
      // Remove commas from the price field and convert to number
      const priceNum = parseFloat(doc.price.replace(/,/g, ""));
      // Check if the price is within the range
      return priceNum >= min && priceNum <= max;
    });
    // console.log(filteredResult, "<---");

    const key = "name";
    const brands = [
      ...new Map(filteredResult?.map((item) => [item[key], item])).values(),
    ];

    if (!brands) {
      return next(new ErrorHandler(`Brand not found`, 404));
    }
    // console.log("else brands :>> ", brands);
    res.status(200).json({ success: true, brands, brandsCount, resultPerPage });
  }
});
