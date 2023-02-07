const port = 8000 ; 
const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

const app = express();
const arryOfUrl = [
    // 'Mobiles/apple',
    'led-tv',
    // 'ac',
    // 'Smart-Watches',
    // 'Wireless-Earbuds',
    // 'Bluetooth-Speakers',
    // 'Power-Banks',
    // 'Laptops',
    // 'Tablets'
]
const productsLinks = []
const products = []
const postProduct = async (product) => {
  console.log('product.lenght() :>> ', product.length);
 
  await  product.map((product, index)=>{
    console.log('product.name :>> ', product.name );
    console.log('index :>> ', index );
    
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
    productsLinks.map( async ({url,imgUrl,category})=>{
        // console.log('productsLinks :>> ',url);
       
        await axios(url)
        .then( async (response)=>{
            const html = response.data
            const $ = cheerio.load(html)
            $('#product-main', html).each(function() {
             const url = $(this).find('a').attr('href')
            //  const images = $('.product-image-main').find('amp-img').attr('src');
             const name = $('.product-title').find('h2').text();
              
             const brand = $('.breadcrumb a').eq(1).text();
             const ramRom = $('.ga-dataset.active').find('span').text();
             const Availability = $('.summary-price.text-black.bold.stock-status').text()?.trim();
             const price = $('.summary-price.text-black.price-size-lg').text().split('Rs.')[1]?.trim();
            //  const url = $('#product-summary').find('a').attr('href')
            //  console.log('price:>>' , price);
            //  console.log('brand:>>' , brand);
            //  console.log('ProductTitle :>>' , name);
            //  console.log('Availability :>> ', Availability);
            //  console.log('ramRom :>> ', ramRom);
            //  console.log('url :>> ', url);
            //  console.log('images :>> ', images);
              products.push({price,Availability,name ,description:name, brand ,url,imgUrl , category})
              
              postProduct(products);

            })
        // console.log('productsLinks in  :>> ', productsLinks);
        //  await getProductsData(productsLinks)
        }).catch(err => console.error(err));
        })
}
arryOfUrl.map( async (category)=>{
// console.log('`https://priceoye.pk` :>> ', `https://priceoye.pk/${url}`);
await axios(`https://priceoye.pk/${category}`)
.then( async (response)=>{
    const html = response.data
    const $ = cheerio.load(html)
    $('.productBox.b-productBox', html).each(function() {
     const url = $(this).find('a').attr('href')
     const imgUrl = $(this).find('amp-img').attr('src')
    //  console.log('url :>> ', url ,imgUrl);
      productsLinks.push({url,imgUrl,category})
    })
console.log('productsLinks in  :>> ', productsLinks.length);

 await getProductsData(productsLinks)
}).catch(err => console.error(err));
})
app.listen(port , ()=>console.log('listening on port '+port));