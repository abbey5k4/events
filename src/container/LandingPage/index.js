import React from "react";
import FeaturedCard from "../../components/FeaturedCard";
import UpcomingCard from "../../components/UpcomingCards";
import Footer from "../../constants/Footer";
import styles from "./index.module.css";

const LandingPageContainer = () => {
  return (
    <div>
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
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <FeaturedCard />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <FeaturedCard />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <FeaturedCard />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <FeaturedCard />
          </div>
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
