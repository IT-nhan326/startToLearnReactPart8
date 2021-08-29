import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    inputIsValid: firstNameValid,
    InputChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameBlurHandler,
    hasError: fistNameError,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    inputIsValid: lastNameValid,
    InputChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    hasError: lastNameError,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    inputIsValid: emailValid,
    InputChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    hasError: emailError,
    reset: resetEmail,
  } = useInput(isEmail);

  const firstNameClassess = fistNameError
    ? "form-control invalid"
    : "form-control";
  const lastNameClassess = lastNameError
    ? "form-control invalid"
    : "form-control";
  const emailClassess = emailError ? "form-control invalid" : "form-control";

  let formIsValid = false;

  if (firstNameValid && lastNameValid && emailValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClassess}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {fistNameError && (
            <p className='error-text'>Please enter firstname</p>
          )}
        </div>
        <div className={lastNameClassess}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameError && <p className='error-text'>Please enter lastname</p>}
        </div>
      </div>
      <div className={emailClassess}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className='error-text'>Please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
