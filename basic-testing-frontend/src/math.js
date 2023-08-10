import { cleanNumbers } from "./util/numbers.js";

//sums all values of array 
export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number; //casting 'number' to be an actual number
  }
  return sum;
}

//extracted from 'App.js'
//returns the sum of all number elements of an array to App.js
export function calculateResult(numberValues) {
  let result = '';
  
  try {
    const numbers = cleanNumbers(numberValues); //turns all values into numbers

    /*const numbers = [];

     //exported to Numbers.js
    for (const numberInput of numberInputs) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    }
    */

    result = add(numbers).toString(); //sums all values up as string

  } catch (error) {
    result = error.message;
  
  }

  return result;  //returns to App.js
}
