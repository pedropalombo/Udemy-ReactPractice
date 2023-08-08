export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number; //casting 'number' to be an actual number
  }
  return sum;
}
