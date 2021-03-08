import React from "react";
import { useSelector } from "react-redux";
import { StepperStateType } from "../../store/reducers/stepperReducer";
import { AppRootStateType } from "../../store/store";
import s from "./Main.module.css";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

const StepForm = () => {
  const { currentStep } = useSelector<AppRootStateType, StepperStateType>(
    (state) => state.stepper
  );

  return (
    <div className={s.formContainer}>
      {currentStep === 0 && <Step1 />}
      {currentStep === 1 && <Step2 />}
      {currentStep === 2 && <Step3 />}
      {currentStep === 3 && <Step4 />}
      {currentStep === 4 && <Step5 />}
    </div>
  );
};

export default StepForm;
