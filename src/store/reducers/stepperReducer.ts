export type StepperStateType = {
  currentStep: number;
  stepsList: Array<StepType>;
};
export type StepType = {
  index: number;
  label: string;
  completed: boolean;
  isActive: boolean;
};

const initialState: StepperStateType = {
  currentStep: 2,
  stepsList: [
    { index: 0, label: "Contact info", completed: false, isActive: true },
    { index: 1, label: "Areas", completed: false, isActive: false },
    { index: 2, label: "Address", completed: false, isActive: false },
    { index: 3, label: "Password", completed: false, isActive: false },
    { index: 4, label: "Completed", completed: false, isActive: false },
  ],
};

export const stepperReducer = (
  state: StepperStateType = initialState,
  action: any
): StepperStateType => {
  switch (action.type) {
    case "NEXT-STEP":
      return {
        ...state,
        currentStep: state.currentStep + 1,
        stepsList: state.stepsList.map((step: StepType) =>
          step.index === action.index
            ? { ...step, completed: true, isActive: false }
            : step.index === action.index + 1
            ? { ...step, completed: false, isActive: true }
            : step
        ),
      };
    case "PREV-STEP":
      return {
        ...state,
        currentStep: state.currentStep - 1,
        stepsList: state.stepsList.map((step: StepType) =>
          step.index === action.index
            ? { ...step, completed: false, isActive: false }
            : step.index === action.index - 1
            ? { ...step, completed: false, isActive: true }
            : step
        ),
      };
    default:
      return state;
  }
};
