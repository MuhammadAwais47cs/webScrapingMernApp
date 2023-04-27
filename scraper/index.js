const port = 8000;
const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const { arrayOfStores } = require("./data");
const app = express();
const productsLinks = [];
const products = [];
const postProduct = async (product) => {
  console.log("product.lenght() :>> ", product);
  // return;
  await product.map((product, index) => {
    // console.log("product :>> ", product);
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
      url,
      routes,
      price,
      imgUrl,
      storeName,
      category,
      stock,
      detailBoxClasses,
    }) => {
      // console.log("productsLinks :>> ", url, imgUrl, category);
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
          $("#product-main.row.card", html).each(function () {
            console.log(" :>> ");
            return;
            // $("#product-section", html)?.each(function () {
            // $(proDetailBox, html).each(function () {
            // const Availability = $("#button-cart").text()?.trim();
            // const price = $(".price-group")
            //   .find("div")
            //   .text()
            //   .split("Rs ")[1]
            //   ?.replace(".00", "")
            //   .trim();

            const brand = $(".brand-image.product-manufacturer")
              .find("a")
              .find("span")
              .text();
            // const rating = $(rating).text();
            console.log("products :>> ", name, price, Availability, brand);

            return;

            products.push({
              price,
              Availability,
              name,
              description: name,
              brand,
              productUrl,
              imgUrl,
              store,
              category,
              rating,
            });

            // products.push({price,Availability,name ,description, brand ,productUrl,imgUrl ,store, category , rating})
            console.log("products :>> ", products);
            return;
            postProduct(products);
          });
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
      await axios(`http://${storeName}/${routes}`)
        .then(async (response) => {
          const html = response.data;
          const $ = cheerio.load(html);
          // console.log("object :>> ", html);
          // return;
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
            return;
            await getProductsData(productsLinks);
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
                  // description: name,
                  category,
                  // ribbon,
                  stock: "Available",
                  url: productUrl,
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
            console.log("productsLinks in  :>> ", products);
            // console.log("productsLinks in  :>> ", productsLinks);
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
            postProduct(products);
            return;

            await getProductsData(products);
          }
        })
        .catch((err) => console.error(err));
    });
  }
);

app.listen(port, () => console.log("listening on port " + port));
