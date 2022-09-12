const inputChange = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

inputChange.addEventListener('input', event => {
    textChange.style.fontSize = `${event.target.value}px`;
});