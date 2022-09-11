const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');
const ingredientsArray = [];

ingredients.forEach(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.className = 'item';

    ingredientsArray.push(item);
});

listOfIngredients.append(...ingredientsArray);




