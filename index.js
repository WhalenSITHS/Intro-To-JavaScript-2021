//functions

function test() {
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
