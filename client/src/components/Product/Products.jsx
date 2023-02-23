import React, { useEffect, useState } from 'react'
import {useSelector , useDispatch} from 'react-redux';
import "./Products.css";
import { Link, useParams } from 'react-router-dom';
import {getProductDetails , getProduct} from '../../actions/productAction';
import Pagination from "react-js-pagination";
import Product from '../Home/Product';
import { useLocation } from "react-router-dom";
import MetaData from '../layout/MetaData';
function ProductDetails() {
   const params = useParams();
   const { keyword} = params
   const dispatch = useDispatch();
   const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState([1,500000]);
   const categories = [
    'Mobiles',
    'Tablets',
    'Smart Watches',
    'Wireless Earbuds',
    'Mobiles Accessories',
    'Laptops',
    'TV & Home Appliances',
    'Motorcycle'
   ]
   const Brands = ["Apple","Samsung","Realme", "Infinix", "Oppo", "Xiaomi", "Vivo", "Tecno",  "Nokia"];

   const { loading, error, products,resultPerPage, productsCount } = useSelector(state=>state.products)
   console.log(' useSelector(state=>state.products) :>> ',  useSelector(state=>state.products));

  //  const keyword
  const setCurrentPageNo = (e)=> {
    // console.log('e :>> ', e);
    setCurrentPage(e)
  }
  const priceHandler = (e,newPrice)=> {
    console.log('newPrice :>> ', newPrice);
    setPrice(newPrice)
  }
   useEffect(()=>{
     console.log('objec :>> ', error);
     if(error) return alert.error(error)
    dispatch(getProduct(keyword, currentPage, price, category ,brand));
   } , [dispatch,keyword,currentPage,price,category, error,brand]);
  return (
    <>
    <div className=''>
    <MetaData title="PRODUCTS -- ECOMMERCE" />
    <h2 className="productsHeading">Products</h2>

      <div className="products ms-3 ">
      {products &&
        products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
    </div>
    <div className='filterBox '>
  {/*  <label for="customRange2" class="form-label">Price</label>
    <input type="range" class="form-range" min={0} max={500000} value={price} onChange={priceHandler} id="customRange2"/>
        */} 
        <div className='bg-light rounded-3 ps-3 py-2 shadow-sm'>
          
        <p className='text-danger'>Categories</p>
        
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                  </li>
                  ))}
                  </ul>
                  </div>
        <div className=' mt-4 bg-light rounded-3 ps-3 py-2 shadow-sm'>

                  <p  className='text-danger'>Shop By Brand</p>
                  
            <ul className="categoryBox">
              {Brands.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setBrand(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
    </div>
    </div>
   
  {console.log('products.lenght :>> ', products ,products > 0)}
    {resultPerPage < productsCount && products.lenght > 0  && (
     <>
     <div className="paginationBox">
     <Pagination
     
       activePage={currentPage}
       itemsCountPerPage={resultPerPage}
       totalItemsCount={productsCount}
       onChange={setCurrentPageNo}
       nextPageText="Next"
       prevPageText="Prev"
       firstPageText="1st"
       lastPageText="Last"
       itemClass="page-item"
       linkClass="page-link"
       activeClass="pageItemActive"
       activeLinkClass="pageLinkActive"
     />
   </div>
     </>
    )}
    </div>
    </>
  )
}

export default ProductDetails
