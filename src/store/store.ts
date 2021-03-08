import { combineReducers, createStore } from "redux";
import { stepperReducer } from "./reducers/stepperReducer";
import { valuesReducer } from "./reducers/valuesReducer";

const rootReducer = combineReducers({
  stepper: stepperReducer,
  values: valuesReducer,
});

export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>;
