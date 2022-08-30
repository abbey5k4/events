import React from "react";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../../../store/actions";
import styles from "../index.module.css"

const TermsAndConditions = () => {
  const dispatch = useDispatch();

  const switchToCreate = () => {
    dispatch(signUpAction.setSignUpLevel("create"));
  };

  // const switchToInterest = () => {
  //   dispatch(signUpAction.setSignUpLevel("interest"));
  // };
  return (
    <div>
      <div className={`row ${styles.styleTop}`}>
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
          <div className="container">TC</div>
          <button className={styles.nextBtn} onClick={switchToCreate}>
            ACCEPT
          </button>
        </div>
        <div
          className={`col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 ${styles.paceBg}`}
        >
          {/* <Image src="/assets/pxl.jpg" alt="imgg" width={480} height={1400} /> */}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
