import React from "react";
import styles from "../index.module.css";

const Form = ({ switchToTC }) => {
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
              {/* <label className={styles.labelStyle}>TITLE</label>{" "}
              <span className={styles.labelSpanStyle}>*</span> */}
              <select
                className="form-select form-select-lg"
                aria-label="Default select example"
                placeholder="Title"
              >
                <option value="1">Mr</option>
                <option value="2">Mrs</option>
                <option value="3">Unknown</option>
              </select>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mb-3">
            <div className="form-group">
              {/* <label className={styles.labelStyle}>FIRST NAME</label> */}
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
              {/* <label className={styles.labelStyle}>LAST NAME</label> */}
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
              {/* <label className={styles.labelStyle}>SPECIALTY</label> */}
              <select
                className="form-select form-select-lg"
                aria-label="Default select example"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <div className="form-group">
              {/* <label className={styles.labelStyle}>DATE OF BIRTH</label> */}
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
              {/* <label className={styles.labelStyle}>PHONE</label> */}
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
              {/* <label className={styles.labelStyle}>WEBSITE</label> */}
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
              {/* <label className={styles.labelStyle}>TWITTER</label> */}
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
              {/* <label className={styles.labelStyle}>LINKEDIN</label> */}
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
              {/* <label className={styles.labelStyle}>HOSPITAL ADDRESS</label>
              <span className={styles.labelSpanStyle}>*</span> */}
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter your hospital address"
                aria-label="default input example"
              />
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <div className="form-group">
              {/* <label className={styles.labelStyle}>CREATE PASSWORD</label>
              <span className={styles.labelSpanStyle}>*</span> */}
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
              {/* <label className={styles.labelStyle}>CONFIRM PASSWORD</label>
              <span className={styles.labelSpanStyle}>*</span> */}
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
            <button className={styles.nextBtn} onClick={switchToTC}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
