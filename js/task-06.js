const inputElement = document.querySelector('#validation-input');
const textLenght = inputElement.getAttribute('data-length');
console.log(textLenght);

function onInput(event) {
    if (event.currentTarget.value.length === Number(textLenght)) {
        inputElement.classList.remove("invalid");
        inputElement.classList.add("valid");
    }
    else { inputElement.classList.add("invalid") };
}

inputElement.addEventListener('blur', onInput);