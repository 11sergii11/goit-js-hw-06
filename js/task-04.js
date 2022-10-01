const countValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const incrBtn = document.querySelector('[data-action="increment"]');
const decrBtn = document.querySelector('[data-action="decrement"]');
const valueElem = document.querySelector('#value');

decrBtn.addEventListener('click', function () {
    countValue.decrement();
    valueElem.textContent = countValue.value;
});

incrBtn.addEventListener('click', function () {
    countValue.increment();
    valueElem.textContent = countValue.value;
})