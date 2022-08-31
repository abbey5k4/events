import React from "react";
import styles from "../index.module.css";

const InterestSec = ({ switchToTC }) => {
  return (
    <div className={`container ${styles.centerDiv}`}>
      <div className={styles.bgSize}>
        <div className={`pt-3 ${styles.intHeader}`}>
          <h3>What specialties are you interested in?</h3>
        </div>
        <div className="my-3">
          <p className="text-primary">Choose as many as you want</p>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault1"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Allergy &amp; Immunology
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault2"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Anesthesiology
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault3"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Dermatology
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault4"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Diagnostic Radiology
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault5"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Emergency Medicine
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault6"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Family Medicine
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault7"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Internal Medicine
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault8"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Leadership and Management in Medicine
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault9"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Medical Genetics
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault10"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Neurology Nuclear
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault11"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Medicine Obstetrics and Gynecology
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault12"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Ophthalmology
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault13"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Pathology
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault14"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Pharmacology
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault15"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Physical Medicine &amp; Rehabilitation
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault16"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Preventive Medicine
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault17"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Psychiatry Radiation
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault18"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Radiation Oncology
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault19"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Surgery
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault20"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Urology
              </label>
            </div>
          </div>
        </div>
        <div className="py-4">
          <button className={styles.nextBtn} onClick={switchToTC}>
            COMPLETE SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterestSec;
