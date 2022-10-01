const inputElem = document.querySelector('#font-size-control');
const spanElem = document.querySelector('#text');

inputElem.addEventListener('input', inputChangeVal);

function inputChangeVal(event) {
    const textPixValue = event.currentTarget.value;
    console.log(textPixValue);
    spanElem.style.fontSize = `${textPixValue}px`;
};