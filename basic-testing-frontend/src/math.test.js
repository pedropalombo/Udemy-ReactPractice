//file must have the same name as the one intended to be tested + '.spec' || '.test' in the end
// \-> so the test runner may indentify such files

//importing from "package.json", in devDependencies
//PS: called 'it' (or 'test') so it's more semantically for the explanation
import { it, expect } from "vitest";
import { add } from './math';

//text explanation for the following tests
// \-> tester('test definition', funtionToBeTested());
it('should add all number values of an array', () => {
  const result = add([1, 2, 3]);
  
  expect(result).toBe(6); //toBe() ==> result expected of the function called
});