export type inputType = {
  label: string;
  required: boolean;
  value: string;
  error: string;
};

export type ValuesStateType = {
  step1: Array<inputType>;
  step2: Array<inputType>;
  step3: Array<inputType>;
  step4: {
    password: string;
    confirmPassword: string;
    captcha: Array<string>;
    captchaInput: string;
    accepted: boolean;
  };
};

const initialState = {
  step1: [
    { label: "Salutation", required: true, value: "", error: "" },
    { label: "First name", required: true, value: "", error: "" },
    { label: "Middle name", required: false, value: "", error: "" },
    { label: "Last name", required: true, value: "", error: "" },
    { label: "Company", required: true, value: "", error: "" },
    { label: "Title", required: true, value: "", error: "" },
    { label: "Email", required: true, value: "", error: "" },
    { label: "Confirm Email", required: true, value: "", error: "" },
    { label: "Phone", required: true, value: "", error: "" },
    { label: "Fax", required: true, value: "", error: "" },
    { label: "Mobile", required: true, value: "", error: "" },
  ],

  step2: [
    { label: "businessAreas", required: true, value: "", error: "" },
    { label: "comments", required: true, value: "", error: "" },
  ],
  
  step3: [
    { label: "Country", required: true, value: "", error: "" },
    { label: "Office Name", required: true, value: "", error: "" },
    { label: "Address", required: true, value: "", error: "" },
    { label: "Postal Code", required: true, value: "", error: "" },
    { label: "City", required: true, value: "", error: "" },
    { label: "State", required: true, value: "", error: "" },

  ],
  
  step4: {
    password: "",
    confirmPassword: "",
    captcha: [],
    captchaInput: "",
    accepted: false,
  },
};

export const valuesReducer = (
  state: ValuesStateType = initialState,
  action: any
): ValuesStateType => {
  switch (action.type) {
    case "SET-VALUE-1":
      return {
        ...state,
        step1: state.step1.map((item) =>
          item.label === action.label
            ? { ...item, value: action.value, error: ""  }
            : item
        ),
      };
    case "SET-ERROR-1":
      return {
        ...state,
        step1: state.step1.map((item) =>
          item.label === action.label ? { ...item, error: action.error } : item
        ),
      };
    case "SET-VALUE-3":
      return {
        ...state,
        step3: state.step1.map((item) =>
          item.label === action.label
            ? { ...item, value: action.value, error: ""  }
            : item
        ),
      };
    case "SET-ERROR-3":
      return {
        ...state,
        step3: state.step1.map((item) =>
          item.label === action.label ? { ...item, error: action.error } : item
        ),
      };
    default:
      return state;
  }
};
