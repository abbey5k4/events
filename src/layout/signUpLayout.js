import React from "react";
import Footer from "../constants/Footer";
import NavigationBar from "../constants/Navigation";

const SignUpLayout = ({ children }) => {
  return (
    <div>
      <div className="container">
        <NavigationBar displayMode="none" />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default SignUpLayout;
