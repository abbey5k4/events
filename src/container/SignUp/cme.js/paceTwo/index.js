import React from "react";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../../../store/actions";
import styles from "../index.module.css";

const PaceTwo = () => {
  const dispatch = useDispatch();

  const switchToTC = () => {
    dispatch(signUpAction.setSignUpLevel("tc"));
  };
  return (
    <div>
      pace
      <button onClick={switchToTC}>Move to tc</button>
    </div>
  );
};

export default PaceTwo;
