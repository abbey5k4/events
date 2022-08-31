import React, { useState } from "react";
import styles from "./index.module.css";
import { IoIosCheckmarkCircle } from "react-icons/io"

const ForgotP = () => {
  const [sent, setSent] = useState(false);
  const handleClick = () => {
    setSent(!sent);
  };
  return (
    <div className={`container ${styles.centerDiv}`}>
      <div className={styles.bgSize}>
        <div className={`pt-3 ${styles.paceHeader}`}>
          <h1>Forgot Password</h1>
        </div>
        <p className="py-3">
          Enter your email to receive a password reset email
        </p>
        <div className="row mt-5">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>EMAIL ADDRESS</label>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter your email address"
                aria-label="default input example"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-3">
            <button className={styles.nextBtn} onClick={handleClick}>
              {sent ? <p className="mb-0">PASSWORD SENT <span style={{ fontSize: "20px" }}><IoIosCheckmarkCircle /></span></p>: "SEND PASSWORD"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotP;
