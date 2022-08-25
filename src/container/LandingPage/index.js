import React from "react";
import FeaturedCard from "../../components/FeaturedCard";
import Footer from "../../constants/Footer";

const LandingPageContainer = () => {
  return (
    <div>
      <div className="container">
        <h5>Featured Events</h5>
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
      </div>

      <Footer />
    </div>
  );
};

export default LandingPageContainer;
