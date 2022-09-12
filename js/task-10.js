function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('#controls > input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxesApp = document.querySelector('#boxes');

let amount = inputNumber.value;

function createBoxes (amount) {
  const boxesToAppear = [];

      for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        console.log(div);

        div.style.height = `${30 + 10 * i}px`;
		    div.style.width = `${30 + 10 * i}px`;
		    div.style.background = getRandomHexColor();
		    
        boxesToAppear.push(div);
      };

      return boxesToAppear;
};

buttonCreate.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNumber.value);
  boxesApp.append(...boxesToAdd); 
}); 

buttonDestroy.addEventListener('click', () => {
  boxesApp.innerHTML = '';
  
  if (inputNumber !== '') {
      inputNumber = '';
    };
});






