import React from "react";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../../../store/actions";
import styles from "../index.module.css";
import TermsAndCond from "./terms";

const TC = () => {
  const dispatch = useDispatch();

  const switchToCreate = () => {
    dispatch(signUpAction.setSignUpLevel("create"));
  };
  return (
    <div>
      <div>
        <div className={`row ${styles.styleTop}`}>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="container">
              <TermsAndCond switchToCreate={switchToCreate} />
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

export default TC;
