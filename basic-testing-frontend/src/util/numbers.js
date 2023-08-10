import { validateNumber, validateStringNotEmpty } from './validation';

export function transformToNumber(value) {
  return +value;
}

//imported from Math.js
//transforms values into proper numbers
export function cleanNumbers(numberValues) {
  const numbers = [];

  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    
    const number = transformToNumber(numberInput);
    validateNumber(number);
    
    numbers.push(number);
  
  }

  return numbers;
}