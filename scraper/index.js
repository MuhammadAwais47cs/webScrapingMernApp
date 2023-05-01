const port = 8000;
const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const { arrayOfStores } = require("./data");
const app = express();
const productsLinks = [];
const products = [];
const postProduct = async (product) => {
  return;
  await product.map((product, index) => {
    console.log("product :>> ", product);
    // console.log('index :>> ', index );
    // return;
    axios
      .post("http://localhost:4000/api/v1/products/new", { product })
      .then((error, response, body) => {
        if (response) console.log("response.message =>>", response.message);
      });
  });
};
//   postProduct( {
//     name: 'redme note9',
//     price: '4000',
//     description: 'abc def 123456',
//     category: 'mobile',
//     brand: 'Apple',
//     images: { public_id: 'oo', url: 'http://samle' }
//   });

const getProductsData = async (productsLinks) => {
  productsLinks.map(
    async ({
      brand,
      url,
      name,
      imgUrl,
      DeliveryCharges,
      store,
      category,
      stock,
      detailBoxClasses,
    }) => {
      // console.log("productsLinks :>> ", url, imgUrl, store, category);
      // return;
      await axios(url)
        .then(async (response) => {
          const html = response.data;
          // console.log("$ :>> ", html);
          const $ = cheerio.load(html);
          // const { proDetailBox, name, rating, stock, price } = detailBoxClasses;
          const productUrl = url;
          // return;
          // const store = storeName;
          // const name = $(".product-title", html).find("h2").text();
          if (store === "homeshopping.pk") {
            $("#prodcut-desc", html).each(function () {
              // const name = $(".col-md-7.col-sm-12.col-xs-12.pad0.mgrmin10")
              //   .find("h1")
              //   .find("span")
              //   .text();
              const image = $(this).find(".gallery").find("img").attr("src");
              // const description = name; // 4 ishoping
              // const store = "homeshopping.pk";
              // const Availability = $(".in_stock").text()?.trim();
              const price = $(".ActualPrice")
                .text()
                .split("Rs ")[1]
                ?.replace(".00", "")
                .trim();

              // const category = "Mobiles";
              // const rating = $(".rating-points").text();
              // const ramRom = $(".ga-dataset.active").find("span").text();

              products.push({
                price,

                name,
                description: name,
                stock: "Available",
                brand,
                productUrl,
                DeliveryCharges,
                imgUrl: image,
                store,
                category,
              });
              // console.log("products :>> ", products);
              // return;
              postProduct(products);
            });
          } else if (store === "shophive.com") {
            // console.log("object :>> ");
            $(".column.main", html).each(function () {
              const price = $(".price-wrapper")
                .find("span")
                .text()
                .split("Rs ")[1]
                ?.replace(".00", "")
                .trim();
              console.log("object :>> ", price);
              // return;

              // const category = "Mobiles";
              // const rating = $(".rating-points").text();
              // const ramRom = $(".ga-dataset.active").find("span").text();

              products.push({
                price,
                // Availability,
                name,
                description: name,
                stock: "Available",
                brand,
                productUrl,
                DeliveryCharges,
                imgUrl,
                store,
                category,
              });
              console.log("products :>> ", products);
              // return;
              postProduct(products);
            });
          }
        })
        .catch((err) => console.error(err));
    }
  );
};
arrayOfStores.map(
  async ({
    storeName,
    mainContainer,
    DeliveryCharges,
    arrayOfRoutes,
    imgTag,
    detailBoxClasses,
  }) => {
    arrayOfRoutes.map(async ({ category, routes, brand }) => {
      console.log(
        "https://${storeName}/${routes} :>> ",
        `https://${storeName}/${routes}`
      );
      // return;
      await axios(`https://${storeName}/${routes}`)
        .then(async (response) => {
          const html = response.data;
          const $ = cheerio.load(html);
          // console.log("object :>> ", html);
          if (storeName === "qmart.pk") {
            $(".product-layout", html).each(function () {
              const productUrl = $(this).find(".product-img").attr("href");
              const name = $(this).find(".name").find("a").text(); //.split("GB")[0];
              const price = $(this)
                .find(".price-normal")
                .text()
                .split("Rs.")[1];
              const imgUrl = $(this).find(imgTag).attr("src");
              const stock = $(this).find(".btn-cart").find("span").text(); //.split("rt")[1];
              stock === "Add to Cart" &&
                price &&
                productsLinks.push({
                  name,
                  description: name,
                  category,
                  stock: "Available",
                  productUrl,
                  store: storeName,
                  brand,
                  imgUrl,
                  price,
                  DeliveryCharges,
                  // routes,
                  // detailBoxClasses,
                });
            });
            const key = "name";
            const products = [
              ...new Map(
                productsLinks?.map((item) => [item[key], item])
              ).values(),
            ];
            console.log("productsLinks in  :>> ", products);
            // console.log("productsLinks in  :>> ", productsLinks);
            // return;
            postProduct(products);

            // await getProductsData(productsLinks);
          } else if (storeName === "priceoye.pk") {
            $(".productBox.b-productBox", html).each(function () {
              const productUrl = $(this).find("a").attr("href");
              const name = $(this)
                .find(".p-title.bold.h5")
                .text()
                .split("\n")[1]
                .trim();
              const ribbon = $(this).find("mark").text();
              const price = $(this)
                .find(".price-box.p1")
                .text()
                .split("Rs.")[1]
                .trim();
              const imgUrl = $(this).find("amp-img").attr("src");
              const stock = $(".btn-cart").find("span").text().split("rt")[1];
              ribbon === "" &&
                productsLinks.push({
                  name,
                  description: name,
                  category,
                  // ribbon,
                  stock: "Available",
                  productUrl,
                  store: storeName,
                  brand:
                    routes.split("/")[1].charAt(0).toUpperCase() +
                    routes.split("/")[1].slice(1),
                  imgUrl,
                  price,
                  DeliveryCharges,
                  // routes,
                  // detailBoxClasses,
                });
            });
            const key = "url";
            const products = [
              ...new Map(
                productsLinks?.map((item) => [item[key], item])
              ).values(),
            ];
            // console.log("productsLinks in  :>> ", products);
            console.log("productsLinks in  :>> ", productsLinks);
            postProduct(productsLinks);

            return;
            await getProductsData(products);
          } else if (storeName === "mobile-phone.pk") {
            $(".home_page_blocks", html).each(function () {
              // console.log("object :>> ");
              // return;
              const productUrl = $(this).find("a").attr("href");
              const name = $(this).find(".block_link").text();

              const price = $(this).find("span").text().split("Rs.")[1];
              const imgUrl = $(this).find("img").attr("src");
              // const stock = $(".btn-cart").find("span").text().split("rt")[1];
              // ribbon === "" &&
              productsLinks.push({
                name,
                description: name,
                category,
                // ribbon,
                stock: "Available",
                productUrl: "http://www.mobile-phone.pk" + productUrl,
                store: storeName,
                brand,
                imgUrl,
                price,
                DeliveryCharges,
                // routes,
                // detailBoxClasses,
              });
            });
            const key = "name";
            const products = [
              ...new Map(
                productsLinks?.map((item) => [item[key], item])
              ).values(),
            ];
            // console.log("productsLinks in  :>> ", products);
            // console.log("productsLinks in  :>> ", productsLinks);
            return;
            postProduct(products);

            await getProductsData(products);
          } else if (storeName === "homeshopping.pk") {
            $(".innerp.product-box", html).each(function () {
              // console.log("object :>> ");
              // return;
              const productUrl = $(this).find("a").attr("href");
              const name = $(this).find(".ProductDetails").find("a").text();

              // .find(".col-md-12.col-xs-12.p0")
              // .find("div")
              const price = $(this)
                .find(".price")
                .find("div")
                .text()
                .split("Rs.")[1];
              const imgUrl = $(this).find("img").attr("src");
              // const stock = $(".btn-cart").find("span").text().split("rt")[1];
              // ribbon === "" &&
              productsLinks.push({
                name,
                description: name,
                category,
                // ribbon,
                url: productUrl,
                store: storeName,
                brand,
                imgUrl,
                price,
                DeliveryCharges,
                // routes,
                // detailBoxClasses,
              });
            });
            const key = "name";
            const products = [
              ...new Map(
                productsLinks?.map((item) => [item[key], item])
              ).values(),
            ];
            // console.log("productsLinks in  :>> ", products);
            // console.log("productsLinks in  :>> ", productsLinks);
            await getProductsData(productsLinks);
          } else if (storeName === "shophive.com") {
            $(".product-item-info", html).each(function () {
              const productUrl = $(this).find("a").attr("href");
              const name = $(this).find("h2").find("a").text();
              const imgUrl = $(this).find("img").attr("src");
              // console.log("object :>> ", { name, productUrl });
              // return;

              // .find(".col-md-12.col-xs-12.p0")
              // .find("div")
              // .find("div")
              const price = $(this)
                .find(".price-wrapper")
                .find("span")
                .text()
                .split("Rs.")[1];
              // const stock = $(".btn-cart").find("span").text().split("rt")[1];
              // ribbon === "" &&
              productsLinks.push({
                name,
                description: name,
                category,
                // ribbon,
                url: productUrl,
                store: storeName,
                brand,
                imgUrl,
                price,
                DeliveryCharges,
                // routes,
                // detailBoxClasses,
              });
            });
            const key = "name";
            const products = [
              ...new Map(
                productsLinks?.map((item) => [item[key], item])
              ).values(),
            ];
            // console.log("productsLinks in  :>> ", products);
            // console.log("productsLinks in  :>> ", productsLinks);
            await getProductsData(products);
          }
        })
        .catch((err) => console.error(err));
    });
  }
);

app.listen(port, () => console.log("listening on port " + port));
