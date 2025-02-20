const container = document.querySelector("#container");
const button = document.querySelector(".button");

for (let i = 0; i < 16 * 16; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.classList.add("square");

  squareDiv.addEventListener("mouseover", () => {
    squareDiv.style.backgroundColor = "#f3d8c7";
  });

  container.appendChild(squareDiv);
}

button.addEventListener("click", () => {
  let num;
  
  do {
    num = prompt("Enter a number between 1 and 100:", "");
    num = parseInt(num);
  } while (isNaN(num) || num <= 0 || num > 100);

  container.innerHTML = "";

  let squareSize = 600 / num + "px";

  for (let i = 0; i < num * num; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.style.width = squareSize;
    squareDiv.style.height = squareSize;

    squareDiv.addEventListener("mouseover", () => {
      squareDiv.style.backgroundColor = "#f3d8c7";
    });

    container.appendChild(squareDiv);
  }
});