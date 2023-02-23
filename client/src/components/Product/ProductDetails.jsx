import React, { useEffect , useState } from 'react'
import {useSelector , useDispatch} from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {getProductDetails} from '../../actions/productAction';
import MetaData from '../layout/MetaData';
import Loader from "../layout/Loader/Loader";import Footer from '../layout/footer/Footer';
import Feature from '../layout/Feature/Feature.jsx';
import './ProductDetails.css'
function ProductDetails() {
   
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
    const navigate = useNavigate()
   const dispatch = useDispatch();
   const { id } = useParams();
   const [ storeLink , setStoreLink ] = useState('');
  useEffect(() => {
    if (error) {
      alert.error(error);
      // dispatch(clearErrors());
    }
    // if (storeLink)   navigate(storeLink);

   
    dispatch(getProductDetails(id));
  }, [dispatch, id,error, alert,]);

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };
  return (
    
    <>
    {loading ? (
      <Loader />
    ) : (
      <>
        <MetaData title={`${product.name} -- ECOMMERCE`} />
        <div className="ProductDetails">
          <div>
            <div className='CarouselImage'>
            <img
            className="CarouselImage"
            src={product.imgUrl}
            alt={` Slide`}
          />
            
            </div>
          </div> 

          <div>
            <div className="detailsBlock-1">
              <h2>{product.name}</h2>
              <p>Product # {product._id}</p>
            </div>
            <div className="detailsBlock-2">
             
              <span className="detailsBlock-2-span ">
                {" "}<span className='h5'>
                Brand :
                </span>
                {" "}<span className='h6 text-muted'>
                {product.brand}
                </span>
              </span>
            </div>
            <div className="detailsBlock-2">
             
              <span className="detailsBlock-2-span ">
                {" "}<span className='h5'>
                Store :
                </span>
                {" "}<span className='h6 text-muted'>
                {product?.store}
                </span>
              </span>
            </div>
            <div className="detailsBlock-3">
              <h1>{`Rs:${product.price}`}</h1>
              <div className="detailsBlock-3-1">
               
 
              <p>
                Status:
                <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                  {product.Stock < 1 ? " OutOfStock" : " InStock"}
                </b>
              </p>
            </div>
            <div className="detailsBlock-4">
              Description : <span className='h6'>{product.description}</span>
            </div>
          </div>
        </div>
        </div>
        <div className='container-fluid my-3 mb-md-5'>
        <div className=' row mx-0 px-0 mb-4 bg-danger rounded-pill'>
         <div className='col-md-11  ms-4  py-3  ps-3 text-white '>
         <h5 className='' > Compare {product.name } {' '}Prices</h5>
         </div>
       
        </div>
        <div className='row mx-0 px-0 py-2 ms-4 '>
         <div className='col-md-3'>
         <h5 className=' ' >Store  </h5>
         </div>
         <div className='col-md-3'>
         <h5 className=' ' >Condition  </h5>
         </div>
         <div className='col-md-3'>
         <h5 className=' ' >Price </h5>
         </div>
         <div className='col-md-3'>
         <h5 className=' ' > </h5>
         </div>
       
        </div>
        <div className='row mx-0 px-0 ms-4 bg-light py-2 pt-3 rounded-3 ps-4  '>
         <div className='col-md-3'>
         <h6 className=' ' >{product.store}  </h6>
         </div>
         <div className='col-md-3'>
         <h6 className=' ' >New  </h6>
         </div>
         <div className='col-md-3'>
         <h6 className=' ' >Rs : {product.price} </h6>
         </div>
         <div className='col-md-3'>
            <button type="" className='btn btn-outline-success rounded-pill' onClick={()=> handleLinkClick(product.productUrl)}>Visit Store</button>
         </div>
       
        </div>
      </div>
        
      </>
    )}
    <Feature/>    
<Footer/>
  </>
   
  );
};

export default ProductDetails
