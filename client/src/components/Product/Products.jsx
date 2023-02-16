import React, { useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux';
import "./Products.css";
import { Link, useParams } from 'react-router-dom';
import {getProductDetails , getProduct} from '../../actions/productAction';
import Product from '../Home/Product';
import { useLocation } from "react-router-dom";
import MetaData from '../layout/MetaData';
function ProductDetails() {
   const params = useParams();
   const { keyword} = params
   const dispatch = useDispatch();
   const { loading, error, products, productsCount } = useSelector(state=>state.products)

  //  const keyword
   useEffect(()=>{
     console.log('objec :>> ', error);
     if(error) return alert.error(error)
     dispatch(getProduct(keyword))
   } , [dispatch,keyword, error]);
  return (
    <>
    <div className='ProductDetails '>
    <MetaData title="PRODUCTS -- ECOMMERCE" />
    <h2 className="productsHeading">Products</h2>

      <div className="products">
      {products &&
        products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
    </div>
    </div>
    </>
  )
}

export default ProductDetails
