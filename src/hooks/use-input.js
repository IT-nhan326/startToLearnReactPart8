import { useState } from "react";

const useInput = (validationChecker) => {
  const [enteredValue, setEnterValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validationChecker(enteredValue);
  const hasError = !inputIsValid && isTouched;

  const InputChangeHandler = (event) => {
    setEnterValue(event.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
      setEnterValue('')
      setIsTouched(false)
  }
  return {
    value: enteredValue,
    InputChangeHandler,
    onBlurHandler,
    inputIsValid,
    hasError,
    reset,
  };
};

export default useInput;
