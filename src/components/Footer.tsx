import React from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { AppRootStateType, store } from "../store/store";
import { StepperStateType } from "../store/reducers/stepperReducer";
import { ValuesStateType } from "../store/reducers/valuesReducer";
import { nextStep, prevStep, setError } from "../store/actions/actions";

const Footer = () => {
  const { currentStep } = useSelector<AppRootStateType, StepperStateType>(
    (state) => state.stepper
  );
  const { stepsList } = useSelector<AppRootStateType, StepperStateType>(
    (state) => state.stepper
  );
  const { step1 } = useSelector<AppRootStateType, ValuesStateType>(
    (state) => state.values
  );
  const dispatch = useDispatch();

  const nextHandler = (index: number) => {
    if (currentStep === 0) {
      step1.forEach((item, i) => {
        if (item.required && !item.value) {
          dispatch(setError("Field is required", item.label));
        }
        if (item.label === "Email") {
          if (!item.value.match(/^[^\s@]+@[^\s@]+$/)) {
            dispatch(setError("Not correct email address", item.label));
          }
          if (item.value !== step1[i + 1].value) {
            dispatch(setError("Values should be equal", item.label));
            dispatch(setError("Values should be equal", step1[i + 1].label));
          }
        }
      });
      if (store.getState().values.step1.every((item) => item.error === "")) {
        dispatch(nextStep(index));
      }
    }
    if (currentStep === 1) {
      dispatch(nextStep(index));
    }
    if (currentStep === 2) {
      dispatch(nextStep(index));
    }
    if (currentStep === 3) {
      dispatch(nextStep(index));
    }
    if (currentStep === 4) {
      dispatch(nextStep(index));
    }
  };
  const prevHandler = (index: number) => dispatch(prevStep(index));

  return (
    <footer className="footer-container">
      <a href="#">Back to login </a>
      <div>
        {currentStep !== stepsList.length - 1 && currentStep !== 0 && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => prevHandler(currentStep)}
          >
            Prev
          </Button>
        )}
        {currentStep !== stepsList.length - 1 && (
          <Button
            variant="contained"
            style={{ marginLeft: "80px" }}
            color="primary"
            onClick={() => nextHandler(currentStep)}
          >
            {currentStep === stepsList.length - 2 ? "Finish" : "Next"}
          </Button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
