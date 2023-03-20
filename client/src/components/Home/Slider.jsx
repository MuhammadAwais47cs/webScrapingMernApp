import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function MySlider() {
  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };
  const settingsNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        },
      },
      {
        breakpoint: 580,
        settings: {
          vertical: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 380,
        settings: {
          vertical: false,
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section class="banner-section">
      <div class="container">
        <div class="vehicle-detail-banner banner-content clearfix">
          <div class="banner-slider">
            <Slider {...settingsFor} class="slider slider-for">
              <div class="slider-banner-image">
                <img
                  src="https://images.unsplash.com/photo-1570942872213-1242607a35eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Car-Image"
                />
              </div>
              <div class="slider-banner-image">
                <img
                  src="https://images.unsplash.com/photo-1570171278960-d6c2b316f3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt="Car-Image"
                />
              </div>
              <div class="slider-banner-image">
                <img
                  src="https://images.unsplash.com/photo-1564376130023-5360fbb7c91b?ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                  alt="Car-Image"
                />
              </div>
              <div class="slider-banner-image">
                <img
                  src="https://images.unsplash.com/photo-1570942872213-1242607a35eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Car-Image"
                />
              </div>
              <div class="slider-banner-image">
                <img
                  src="https://images.unsplash.com/photo-1570171278960-d6c2b316f3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt="Car-Image"
                />
              </div>
              <div class="slider-banner-image">
                <img
                  src="https://images.unsplash.com/photo-1564376130023-5360fbb7c91b?ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                  alt="Car-Image"
                />
              </div>
              <div class="slider-banner-image">
                <img
                  src="https://images.unsplash.com/photo-1570942872213-1242607a35eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Car-Image"
                />
              </div>
              <div class="slider-banner-image">
                <img
                  src="https://images.unsplash.com/photo-1570171278960-d6c2b316f3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt="Car-Image"
                />
              </div>
              <div class="slider-banner-image">
                <img
                  src="https://images.unsplash.com/photo-1564376130023-5360fbb7c91b?ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                  alt="Car-Image"
                />
              </div>
            </Slider>
            <Slider {...settingsNav} class="slider slider-nav thumb-image">
              <div class="thumbnail-image">
                <div class="thumbImg">
                  <img
                    src="https://images.unsplash.com/photo-1570942872213-1242607a35eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="slider-img"
                  />
                </div>
                <span>White Pearl Crystal Shine1</span>
              </div>
              <div class="thumbnail-image">
                <div class="thumbImg">
                  <img
                    src="https://images.unsplash.com/photo-1570171278960-d6c2b316f3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt="slider-img"
                  />
                </div>
                <span>White Pearl Crystal Shine2</span>
              </div>
              <div class="thumbnail-image">
                <div class="thumbImg">
                  <img
                    src="https://images.unsplash.com/photo-1564376130023-5360fbb7c91b?ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                    alt="slider-img"
                  />
                </div>
                <span>White Pearl Crystal Shine3</span>
              </div>
              <div class="thumbnail-image">
                <div class="thumbImg">
                  <img
                    src="https://images.unsplash.com/photo-1570942872213-1242607a35eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="slider-img"
                  />
                </div>
                <span>White Pearl Crystal Shine1</span>
              </div>
              <div class="thumbnail-image">
                <div class="thumbImg">
                  <img
                    src="https://images.unsplash.com/photo-1570171278960-d6c2b316f3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt="slider-img"
                  />
                </div>
                <span>White Pearl Crystal Shine2</span>
              </div>
              <div class="thumbnail-image">
                <div class="thumbImg">
                  <img
                    src="https://images.unsplash.com/photo-1564376130023-5360fbb7c91b?ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                    alt="slider-img"
                  />
                </div>
                <span>White Pearl Crystal Shine3</span>
              </div>
              <div class="thumbnail-image">
                <div class="thumbImg">
                  <img
                    src="https://images.unsplash.com/photo-1570942872213-1242607a35eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="slider-img"
                  />
                </div>
                <span>White Pearl Crystal Shine1</span>
              </div>
              <div class="thumbnail-image">
                <div class="thumbImg">
                  <img
                    src="https://images.unsplash.com/photo-1570171278960-d6c2b316f3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt="slider-img"
                  />
                </div>
                <span>White Pearl Crystal Shine2</span>
              </div>
              <div class="thumbnail-image">
                <div class="thumbImg">
                  <img
                    src="https://images.unsplash.com/photo-1564376130023-5360fbb7c91b?ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                    alt="slider-img"
                  />
                </div>
                <span>White Pearl Crystal Shine3</span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySlider;

// return  <div>
// <Slider {...settingsFor} className="slider-for">
//   <div class="slider-banner-image">
//     <img
//       src="https://images.unsplash.com/photo-1570942872213-1242607a35eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//       alt="Car-Image" /
//     />
//   </div>
//   <div class="slider-banner-image">
//     <img
//       src="https://images.unsplash.com/photo-1570171278960-d6c2b316f3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
//       alt="Car-Image" /
//     />
//   </div>

//   <div>{/* your slide content goes here */}</div>
// </Slider>
// <Slider {...settingsNav} className="slider-nav">
//   <div class="thumbnail-image">
//     <div class="thumbImg">
//       <img
//         src="https://images.unsplash.com/photo-1570942872213-1242607a35eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//         alt="slider-img" /
//       />
//     </div>
//     <span>White Pearl Crystal Shine1</span>
//   </div>
//   <div>{/* your slide nav content goes here */}</div>
// </Slider>
// </div>
