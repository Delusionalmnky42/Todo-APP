const btn = document.querySelector("button");

const box = document.querySelector(".box");
function writeText() {
  console.log("knappen klickades");
}
//Eventlistener click
btn.addEventListener("click", writeText);

box.addEventListener("click", writeText);

box.addEventListener("mouseover", () => {
  box.style = "background-color: red";
});

box.addEventListener("mouseout", () => {
  box.style = "background-color: yellow";
});

const ol = document.querySelector("ol");

const itemList = [];

box.addEventListener("click", () => {
  const li = document.createElement("li");

  li.textContent = "New item added!";
  itemList.push(li.textContent);
  ol.appendChild(li);
  console.log(itemList);
});