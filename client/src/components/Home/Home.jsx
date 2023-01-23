import React from 'react'
// import {CgMouse} from 'react-icons/all';
import  Product  from "./Product.jsx";
import './Home.css';
import MetaData from '../layout/MetaData.js';
function Home() {
const product = {
    name : 'Product',   
    images : [{url: 'https://elito-light-next.netlify.app/images/slider/1.jpg'}],
    price : '300',
    _id : '01'
}
    return (
        <>
        <MetaData title={'Ecommerce'}/>
        <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll 
            {/*<CgMouse />*/}
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
       
            <Product  product={product} />
            <Product  product={product} />
            <Product  product={product} />
            <Product  product={product} />
            <Product  product={product} />
            <Product  product={product} />
            <Product  product={product} />
            <Product  product={product} />
       
      </div>
        </>
    )
}

export default Home 
