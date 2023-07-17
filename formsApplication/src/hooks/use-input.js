import { useState } from "react";

const useInput = (validateValue) => {
    const [inputValue, setInputValue] = useState(''); //input value
    const [isTouched, setIsTouched] = useState(false);  //validation to check if there was an input to begin with

    const valueIsValid = validateValue(inputValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setInputValue(event.target.value);
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true)
    }

    const reset = () => {
        setInputValue('');
        setIsTouched(false);
    }

    return {
        value: inputValue,
        isValid: valueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        hasError: hasError,
        resetForms: reset
    };
};

export default useInput;