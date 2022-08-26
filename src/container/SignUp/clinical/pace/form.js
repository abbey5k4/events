import React from "react";
import styles from "../index.module.css";

const Form = ({ switchToCreate, switchToInterest }) => {
  return (
    <div className={`container ${styles.bgSize}`}>
      <div className={`pt-3 ${styles.paceHeader}`}>
        <h1>Set up your</h1>
        <h1>Pace Account</h1>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your first name"
              aria-label="default input example"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your last name"
              aria-label="default input example"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="form-group">
            <label>SPECIALTY</label>
            <select className="form-select" aria-label="Default select example" >
              <option  value="0">Select your Specialty</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="form-group">
            <label>Date of birth</label>
            <input
              className="form-control"
              type="date"
              placeholder="Enter your date of birth"
              aria-label="default input example"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="form-group">
            <label>Phone</label>
            <input
              className="form-control"
              type="phone"
              placeholder="Enter your phone number"
              aria-label="default input example"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="form-group">
            <label>Website</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your website address"
              aria-label="default input example"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="form-group">
            <label>Twitter</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your Twitter username"
              aria-label="default input example"
            />
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="form-group">
            <label>LinkedIn</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your LinkedIn address"
              aria-label="default input example"
            />
          </div>
        </div>

        {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="form-group">
            <label>Hospital Address</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your address"
              aria-label="default input example"
            />
          </div>
        </div> */}

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="form-group">
            <label>Create password</label>
            <input
              className="form-control"
              type="text"
              placeholder="Password"
              aria-label="default input example"
            />
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="form-group">
            <label>Confirm password</label>
            <input
              className="form-control"
              type="text"
              placeholder="Confirm password"
              aria-label="default input example"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-3">
          <button className="btn btn-primary" onClick={switchToCreate}>
            Prev
          </button>
          <button className="btn btn-primary ml-3" onClick={switchToInterest}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
