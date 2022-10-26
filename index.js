const background = document.querySelector(".background");
const changeBtn = document.querySelector(".button");
const headerTwo = document.querySelector(".header-two");

function getRGB() {
  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  return { r, g, b };
}
console.log(getRGB());
