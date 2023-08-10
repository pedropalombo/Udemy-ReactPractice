//imported from App.js
//builds message to be shown on form submition
export function generateResultText(calculationResult) {
    let resultText = '';

    if (calculationResult === 'invalid') {
        resultText = 'Invalid input. You must enter valid numbers.';
    } else if (calculationResult !== 'no-calc') {
        resultText = 'Result: ' + calculationResult;
    }

    return resultText;
}

//displays generated text
export function outputResult(resultText) {
    //imported from App.js
    const output = document.getElementById('result');   //getting element responible for the form sumition result

    output.textContent = resultText;    //and displays such text
}