import React from "react";
import styles from "../index.module.css";

const Form = ({ switchToInterest }) => {
  return (
    <div className={`container ${styles.centerDiv}`}>
      <div className={styles.bgSize}>
        <div className={`pt-3 ${styles.paceHeader}`}>
          <h1>Set up your</h1>
          <h1>Pace Account</h1>
        </div>
        <div className="row mt-5">
          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>Title</label> <span className={styles.labelSpanStyle}>*</span>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="1">Mr</option>
                <option value="2">Mrs</option>
                <option value="3">Unknown</option>
              </select>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>First Name</label>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter your first name"
                aria-label="default input example"
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>Last Name</label>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter your last name"
                aria-label="default input example"
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>SPECIALTY</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="0">Select your Specialty</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>Date of birth</label>
              <input
                className="form-control form-control-lg"
                type="date"
                placeholder="Enter your date of birth"
                aria-label="default input example"
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>Phone</label>
              <input
                className="form-control form-control-lg"
                type="phone"
                placeholder="Enter your phone number"
                aria-label="default input example"
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>Website</label>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter your website address"
                aria-label="default input example"
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>Twitter</label>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter your Twitter username"
                aria-label="default input example"
              />
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>LinkedIn</label>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter your LinkedIn address"
                aria-label="default input example"
              />
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="form-group">
            <label className={styles.labelStyle}>Hospital Address</label><span className={styles.labelSpanStyle}>*</span>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Enter your address"
              aria-label="default input example"
            />
          </div>
        </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>Create password</label><span className={styles.labelSpanStyle}>*</span>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Password"
                aria-label="default input example"
              />
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>Confirm password</label><span className={styles.labelSpanStyle}>*</span>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Confirm password"
                aria-label="default input example"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-3">
            
            <button className={styles.nextBtn} onClick={switchToInterest}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
