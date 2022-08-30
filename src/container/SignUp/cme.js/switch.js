import React from "react";
import { useSelector } from "react-redux";
import CMEContainer from ".";
import PaceTwo from "./paceTwo";
import TC from "./tc";

const SignUpTwoContainer = () => {
  const { level } = useSelector(({ signUp }) => signUp);
  return (
    <div>
      {level === "create" && <CMEContainer />}
      {level === "paceTwo" && <PaceTwo />}
      {level === "tc" && <TC />}
    </div>
  );
};

export default SignUpTwoContainer;