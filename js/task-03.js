const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listElem = document.querySelector(".gallery");
console.log(listElem);

const itemElem = images
  .map(
    (image) =>
      `<li class="list--item"> <img src='${image.url}' alt='${image.alt}' width=240 height=140 class="list--item__img"> </li>`
  )
  .join("");
console.log(itemElem);

listElem.insertAdjacentHTML("afterbegin", itemElem);
