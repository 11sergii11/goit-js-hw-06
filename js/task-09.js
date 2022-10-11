function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const spanChengeColor = document.querySelector(".color");
const btnChengeColor = document.querySelector(".change-color");

btnChengeColor.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomColor();
  spanChengeColor.textContent = getRandomColor();
  btnChengeColor.style.backgroundColor = getRandomColor();
});