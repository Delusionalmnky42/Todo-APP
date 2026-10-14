// 1. Ändra textContent

const textBtn = document.querySelector("#textBtn");
const text = document.querySelector("#text");

textBtn.addEventListener("click", function () {
  text.textContent = "Nu ändrades texten!";
});


// 2. Toggle en klass

const highlightBtn = document.querySelector("#highlightBtn");
const highlightText = document.querySelector("#highlightText");

highlightBtn.addEventListener("click", function () {
  highlightText.classList.toggle("highlight");
});


// 3. Skapa ett nytt element och lägg till det på sidan

const createBtn = document.querySelector("#createBtn");
const container = document.querySelector("#container");

createBtn.addEventListener("click", function () {
  const newElement = document.createElement("p");
  newElement.textContent = "Ett nytt element skapades!";
  container.appendChild(newElement);
});


// 4. Ta bort ett element

const removeBtn = document.querySelector("#removeBtn");
const removeText = document.querySelector("#removeText");

removeBtn.addEventListener("click", function () {
  removeText.remove();
});