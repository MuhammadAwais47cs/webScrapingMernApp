import React from "react";
import Header from "../layout/header/header";
import cat1 from "../Images/cat1.jpg";
import cat2 from "../Images/cat2.jpg";
import cat3 from "../Images/cat3.jpg";
import p1 from "../Images/product1 (1).png";
import p2 from "../Images/product2 (1).png";
import p6 from "../Images/product6.png";
import p3 from "../Images/product3.png";
import p4 from "../Images/product4.png";
import p5 from "../Images/product5.png";
import cardMan from "../Images/card-man.png";
import collection1 from "../Images/collection1.png";
import collection2 from "../Images/collection2.png";
import collection3 from "../Images/collection3.png";
import collection4 from "../Images/collection4.png";
import collection5 from "../Images/collection5.png";
import pakistanPriceoye from "../Images/pakistan-priceoye.png";
import "./style.css";
function Home() {
  return (
    <>
      <section class="hero-section">
        {/* <div class="row">
      <div class="left">
        <img src="../Images/hero_man.png" alt="" />
      </div>
      <div class="right">
        <p>60% Discount</p>
        <h1>
          Winter <br />
          Collection
        </h1>
        <span class="mute-text">Best Cloth Collection Of 2021</span>
        <button class="hero-btn">Shop Now</button>
      </div>
  </div> */}
        <div>
          <div id="carouselExample" className="carousel slide pointer-event">
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/*  
   <img src={banner1} /> 
   <img src={banner2}  /> 
   <img src={banner3} /> 
  */}
                <img src={pakistanPriceoye} width="1600px" />
              </div>

              <div className="carousel-item"></div>
              <div className="carousel-item"></div>
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
      </section>

      {/*  // --------- category section start--- */}
      <section class="category">
        <h1>Shop By Category</h1>
        <div class="row">
          <div class="left">
            <img src={cat1} alt="" />
            <div class="category-caption">
              <p>Woman's</p>
              <a href="#" class="category-btn">
                Best New Deal
              </a>
              <span class="category-collection">New Collection</span>
            </div>
          </div>
          <div class="center">
            <img src={cat2} alt="" />
            <div class="category-caption">
              <span class="category-collection">Woman's</span>
              <h2>Winter Cloth</h2>
              <p>New Cloth</p>
            </div>
          </div>
          <div class="right">
            <img src={cat3} alt="" />
            <div class="category-caption">
              <p>Man's</p>
              <a href="#" class="category-btn">
                Best New Deal
              </a>
              <span class="category-collection">New Collection</span>
            </div>
          </div>
        </div>
      </section>
      {/*  // ------- category section end------ */}

      {/*  //---------- Latest Product section star ------ .. */}
      <section class="latest-product">
        <div class="latest-product-top">
          <div class="left">
            <h1>Latest Product</h1>
          </div>
          <div class="right">
            <p>All</p>
            <p>New</p>
            <p>Feature</p>
            <p>Offer</p>
          </div>
        </div>

        <div class="latest-product-card">
          <div class="column">
            <div class="card">
              <img src={p1} alt="" />
              <div class="card-caption">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <h4>
                  <b>Put Title Here</b>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  maiores maxime veniam aspernatur.
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src={p2} alt="" />
              <div class="card-caption">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
                <h4>
                  <b>Put Title Here</b>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  maiores maxime veniam aspernatur.
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src={p3} alt="" />
              <div class="card-caption">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <h4>
                  <b>Put Title Here</b>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  maiores maxime veniam aspernatur.
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src={p4} alt="" />
              <div class="card-caption">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
                <h4>
                  <b>Put Title Here</b>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  maiores maxime veniam aspernatur.
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src={p5} alt="" />
              <div class="card-caption">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
                <h4>
                  <b>Put Title Here</b>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  maiores maxime veniam aspernatur.
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src={p6} alt="" />
              <div class="card-caption">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <h4>
                  <b>Put Title Here</b>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  maiores maxime veniam aspernatut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  //---------- Latest Product section end ------ .. */}

      {/*  //---------- Best Product section start ------ ..*/}
      <section class="best-product">
        <div class="row">
          <div class="left">
            <img src={cardMan} alt="" />
          </div>
          <div class="right">
            <div class="best-product-text">
              <h1>
                Find The Best Product
                <br />
                From Our Shop
              </h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#" class="best-product-btn">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*  //---------- Best Product section end ------ .. */}

      {/*  //---------- Best month collection section start ------ .. */}
      <section class="best-month-collection">
        <div class="row">
          <div class="left">
            <h1>
              Best Collection <br />
              of This Month
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <a href="#" class="best-month-collection-btn">
              Shop Now
            </a>
            <img src={collection1} alt="" />
          </div>
          <div class="center">
            <img src={collection2} alt="" />
          </div>
          <div class="right">
            <div class="right-section1">
              <h4>
                Adidas Man
                <br />
                Jacket
              </h4>
              <img src={collection3} alt="" />
            </div>
            <div class="right-section2">
              <h4>
                Adidas Man
                <br />
                Jacket
              </h4>
              <img src={collection4} alt="" />
            </div>
            <div class="right-section3">
              <h4>
                Adidas Man
                <br />
                Jacket
              </h4>
              <img src={collection5} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/*  // ----------- Best month collection  section end ------ .. */}

      {/*  //   ----------------- Latest Offer News section start---------------  */}
      <section class="latest-offer-news">
        <div class="row">
          <div class="left">
            <h1>
              Get <br />
              Our Latest News
            </h1>
            <p>Subscribe News Latter</p>
          </div>
          <div class="right">
            <form action="#">
              <input
                type="search"
                name="search"
                id="mySearch"
                placeholder="Your Email Here"
              />
              <i class="fas fa-search"></i>
            </form>
          </div>
        </div>
      </section>
      {/*  // ----------------- Latest Offer News section end-----------------  .. */}

      {/*  // ------------------- Policy section start---------------- */}

      <section class="policy">
        <div class="row">
          <div class="left">
            <i class="fas fa-truck"></i>
            <h2>Free Shipping Method</h2>
            <p>
              Lorem ipsum dolor sit <br />
              amet consectetur adipisicing <br />
              elit. Nostrum, modi?
            </p>
          </div>
          <div class="center">
            <i class="fas fa-unlock-alt"></i>
            <h2>Secure Payment System</h2>
            <p>
              Lorem ipsum dolor sit <br />
              amet consectetur adipisicing <br />
              elit. Nostrum, modi?
            </p>
          </div>
          <div class="right">
            <i class="fas fa-sync-alt"></i>
            <h2>Secure Return Policy</h2>
            <p>
              Lorem ipsum dolor sit <br />
              amet consectetur adipisicing <br />
              elit. Nostrum, modi?
            </p>
          </div>
        </div>
      </section>

      {/*  // /*-------------------- Policy section end-----------------   */}

      {/*  // /*-------------------- Image Gallery section start----------------- */}
      <section class="image-gallery">
        <div class="row">
          <div class="column">
            <img src="images/gallery1.jpg" alt="" />
            <img src="images/gallery2.jpg" alt="" />
            <img src="images/gallery3.jpg" alt="" />
            <img src="images/gallery4.jpg" alt="" />
          </div>
        </div>
      </section>
      {/*  // /*-------------------- Image Gallery section end----------------- */}
    </>
  );
}

export default Home;
