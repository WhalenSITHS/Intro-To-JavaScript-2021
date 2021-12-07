function greet(name) {
  const greetPromise = new Promise(function (resolve, reject) {
    resolve(`Hello ${name}`);
  });
  return greetPromise;
}

const suzie = greet("suzie");

suzie.then((result) => {
  console.log(result);
});

/* console.log("start");
setTimeout(() => {
  console.log("Timer");
}, 3000);
console.log("end");
 */
