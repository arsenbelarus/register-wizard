import React from "react";
import s from "./Main.module.css";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../store/store";
import {
  StepperStateType,
  StepType,
} from "../../store/reducers/stepperReducer";

const StepsIcons = () => {
  const steps = useSelector<AppRootStateType, Array<StepType>>(
    (state) => state.stepper.stepsList
  );
  const { currentStep } = useSelector<AppRootStateType, StepperStateType>(
    (state) => state.stepper
  );

  return (
    <nav className={s.navIcons}>
      <Stepper orientation="vertical" activeStep={currentStep}>
        {steps.map((step: StepType) => {
          return (
            <Step
              key={step.label}
              completed={step.completed}
              active={step.isActive}
            >
              <StepLabel> {step.label} </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </nav>
  );
};

export default StepsIcons;
