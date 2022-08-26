import React from "react";
import { useSelector } from "react-redux";
// import ClinicalInterest from "../../container/signUp/clinical/interest";
// import SetUpClinical from "../../container/signUp/clinical/setUpClinical";
import Clinic from "./clinical";

const SignUpContainer = () => {
  const { level } = useSelector(({ signUp }) => signUp);
  return (
    <div>
      {/* {level === "create" && <Clinic />}
      {level === "setUp" && <SetUpClinical />}
      {level === "interest" && <ClinicalInterest />} */}
    </div>
  );
};

export default SignUpContainer;
