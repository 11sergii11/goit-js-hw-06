const navElements = document.querySelector("#categories");

const navItemElements = navElements.children;
console.log("Number of categories:", navItemElements.length);

const listCategories = document.querySelectorAll(".item");

for (const argList of listCategories) {
  
  const titleElements = Object.keys(argList.children);
  const catTitle = argList.children[titleElements[0]].textContent;
  console.log(`Category: ${catTitle}`);

  const listItem = argList.children[titleElements[1]];
  const listItemlength = listItem.children.length;
  console.log(`Elements: ${listItemlength}`);
}
