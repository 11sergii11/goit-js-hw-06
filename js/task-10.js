const blockControl = document.querySelector("#controls");
const inputField = blockControls.querySelector("input");
const btnCreate = blockControls.querySelector("[data-create]");
const btnDestroy = blockControls.querySelector("[data-destroy]");

const mainBlock = document.querySelector("#boxes");
mainBlock.style.display = `flex`;
mainBlock.style.flexWrap = `wrap`;


let BoxesArray = [];
let sizesOfBox = 30;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  console.log(amount);
  for (let i = 0; i < amount; i += 1) {
  }
}

