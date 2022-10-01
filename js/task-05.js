const inputElem = document.querySelector('#name-input');
const spanElem = document.querySelector('#name-output');

console.log(inputElem);
console.log(spanElem);

inputElem.addEventListener('input', onInputChange);

function onInputChange(event) {
    const valueInput = event.currentTarget.value;
    if (valueInput.length === 0) {
        return spanElem.textContent = 'Anonymous';
    }
    spanElem.textContent = event.currentTarget.value;
}