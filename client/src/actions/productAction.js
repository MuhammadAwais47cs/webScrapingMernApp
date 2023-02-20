import axios from 'axios';
import {
     ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAIL,
     PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL,
     CLEAR_ERROR 
    } from "../constant/productConstant";

export const getProduct =
(keyword = "", currentPage = 1, price = [0, 500000], category, ratings = 0) =>
 async (dispatch) => {
    try {
        dispatch({type: ALL_PRODUCT_REQUEST});
      let link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}`;
    //   let link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
    console.log('category :>> ', category);
      if (category) {
        link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${category}`;
      }

        const {data} = await axios.get(link);
       
       console.log('data :>> ', data);
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type : ALL_PRODUCT_FAIL,
            payload : error.response.data.message,
        })
    }
}
export const getProductDetails = (id) => async (dispatch) => {
    try {
        console.log('id :>> ', id);
        dispatch({type: PRODUCT_DETAILS_REQUEST});
        const {data} = await axios.get(`http://localhost:4000/api/v1/product/${id}`)
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
        });
    } catch (error) {
        dispatch({
            type : PRODUCT_DETAILS_FAIL,
            payload : error.response.data.message,
        })
    }
}
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERROR,
    })
}