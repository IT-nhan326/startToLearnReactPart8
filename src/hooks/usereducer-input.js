import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {

    if (action.type === "INPUT") {
        return { value: action.value, isTouched: state.isTouched }
    }

    if (action.type === "BLUR") {
        return { isTouched: true, value: state.value }
    }

    if (action.type === "RESET") {
        return { isTouched: false , value: ''}
    }
    return inputStateReducer;
};

const useInput = (validationChecker) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  const inputIsValid = validationChecker(inputState.value);
  const hasError = !inputIsValid && inputState.isTouched;

  const InputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const onBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };
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
