class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    console.log("this :>> ", keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const queryCopy = { ...this.queryStr };
    const regex = new RegExp("[\\d,]+");
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);
    console.log("queryCopy", queryCopy);
    // Filter For Price and Rating

    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    queryStr = JSON.parse(queryStr);
    console.log("queryStr :>> ", { ...queryStr });

    this.query = this.query.find(queryStr);
    console.log(queryStr.price, queryStr.price.$gte);
    this.range = [queryStr.price.$gte, queryStr.price.$lte];
    //console.log(this, "this----");
    // this.query = this.query.find({
    //   ...queryStr,
    //   price: {
    //     ...queryStr.price,
    //     $regex: regex,
    //   },
    // });
    return this;
  }
  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}
module.exports = ApiFeatures;
