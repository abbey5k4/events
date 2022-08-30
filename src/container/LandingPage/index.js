import React from "react";
import Slider from "react-slick";
import FeaturedCard from "../../components/FeaturedCard";
import UpcomingCard from "../../components/UpcomingCards";
import Footer from "../../constants/Footer";
import NavigationBar from "../../constants/Navigation";
import styles from "./index.module.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", color: "#ff911c" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", color: "#ff911c" }}
//       onClick={onClick}
//     />
//   );
// }

const LandingPageContainer = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //   const settings = {
  //     dots: false,
  //     infinite: true,
  //     speed: 1500,
  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     nextArrow: <SampleNextArrow />,
  //     prevArrow: <SamplePrevArrow />,
  //     responsive: [
  //       {
  //         breakpoint: 880,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           initialSlide: 1,
  //           arrows: false,
  //         },
  //       },
  //     ],
  //   };

  return (
    <div>
        {/* <Nav /> */}
        <div className="container">
           <NavigationBar /> 
        </div>
        
      <div className="">
        <div className={styles.heroSection}>
          <div className={styles.textContainer}>
            <h3 className={`${styles.heroText}`}>
              Getting you right on track to complete your CME requirements
            </h3>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h5 className="fw-bold">Featured Events</h5>
        <Slider {...settings}>
          <div>
            <FeaturedCard />
          </div>
          <div>
            <FeaturedCard />
          </div>
          <div>
            <FeaturedCard />
          </div>
          <div>
            <FeaturedCard />
          </div>
          <div>
            <FeaturedCard />
          </div>
          <div>
            <FeaturedCard />
          </div>
          <div>
            <FeaturedCard />
          </div>
          <div>
            <FeaturedCard />
          </div>
          <div>
            <FeaturedCard />
          </div>
        </Slider>
        <hr />
      </div>

      <div className="container mt-5">
        <h5 className="fw-bold">Upcoming Events</h5>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <UpcomingCard />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <UpcomingCard />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <UpcomingCard />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <UpcomingCard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPageContainer;
