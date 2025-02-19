const container = document.querySelector("#container");
const button = document.querySelector(".button");

for (let i = 0; i < 16 * 16; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.classList.add("square");
  container.appendChild(squareDiv);

  squareDiv.addEventListener("mouseover", () => {
    squareDiv.style.backgroundColor = "#f3d8c7";
  });
}

button.addEventListener("click", () => {
  let num = prompt("Please enter a number less than 100: ", "");

  if ( num < 0 || num > 100 || !Number.isInteger(num)) {
    num = prompt("Please enter a valid number: ", "")
  } else {
    document.body.removeChild(container);
  }
});