function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('body');
const buttonForChangeColor = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

buttonForChangeColor.addEventListener('click', event => {
  let randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
});
