const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients')


const createListItems = ingredients => { 
  return ingredients.map(ingredient => { 
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');
    return itemEl
  })
  
}

const ingredientsList = createListItems(ingredients)
listEl.append(...ingredientsList)