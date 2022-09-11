const inputValue = document.querySelector('#validation-input');
const dataLength = Number(inputValue.getAttribute('data-length'));

inputValue.addEventListener('blur', event => {
    const inputValueLength = event.currentTarget.value.length;

    if(inputValueLength === dataLength) {
        inputValue.classList.add('valid');
        inputValue.classList.remove('invalid');
    } else {
        inputValue.classList.add('invalid');
        inputValue.classList.remove('valid');
    }

    if (inputValueLength === 0) {
        inputValue.classList.remove('invalid');
        inputValue.classList.remove('valid');
      }
});