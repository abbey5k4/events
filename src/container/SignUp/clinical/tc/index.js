import React from "react";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../../../store/actions";

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
      TC
      <button className="btn btn-danger" onClick={switchToCreate}>
        End
      </button>
    </div>
  );
};

export default TermsAndConditions;
