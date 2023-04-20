const port = 8000;
const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const { arrayOfStores } = require("./data");
const app = express();
const arryOfUrl = [
  // 'Mobiles/nokia',
  // 'led-tv',
  // 'ac',
  // 'Smart-Watches/samsung',
  // 'Wireless-Earbuds/anker',
  // 'Bluetooth-Speakers',
  // 'chargingCables',
  // 'Laptops',
  // 'Tablets',
  // 'Mobiles',
  // 'Tablets',
  // 'Smart Watches',
  // 'Wireless Earbuds',
  // 'Mobiles Accessories',
  // 'Laptops',
  // 'tv-home-appliances',
  "Motorcycle",
];
const productsLinks = [];
const products = [];
const postProduct = async (product) => {
  console.log("product.lenght() :>> ", product);
  //  return
  await product.map((product, index) => {
    console.log("product :>> ", product.productUrl);
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
    async ({ url, routes, imgUrl, storeName, category, detailBoxClasses }) => {
      // console.log("productsLinks :>> ", url, imgUrl, category);
      await axios(url)
        .then(async (response) => {
          const html = response.data;
          const $ = cheerio.load(html);
          // const { proDetailBox, name, rating, stock, price } = detailBoxClasses;
          const productUrl = url;
          // console.log("$ :>> ", $("#product-summary", html));
          // return;
          $(".title.page-title", html)?.each(function () {
            // console.log(" :>> ");
            // $("#product-section", html)?.each(function () {
            // $(proDetailBox, html).each(function () {
            const name = $(".title.page-title").find("span").text();
            // const store = storeName;
            // const Availability = $(stock).text()?.trim();
            // const price = $(price)
            // .text()
            // .split("Rs ")[1]
            // ?.replace(".00", "")
            // .trim();

            // const brand = routes.split("/");
            // const rating = $(rating).text();
            console.log("products :>> ", name);

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
    arrayOfRoutes,
    imgTag,
    detailBoxClasses,
  }) => {
    arrayOfRoutes.map(async ({ category, routes }) => {
      console.log(
        "https://${storeName}/${routes} :>> ",
        `https://${storeName}/${routes}`
      );
      await axios(`https://${storeName}/${routes}`)
        .then(async (response) => {
          const html = response.data;
          const $ = cheerio.load(html);
          // console.log("object :>> ", cheerio.load(html));
          $(mainContainer, html).each(function () {
            const url = $(".product-img")?.attr("href");
            // const url = $(this)?.find("a")?.attr("href");
            // ?.find("a")
            const imgUrl = $(this).find(imgTag).attr("src"); // 4 ishoping
            productsLinks.push({
              url,
              routes,
              imgUrl,
              storeName,
              category,
              detailBoxClasses,
            });
          });

          // console.log("productsLinks in  :>> ", productsLinks);
          // return;
          await getProductsData(productsLinks);
        })
        .catch((err) => console.error(err));
    });
  }
);

app.listen(port, () => console.log("listening on port " + port));
