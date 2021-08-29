import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: inputName,
    InputChangeHandler: nameInputChangeHandler,
    onBlurHandler: nameBlurHandler,
    inputIsValid: nameIsValid,
    hasError: nameInputHasError,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: inputEmail,
    InputChangeHandler: emailInputChangeHandler,
    onBlurHandler: emailBlurHandler,
    inputIsValid: emailIsValid,
    hasError: emailInputHasError,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid || !emailIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameBlurHandler}
          value={inputName}
        />
        {nameInputHasError && (
          <p className='error-text'>Dont let it empty brah !!!</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='text'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailBlurHandler}
          value={inputEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>This is not a valid email address</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
