//import { useEffect, useState } from "react"; //useEffect, useRef
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


  //const [inputName, setInputName] = useState(''); //input value
  //const [inputNameIsValid, setInputNameIsValid] = useState(false);  //validation for input value
  //const [inputNameTouched, setInputNameTouched] = useState(false);  //validation to check if there was an input to begin with
  //const [formIsValid, setFormIsValid] = useState(false);

  //const [inputEmail, setInputEmail] = useState('');
  //const [inputEmailTouched, setInputEmaiTouched] = useState(false);

  let formIsValid = false;

  /*//before using Custom Hooks
  const inputNameIsValid = inputName.trim() !== '';
  const nameInputIsInvalid = !inputNameIsValid && inputNameTouched;
  */

  //const inputEmailIsValid = inputEmail.trim() !== '' && inputEmail.includes('@');
  //const emailInputIsInvalid = !inputEmailIsValid && inputEmailTouched;

  formIsValid = inputNameIsValid && inputEmailIsValid;


  //triggers every time 'inputNameIsValid' changes
  /*useEffect(() => {
    if(inputNameIsValid) {
      setFormIsValid(true);

    } else {
      setFormIsValid(false);

    }
  }, [inputNameIsValid]);*/


  //'event' is inherent from triggers
  /*//before using Custom Hooks 
  const formInputChangeHandler = (event) => {
    switch (event.target.id) {
      case 'name':
        setInputName(event.target.value);
        break;

      case 'email':
        setInputEmail(event.target.value);
        break;

      default:
        break;
    }
  }*/

  //when user clicks away from the input field
  /*//before using Custom Hooks
  const formBlurHandler = (event) => {
    console.log(event.target.id);

    switch (event.target.id) {
      case 'name':
        //if there was an interaction, then validation shall start
        setInputNameTouched(true);
        break;

      case 'email':
        setInputEmaiTouched(true);
        break;

      default:
        break;
    }
  }*/

  /*
  //before using Custom Hooks
  const resetForms = () => {
    setInputName(''); //reset the 'name' state after button click
    setInputNameTouched(false); //reset the 'interacted with' state ''

    setInputEmail('');  //reset the 'email' state after button click
    setInputEmaiTouched(false); // ''
  }*/

  //form submission
  const formSubmissionHandler = (event) => {
    event.preventDefault(); //prevents page reload (http request) on form submission

    //if there was an input, then validation shall start
    //setInputNameTouched(true);
    //setInputEmaiTouched(true);

    resetNameInput();
    resetEmailInput();

    //do nothing on empty input
    if (!inputNameIsValid) {
      return;
    }

    //console.log('state name: ', inputName);

    //const enteredValue = nameInputRef.current.value; //gets the value from the DOM element linked to 'nameInputRef'
    //console.log('ref name: ', enteredValue);

    //resetForms();
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

        {/* binding 'ref' to 'nameInputRef' to return the input name (same as in a form submission) */}
        <input
          //ref={nameInputRef} 
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
