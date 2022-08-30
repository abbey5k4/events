import React from "react";
import { useSelector } from "react-redux";
import Clinic from "./clinical";
import Interest from "./clinical/interest";
import Pace from "./clinical/pace";
import TermsAndConditions from "./clinical/tc";

const SignUpContainer = () => {
  const { level } = useSelector(({ signUp }) => signUp);
  return (
    <div>
      {level === "create" && <Clinic />}
      {level === "setUp" && <Pace />}
      {level === "interest" && <Interest />}
      {level === "tc" && <TermsAndConditions />}
    </div>
  );
};

export default SignUpContainer;