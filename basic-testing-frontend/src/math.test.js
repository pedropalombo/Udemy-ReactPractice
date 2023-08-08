//file must have the same name as the one intended to be tested + '.spec' || '.test' in the end
// \-> so the test runner may indentify such files

//importing from "package.json", in devDependencies
//PS: called 'it' (or 'test') so it's more semantically for the explanation
import { it, expect } from "vitest";
import { add } from './math';

//it() ==> text explanation for the following tests
// \-> tester('test definition', funtionToBeTested());

// -| "positive" results |-
//adding standard numbers
it('should add all number values in an array', () => {
  
  //Triple A Method
  
  //Arrange
  const numbers = [1, 2, 3];

  //Act
  const result = add(numbers);
  
  //Assert (Expectations)
  //expect(result).toBe(6); //toBe() ==> result expected of the function called
  
  //reduce() ==> applies method to every element on the given array
  // \-> OBS: '0' is the initialValue
  const expectedResult = numbers.reduce((previousValue, curValue) =>
    previousValue + curValue, 0
  );

  expect(result).toBe(expectedResult);

});

//adding string numbers
it('should display the correct sum if an array of numeric string values is provided', () => {
  const inputs = ['1', '2', '3'];

  const result = add(inputs);

  const expectedResult = inputs.reduce((previousValue, curValue) =>
    parseInt(previousValue) + parseInt(curValue), 0
  );

  expect(result).toBe(expectedResult);
});

//shows '0' on empty array input
it('returns 0 if an empty array is provided', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

//"negative" results | Bugs
//returning 'NaN'
it('should show "NaN" if at least one invalid number is provided', () => {
  const inputs = ['invalid', 1];

  const result = add(inputs);

  expect(result).toBeNaN()
});

//error throwing in case of null values
it('should throw an error on null value is passed into the function', () => {
  //only triggers 'add()' when 'resultFunction' is called
  const resultFunction = () => {
    add();
  };

  //expecting to throw an error when 'add()' is triggered with null values
  expect(resultFunction).toThrow();
})