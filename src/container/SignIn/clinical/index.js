import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
import SignInFormClinic from "./form/signUpForm";

const ClinicSignIn = () => {
  return (
    <div>
      <div className={`${styles.bgImgDiv} `}>
        <SignInFormClinic />
        {/* <div className={`card ${styles.formCard}`}>
          <div className={styles.textDiv}>
            <h3>Sign into Pace</h3>
            <div className="d-flex align-items-center">
              <p className="mb-0">New User ?</p>
              <Link href="/signUp/clinical">Create Account</Link>
            </div>
            <div className="py-4">
              <div className="d-flex justify-content-center align-items-center">
                <button className={styles.activeBtn}>Clinical</button>
                <Link href="/signIn/cme">
                  <button className={styles.btnLeft}>CME Organizer</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={`card-body ${styles.cardBodyyy}`}>
            <div className="text-center container">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
                
              </div>
              <div className="form-group">
                <input
                  className="form-control my-2"
                  type="text"
                  placeholder="Email"
                  aria-label="email input example"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control my-2"
                  type="password"
                  placeholder="Password"
                  aria-label="password input example"
                />
              </div>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-primary rounded-pill"
                  type="button"
                //   onClick={switchToSetUp}
                >
                  SIGN IN
                </button>
              </div>
              <div className="d-flex align-items-center justify-content-center pt-3">
                <div className="d-flex align-items-center">
                  <p
                    className={`text-muted mb-0 ${styles.social} ${styles.btnP}`}
                  >
                    Sign in with
                  </p>
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
              <div className="d-flex align-items-center justify-content-center text-center">
                <p className={styles.pFooter}>
                  <Link href="/forgotPassword">Forget Password</Link> 
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ClinicSignIn;
