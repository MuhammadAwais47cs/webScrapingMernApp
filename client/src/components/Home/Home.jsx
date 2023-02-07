import React, { useEffect } from 'react'
// import {CgMouse} from 'react-icons/all';
import Loader from "../layout/Loader/Loader";
import  Product  from "./Product.jsx";
import './Home.css';
import MetaData from '../layout/MetaData.js';
import { useSelector,useDispatch} from 'react-redux';
import { getProduct } from '../../actions/productAction.js';
import {useAlert} from 'react-alert';
import Header from '../layout/header/header';
import Footer from '../layout/footer/Footer';
import Feature from '../layout/Feature/Feature.jsx';
function Home () {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(state=>state.products)
  useEffect(()=>{
    console.log('objec :>> ', error);
    if(error) return alert.error(error)
    dispatch(getProduct())
  } , [dispatch,error]);

  const catgory = [
   { cat:'Mobiles',url:'https://static.priceoye.pk/images/home/mobiles.svg'},
   { cat:'Smart Watches',url:'https://static.priceoye.pk/images/home/smart-watches.svg' },
  { cat:' Wireless Earbuds', url:'https://static.priceoye.pk/images/home/wireless-earbuds.svg'},
  {cat: ' Bluetooth Speakers',url:'https://static.priceoye.pk/images/home/bluetooth-speakers.svg'},
  {cat: ' Power Banks', url:'https://static.priceoye.pk/images/home/power-banks.svg'},
 {cat: '  Laptops',url:'https://static.priceoye.pk/images/home/laptops.svg'},
  {cat:  'Tablets', url:'https://static.priceoye.pk/images/home/tablets.svg'}
  ]
  
const product = [{
    name : 'Product',   
    images : [{url: ' https://images.priceoye.pk/apple-iphone-14-pro-max-pakistan-priceoye-zhf5g-500x500.webp'}],
    price : '300',
    _id : '01'
}]
    return (
      <>
      {loading? (<Loader/>) :
    (
      <>
      <Header/>
      <MetaData title={'Ecommerce'}/>
      <div className="banner">
      {/*
    
      <p>Welcome to Ecommerce</p>
      <h1>FIND AMAZING PRODUCTS BELOW</h1>
    */}
      <>
      <nav className="navbar navbar-expand-sm my-3 mt-5 pt-2">
      <div className="container-fluid">
          <div className="navbar-nav mx-auto">
          {catgory.map(({cat,url})=>(
           
            <>
          <div className='d-flex flex-column justify-content-center align-items-center px-1'>
          <img src={url} width='50px' height='50px' alt=""/ >
          <a className="nav-link px-3 active"  aria-current="page" key={cat} href="/">{cat}</a>
          </div>
          </>

          ))}
            
          </div>
      </div>
    </nav>
      <div id="carouselExample" className="carousel slide pointer-event">
      <div className="carousel-inner">
        <div className="carousel-item active">
 
          
          <img src='https://images.priceoye.pk/pakistan-priceoye-slider-hwg39.jpg' width="1600px"/>  
        </div>
        <div className="carousel-item">
        <img src='https://images.priceoye.pk/pakistan-priceoye-slider-1sh6x.png' width="1600px"/>  

        </div>
        <div className="carousel-item">
        <img src='https://images.priceoye.pk/pakistan-priceoye-slider-hwg39.jpg' width="1600px"/>  

        </div>
      </div>
      <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </>
    

      <a href="#container">
        <button>
          Scroll 
          {/*<CgMouse />*/}
        </button>
      </a>
    </div>
    <div id='container'>
      
    <h2 className="homeHeading ">Featured Products</h2> 
    <div className="container"  >
    
    { products && products.map(product =>(
        <Product  key={product._id}  product={product} />
      ))
     } 
     
    </div>
    </div>
<Feature/>    
<Footer/>
      </>
    )}
        
        </>
      
     )
    
}

export default Home 
