// === Nested Functions ===
// JS lets you define functions within functions, otherwise known as nesting

//global scope
const number = 7;
function doA() {
  //start function scope
  const number = 8;
  function doB() {
    const test = "hello there";
    console.log(number);
  }
  doB(); //step 1
  doB(); //step 2
  doB(); //step 3
  console.log(test);
}

doA();
