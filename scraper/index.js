const port = 8000 ; 
const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

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
'Motorcycle'
]
const productsLinks = []
const products = []
const postProduct = async (product) => {
  console.log('product.lenght() :>> ', product);
//  return
  await  product.map((product, index)=>{
    // console.log('product :>> ', product.productUrl );
    // console.log('index :>> ', index );
    // return
     axios.post(
      "http://localhost:4000/api/v1/products/new",
      { product },
       
    ).then((error, response, body) => {
      if (response) console.log('response.message =>>', response.message);
    });
  })
   
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
    productsLinks.map( async ({url,imgUrl})=>{
        // console.log('productsLinks :>> ',url);
      //  return
        await axios(url)
        .then( async (response)=>{
            const html = response.data
            const $ = cheerio.load(html)
            const productUrl = url
            // console.log('$ :>> ', html);
            // return
            // $('#product-main', html).each(function() {
            $('.column.main', html).each(function() {
            //  const images = $('.product-image-main').find('amp-img').attr('src');
            //  const name = 'IPHONE 14 PRO MAX' // 4 ishoping
            const name = $('.page-title').find('span').text();
             const description = $('.product-name').find('h1').text(); // 4 ishoping
             const price = $('.price').text().split('Rs ')[1]?.replace('.00', '').trim();
            
             const Availability = $('.stock.available').text()?.trim();
             const store = 'Shophive.com';
             const brand = $('.brand-link ').attr('title');
             const category = 'Laptops'
            //  const brand = $('.brand a').find('span').text();
            //  const name = $('.product-title').find('h3').text();
             const rating = $('.rating-points').text();
             // const store = 'PriceOye'
             //  const brand = $('.breadcrumb a').eq(1).text();
             const ramRom = $('.ga-dataset.active').find('span').text();
             //  const Availability = $('.summary-price.text-black.bold.stock-status').text()?.trim();
             //  const price = $('.summary-price.text-black.price-size-lg').text().split('Rs.')[1]?.trim();
             //  const category = 'Mobiles-Accessories'
            //  const url = $('#product-summary').find('a').attr('href')
            //  console.log('price:>>' , price);
            //  console.log('brand:>>' , brand);
            //  console.log('ProductTitle :>>' , name);
            //  console.log('Availability :>> ', Availability);
            //  console.log('ramRom :>> ', ramRom);
            //  console.log('url :>> ', url);
            products.push({price,Availability,name ,description:name, brand ,productUrl,imgUrl ,store, category , rating})
            // products.push({price,Availability,name ,description, brand ,productUrl,imgUrl ,store, category , rating})
            console.log('products :>> ', products);
              
              postProduct(products);

            })
         
        }).catch(err => console.error(err));
        })
}
arryOfUrl.map( async (category)=>{
// console.log('`https://priceoye.pk` :>> ', `https://priceoye.pk/${url}`);
// await axios(`https://priceoye.pk/${category}`)
await axios(`https://www.shophive.com/laptops-computers/laptops/lenovo`)
// await axios(`https://www.ishopping.pk/electronics/mobile-phones-tablet-pc/mobile-phones-prices-in-pakistan/apple-iphone/iphone-14-pro-max.html`)
.then( async (response)=>{
    const html = response.data
    const $ = cheerio.load(html)
    // console.log('html :>> ', html);
    // console.log('cheerio.load(html) :>> ',   $('.inner-grid',html));
    // return
    // $('.productBox.b-productBox', html).each(function() {
    $('.product-show', html).each(function() {
     const url = $(this).find('a').attr('href')
    //  const imgUrl = $(this).find('amp-img').attr('src')
     const imgUrl = $(this).find('img').attr('src')  // 4 ishoping 
      productsLinks.push({url,imgUrl,category})
    })
    
    // console.log('productsLinks in  :>> ', productsLinks);
 await getProductsData(productsLinks) 
}).catch(err => console.error(err));
})
app.listen(port , ()=>console.log('listening on port '+port));