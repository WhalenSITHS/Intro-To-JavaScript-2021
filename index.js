const numbersArr = [1, 2, 3, 4, 5];

/* numbersArr.forEach((number) => {
  //iterate through the array and run function on each element
  //pass each element into the function as a parameter
  console.log(number * 2);
  console.log(numbersArr);
}); */

const newArr = numbersArr.map((number) => {
  return number * 2;
});
const newArr = numbersArr.map((number) => number * 2);

console.log(newArr);
