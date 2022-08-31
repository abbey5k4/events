import React from "react";
import styles from "../../clinical/index.module.css";

const FormTwo = ({ switchToTC }) => {
  return (
    <div className={`container ${styles.centerDiv}`}>
      <div className={styles.bgSize}>
        <div className={`pt-3 ${styles.paceHeader}`}>
          <h1>Set up your</h1>
          <h1>Pace Account</h1>
        </div>
        <div className="row mt-5">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>NAME OF ORGANIZATION</label>
              <span className={styles.labelSpanStyle}>*</span>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter your first name"
                aria-label="default input example"
              />
            </div>
          </div>
          
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>PHONE</label>
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
              <label className={styles.labelStyle}>WEBSITE</label>
              <span className={styles.labelSpanStyle}>*</span>
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
              <label className={styles.labelStyle}>EMAIL</label>
              <span className={styles.labelSpanStyle}>*</span>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter your eamil address"
                aria-label="default input example"
              />
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>CONTACT</label>
              <span className={styles.labelSpanStyle}>*</span>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter your contact details"
                aria-label="default input example"
              />
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
            <div className="form-group">
              <label className={styles.labelStyle}>BRIEF BIO</label>
              <span className={styles.labelSpanStyle}>*</span>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter a brief bio"></textarea>
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

export default FormTwo;
