import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";

const SignUpForm = ({ switchToSetUp }) => {
  return (
    <div>
      <div className={styles.cardHolder}>
        <div className={styles.cardHolderTwo}>
          <div>
            <h2>Create an account</h2>
            <p className="mb-0">
              Already have an account? &nbsp;{" "}
              <span>
                <Link href="/">Sign In</Link>
              </span>
            </p>
            <div className={styles.flexButtonDivs}>
              <div className={styles.firstDiv}>
                <p className="mb-0">Clinician</p>
              </div>
              <div className={styles.secondDiv}>
                <p className="mb-0">CME Organizer</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.grayBg}>
          <div className={styles.contentDiv}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
              <div className="form-group">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="0">Select your title</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <input
                className="form-control my-2"
                type="text"
                placeholder="First Name"
                aria-label="first input example"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control my-2"
                type="text"
                placeholder="Last Name"
                aria-label="second input example"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control my-2"
                type="email"
                placeholder="Email"
                aria-label="email input example"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control mt-2 mb-3"
                type="password"
                placeholder="Password"
                aria-label="password input example"
              />
            </div>
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary rounded-pill"
                type="button"
                onClick={switchToSetUp}
              >
                CREATE ACCOUNT
              </button>
            </div>

            <div className="d-flex align-items-center justify-content-center pt-3">
              <div className="d-flex align-items-center">
                <p
                  className={`mb-0 ${styles.social} ${styles.btnP}`}
                >
                  Create account with
                </p> &nbsp; &nbsp;
              </div>
              <div className="d-flex">
                <div className={styles.iconContainer}>
                  <FcGoogle />
                </div>
                <div className={styles.iconContainer}>
                  <GrFacebookOption />
                </div>
                <div className={styles.iconContainer}>
                  <GrLinkedinOption />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center text-center my-3">
              <p className={styles.pFooter}>
                By Signing up you accept the{" "}
                <Link href="#">Terms of Service</Link> and{" "}
                <Link href="#">Privacy Policy</Link>
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
