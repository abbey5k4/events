import React from "react";
import Slider from "react-slick";
import FeaturedCard from "../../components/FeaturedCard";
import UpcomingCard from "../../components/UpcomingCards";
import Footer from "../../constants/Footer";
import NavigationBar from "../../constants/Navigation";
import styles from "./index.module.css";

const LandingPageContainer = () => {
  var settings = {
    dots: true,
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

  return (
    <div>
      <section className="container">
        <NavigationBar />
      </section>

      <div className="">
        <div className={styles.heroSection}>
          <div className={`container ${styles.textContainer}`}>
            <h3 className={`${styles.heroText}`}>
              Getting you right on track to complete your CME requirements
            </h3>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="pb-4">
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
        </div>

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
