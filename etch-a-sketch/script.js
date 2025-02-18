const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.style.border = "1px solid black";
  squareDiv.style.aspectRatio = "1 / 1";
  container.appendChild(squareDiv);
}