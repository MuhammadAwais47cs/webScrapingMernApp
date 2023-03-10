import React, { useState, useEffect } from "react";
import Loader from "../layout/Loader/Loader";
import Product from "./Product.jsx";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import MetaData from "../layout/MetaData.js";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productAction.js";
import banner1 from "./Asset/banner1.png";
import banner2 from "./Asset/banner2.png";
import banner3 from "./Asset/banner3.png";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log("objec :>> ", error);
    if (error) return alert.error(error);

    dispatch(getProduct());
  }, [dispatch, error]);

  const catgory = [
    {
      name: "Mobiles",
      category: "Mobiles",
      url: "https://static.priceoye.pk/images/home/mobiles.svg",
    },
    {
      name: "Smart Watches",
      category: "Smart-Watches",
      url: "https://static.priceoye.pk/images/home/smart-watches.svg",
    },
    {
      name: "Wireless Earbuds",
      category: "Wireless-Earbuds",
      url: "https://static.priceoye.pk/images/home/wireless-earbuds.svg",
    },
    {
      name: "Bluetooth Speakers",
      category: "Bluetooth-Speakers",
      url: "https://static.priceoye.pk/images/home/bluetooth-speakers.svg",
    },
    {
      name: "Power Banks",
      category: "Power-Banks",
      url: "https://static.priceoye.pk/images/home/power-banks.svg",
    },
    {
      name: "Laptops",
      category: "Laptops",
      url: "https://static.priceoye.pk/images/home/laptops.svg",
      height: "90px",
    },
    {
      name: "Tablets",
      category: "Tablets",
      url: "https://static.priceoye.pk/images/home/tablets.svg",
      height: "90px",
    },
    //  {  name :'TV',                 category:'TV', url:'https://static.priceoye.pk/images/home/tablets.svg'}
  ];

  const product = [
    {
      name: "Product",
      images: [
        {
          url: " https://images.priceoye.pk/apple-iphone-14-pro-max-pakistan-priceoye-zhf5g-500x500.webp",
        },
      ],
      price: "300",
      _id: "01",
    },
  ];
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Ecommerce"} />
          <div className="banner">
            <div id="carouselExample" className="carousel slide pointer-event">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {/*  <img src='https://images.priceoye.pk/pakistan-priceoye-slider-hwg39.jpg' width="1600px"/>  */}
                  <img src={banner1} />
                </div>

                <div className="carousel-item">
                  <img src={banner2} />
                </div>
                <div className="carousel-item">
                  <img src={banner3} />
                </div>
              </div>
              <button
                className="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bg-dark"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon bg-dark"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="categoryBar d-flex flex-row justify-content-center my-3">
            {catgory.map(({ name, category, url, height }) => (
              <div
                className="category-link d-flex flex-column  mx-2"
                key={category}
                onClick={() => navigate(`/products`, { state: { category } })}
              >
                <div className="categoryImg my-4 mx-auto">
                  <img src={url} height={height} alt="" />
                </div>

                <span className="text-center">{name}</span>
              </div>
            ))}
          </div>
          <a href="#container">
            <h2 className="homeHeading ">Featured Products</h2>
          </a>
          <div id="container">
            <div className="container">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
