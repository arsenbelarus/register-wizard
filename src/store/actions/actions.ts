export const nextStep = (index: number) => {
  return {
    type: "NEXT-STEP",
    index,
  };
};

export const prevStep = (index: number) => {
  return {
    type: "PREV-STEP",
    index,
  };
};

export const setValue = (value: string | Array<string>, label: string) => {
  return {
    type: "SET-VALUE-1",
    value,
    label,
  };
};

export const setError = (error: string, label: string) => {
  return {
    type: "SET-ERROR-1",
    error,
    label,
  };
};
