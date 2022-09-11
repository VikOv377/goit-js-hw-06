let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const numberDisplay = document.querySelector('#value');

buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    numberDisplay.textContent = counterValue;
});

buttonIncrement.addEventListener('click', () => {
    counterValue += 1;
    numberDisplay.textContent = counterValue;
});