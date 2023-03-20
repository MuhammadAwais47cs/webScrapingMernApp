import React, { useState, useEffect } from "react";
import Loader from "../layout/Loader/Loader";
import Product from "./Product.jsx";
import Slider from "./Slider.jsx";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import MetaData from "../layout/MetaData.js";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productAction.js";
import banner1 from "./Asset/banner1.png";
import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaTwitterSquare,
  FaFacebookMessenger,
  FaRegEnvelope,
  FaPhoneSquare,
  FaWhatsapp,
  FaLocationArrow,
  FaArrowRight,
} from "react-icons/fa";
import banner2 from "./Asset/banner2.png";
import banner3 from "./Asset/banner3.png";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, products, productsCount } = useSelector(
    (state) => state.products
  );
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

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
    //  {  name :'TV',  category:'TV', url:'https://static.priceoye.pk/images/home/tablets.svg'}
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
          <div className="container banner">
            <div className="row">
              <div
                id="carouselExample"
                className=" col-md-9 carousel slide pointer-event"
              >
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
                <div class="d-flex justify-content-between align-items-center">
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span class="iconify" data-icon="bi:arrow-down"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span class="iconify" data-icon="bi:arrow-up"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div
                id="carouselExample"
                className=" col-md-3 carousel slide pointer-event"
              >
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
              </div>
            </div>
          </div>

          <div id="container">
            <div className="container d-flex flex-row justify-content-start">
              <div className="col-md-12 d-flex flex-row">
                <h2 className=" ">Shop By Category</h2>
                <span className=" pb-2 mb-4 text-white border-bottom border-dark border-2 text-truncate">
                  apple-iphone-14-pro-max-pakistan-priceoye-zhf5g-500x500.webp
                </span>
              </div>
            </div>
            <div className="container">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </div>
          <div id="container">
            <div className="container d-flex flex-row justify-content-start">
              <div className="col-md-12 d-flex flex-row">
                <h2 className=" ">Only With Us</h2>
                <span className=" pb-2 mb-4 text-white border-bottom border-dark border-2 text-truncate">
                  apple-iphone-14-pro-max-pakistan-priceoye-zhf5g-500x500.webp
                </span>
              </div>
            </div>
            <div className="container">
              <div class="shadow-lg p-4 rounded-3  mb-3">
                <div class="row g-0">
                  <div class="col-md-3 d-flex flex-row justify-content-center align-items-center">
                    <FaInstagram size={36} className="text-danger" />
                  </div>
                  <div class="col-md-7">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text text-danger">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 d-flex flex-row justify-content-end align-items-center">
                    <FaArrowRight size={36} className="text-danger" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="container">
            <div className="container d-flex flex-row justify-content-start">
              <div className="col-md-12 d-flex flex-row">
                <h2 className=" ">Latest</h2>
                <span className=" pb-2 mb-4 text-white border-bottom border-dark border-2 text-truncate">
                  apple-iphone-14-pro-max-pakistan-priceoye-zhf5g-500x500.webp
                </span>
              </div>
            </div>
            <div className="container">
              <div class="shadow-lg p-4 rounded-3  mb-3 w-75">
                <div class="row g-0">
                  <div class="col-md-3 d-flex flex-row justify-content-center align-items-center">
                    <FaInstagram size={36} className="text-danger" />
                  </div>
                  <div class="col-md-7">
                    <div class="card-body">
                      <p class="card-text text-danger">online since 7 min</p>
                      <h5 class="card-title">30%</h5>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 d-flex flex-row justify-content-end align-items-center py">
                    <FaArrowRight size={36} className="text-danger" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="container">
            <div className="container d-flex flex-row justify-content-start">
              <div className="col-md-12 d-flex flex-row">
                <h2 className=" ">Shop By Brand</h2>
                <span className=" pb-2 mb-4 text-white border-bottom border-dark border-2 text-truncate">
                  apple-iphone-14-pro-max-pakistan-priceoye-zhf5g-500x500.webp
                </span>
              </div>
            </div>
            <div className="container d-flex flex-row justify-content-evenly">
              {products &&
                products.map((product) => (
                  <>
                    <div class=" col-md-4 px-2  ">
                      <div class="card bg-white border-1 mb-3 py-2  shadow">
                        <div class=" row g-0">
                          <div class="col-md-4 d-flex  justify-content-center align-items-center">
                            <FaInstagram size={32} className="text-danger" />
                          </div>
                          <div class="col-md-8 card-body">
                            <p class="card-text">
                              <small class="text-muted">
                                Last updated 3 mins ago
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
            <div className="  d-flex flex-row justify-content-around">
              {/*
          {products &&
            products.map((product) => (
              <Product key={product._id} product={product} />
              ))}
            */}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
