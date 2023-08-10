import { calculateResult } from './src/math.js';
import { generateResultText, outputResult } from './src/output.js';
import { extractInput } from './src/parser.js';

const form = document.querySelector('form');
/* //exported to Output.js
const output = document.getElementById('result');
*/

function formSubmitHandler(event) {
  event.preventDefault();
  
  /* //sent over to Parser.js
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);
  */
  const numberValues = extractInput(form);  //getting input from forms

  //let result = '';
  const result = calculateResult(numberValues);

  /* //exported to Math.js
  try {
    const numbers = [];
    for (const numberInput of numberInputs) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    }
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  */

  /* //exported to Output.js
  let resultText = '';

  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + result;
  }
  */

  const resultText = generateResultText(result);  //generates text displayed on screen

  //output.textContent = resultText;  //displays generated text | extracted to Output.js
  outputResult(resultText); //displays generated text

}



form.addEventListener('submit', formSubmitHandler);
