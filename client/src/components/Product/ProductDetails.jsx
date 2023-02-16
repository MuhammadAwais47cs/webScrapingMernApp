import React, { useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {getProductDetails} from '../../actions/productAction';
import MetaData from '../layout/MetaData';
import Loader from "../layout/Loader/Loader";

function ProductDetails() {
   
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

   const dispatch = useDispatch();
   const { id } = useParams();
   
  useEffect(() => {
    if (error) {
      alert.error(error);
      // dispatch(clearErrors());
    }

   
    alert(id)
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert,]);
  return (
    
    <>
    {loading ? (
      <Loader />
    ) : (
      <>
        <MetaData title={`${product.name} -- ECOMMERCE`} />
        <div className="ProductDetails">
          <div>
            <div>
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
             
              <span className="detailsBlock-2-span">
                {" "}
                ({product.numOfReviews} Reviews)
              </span>
            </div>
            <div className="detailsBlock-3">
              <h1>{`Rs:${product.price}`}</h1>
              <div className="detailsBlock-3-1">
                <div className="detailsBlock-3-1-1">
                
               
              </div>

              <p>
                Status:
                <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                  {product.Stock < 1 ? "OutOfStock" : "InStock"}
                </b>
              </p>
            </div>

            <div className="detailsBlock-4">
              Description : <p>{product.description}</p>
            </div>

        
          </div>
        </div>

        <h3 className="reviewsHeading">REVIEWS</h3>

         
</div>
        
      </>
    )}
  </>
   
  );
};

export default ProductDetails
