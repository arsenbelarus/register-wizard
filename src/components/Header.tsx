import React from "react";
import { useSelector } from "react-redux";
import { StepperStateType } from "../store/reducers/stepperReducer";
import { AppRootStateType } from "../store/store";

const Header = () => {
  const { currentStep, stepsList } = useSelector<
    AppRootStateType,
    StepperStateType
  >((state) => state.stepper);

  return (
    <header>
      <h1> New User Registration</h1>
      <p>
        {" "}
        STEP {currentStep + 1}: {stepsList[currentStep].label}{" "}
      </p>
    </header>
  );
};

export default Header;
