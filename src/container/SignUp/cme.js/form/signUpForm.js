import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
import { useRouter } from "next/router";

const SignUpFormCME = ({ switchToPaceTwo }) => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.cardHolder}>
        <div className={styles.cardHolderTwo}>
          <div>
            <h3>Create an account</h3>
            <p className={`mb-0 ${styles.headerP}`}>
              Already have an account? &nbsp;{" "}
              <span>
                <Link href="/">Sign In</Link>
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
                placeholder="Organizer's name"
                aria-label="organizer input example"
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
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary rounded-pill"
                type="button"
                onClick={switchToPaceTwo}
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

export default SignUpFormCME;
