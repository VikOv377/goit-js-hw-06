const listOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach(item => {
   const categoryName = item.querySelector('h2');
   console.log(`Category: ${categoryName.textContent}`);

   const numberOfElementsInCategory = item.querySelectorAll('li');
   console.log(`Elements: ${numberOfElementsInCategory.length}`);
}
);