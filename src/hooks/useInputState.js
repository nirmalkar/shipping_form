import { useState } from "react";

export const useInputState = (initVal) => {
  const [state, setState] = useState(initVal);
  const handleChange = (val) => {
    setState(val);
  };
  const reset = () => {
    setState(initVal);
  };
  return [state, handleChange, reset];
};
