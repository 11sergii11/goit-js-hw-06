const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElements = document.querySelector("#ingredients");

const makeIngredients = (ingredient) => {
  return ingredient.map((ingredient) => {
    const itemElements = document.createElement("li");
    itemElements.classList.add("item");
    itemElements.textContent = ingredient;
    return itemElements;
  });
};

const elements = makeIngredients(ingredients);
listElements.append(...elements);
