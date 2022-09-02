import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
import { useRouter } from "next/router";

const SignInFormCME = ({ switchToPaceTwo }) => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.cardHolder}>
        <div className={styles.cardHolderTwo}>
          <div>
            <h3>Sign in to Pace</h3>
            <p className={`mb-0 ${styles.headerP}`}>
              New User? &nbsp;{" "}
              <span>
                <Link href="/signUp/cme">Create Account</Link>
              </span>
            </p>
            <div className={styles.flexButtonDivs}>
              <div className={styles.firstDiv} onClick={() => router.push("/signUp/clinical")}>
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
                type="passwoed"
                placeholder="Password"
                aria-label="password input example"
              />
            </div>
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary rounded-pill"
                type="button"
                onClick={switchToPaceTwo}
              >
                SIGN IN
              </button>
            </div>

            <div className="d-flex align-items-center justify-content-center pt-3">
              <div className="d-flex align-items-center">
                <p
                  className={`mb-0 ${styles.social} ${styles.btnP}`}
                >
                  Sign in with
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
            <div className="d-flex align-items-center justify-content-center text-center my-3 pb-3">
              <p className={styles.pFooter}>
                <Link href="/forgotPassword">Forgot Password ?</Link>
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInFormCME;
