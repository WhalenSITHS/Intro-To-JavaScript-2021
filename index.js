//functions

/* function test() {
  console.log("THis is a test");
} //declare the function,
test(); //call the function

function argument(student) {
  //accepts an argument
  console.log(`this is my student ${student}`);
}

argument("Claire"); //not type specific
argument(8);

function add(x, y) {
  return x + y; //return sends the product/output outside of the function scope
}
//console.log(add(7, 9));
const answer = add(7, 9);
console.log(answer);
 */

//console.log(returnMe());

/* function sentence(x) {
  returnMe(x);
  console.log(`This is a sentence using ${x}`);
}
sentence(90);
 */
/* let x = 2;
function addOne() {
  return x + 1;
}
function multiplyTwo() {
  return x * 2;
}
function addThree() {
  return x + 3;
}

function mathTest(result1, result2, result3) {
  return result1() + result2() + result3();
}

console.log(mathTest(addOne, multiplyTwo, addThree)); */
const Cindy = {
  name: "Cindy",
  age: 17,
  cool: false,
};
function theName(name) {
  return `Hello  my name is ${name}`;
}
function job() {
  return `And I work at Stop and Shop`;
}

function story(mainCharacter) {
  let nameParam = mainCharacter.name;
  const intro = theName(nameParam);
  const theirJob = job();
  if (mainCharacter.cool === true) {
    return `${intro} ${theirJob} and I'm cool`;
  } else {
    return `${intro} ${theirJob} and I'm not cool`;
  }
}
console.log(story(Cindy));
