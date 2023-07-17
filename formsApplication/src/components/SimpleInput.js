import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  //const nameInputRef = useRef();  //useRef => stores DOM element

  // -| Hook-based vars |-
  // / name \
  const {
    value: inputName,
    isValid: inputNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetForms: resetNameInput
  } = useInput(value => 
    value.trim() !== ''
  ); //parameter (method) 'validateValue' required by 'use-input'

  // / email \
  const {
    value: inputEmail,
    isValid: inputEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetForms: resetEmailInput
  } = useInput(value => 
    value.includes('@')
  );

  let formIsValid = false;

  formIsValid = inputNameIsValid && inputEmailIsValid;

  //form submission
  const formSubmissionHandler = (event) => {
    event.preventDefault(); //prevents page reload (http request) on form submission

    resetNameInput();
    resetEmailInput();

    //do nothing on empty input
    if (!inputNameIsValid) {
      return;
    }

  }

  //dynamic form className for (in)valid inputs
  const inputClasses = {
    name: nameInputHasError ? 'form-control invalid' : 'form-control',
    email: emailInputHasError ? 'form-control invalid' : 'form-control'
  }


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClasses.name}>
        <label htmlFor='name'>Your Name</label>

        <input
          type='text'
          id='name'
          onBlur={nameBlurHandler}
          onChange={nameInputChangeHandler}
          value={inputName}
        />

        {/* if input is invalid, shows error msg */}
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={inputClasses.email}>
        <label htmlFor='email'>Email Here</label>
        <input
          type='email'
          id='email'
          onBlur={emailBlurHandler}
          onChange={emailInputChangeHandler}
          value={inputEmail}
        />

        {/* if input is invalid, shows error msg */}
        {emailInputHasError && <p className="error-text">Email must be valid.</p>}
      </div>

      <div className="form-actions">
        {/* if form isn't valid,  the button doesn't show up*/}
        <button disabled={!formIsValid} onClick={() => { alert(`donezo!\n${inputName} & ${inputEmail}`) }}>Submit</button>
      </div>

    </form>
  );
};

export default SimpleInput;
