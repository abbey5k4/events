import React from "react";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../../../store/actions";
import styles from "../index.module.css"
import InterestSec from "./int";

const Interest = () => {
  const dispatch = useDispatch();

  const switchToTC = () => {
    dispatch(signUpAction.setSignUpLevel("tc"));
  };

  return (
    <div>
      <div className="">
        <div className={`row ${styles.styleTops}`}>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="container">
              <InterestSec switchToTC={switchToTC} />
            </div>
          </div>
          <div
            className={`col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 ${styles.paceBg}`}
          >
            {/* <Image src="/assets/pxl.jpg" alt="imgg" width={480} height={1400} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
