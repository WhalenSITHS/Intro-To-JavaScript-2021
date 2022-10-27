const background = document.querySelector(".background");
const changeBtn = document.querySelector(".button");
const headerTwo = document.querySelector(".header-two");

function getRGB() {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  return { R, G, B }; //ends function
}
function changeBackground(colorObject) {
  background.style.backgroundColor = `rgb(${colorObject.R}, ${colorObject.G}, ${colorObject.B})`;
}

function startProgram() {
  let anthing = getRGB();
  changeBackground(anthing);
}
changeBtn.addEventListener("click", startProgram);
