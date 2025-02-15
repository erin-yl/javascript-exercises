const container = document.querySelector("#container");

const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";

const blueH3 = document.createElement("h3");
blueH3.textContent = "I’m a blue h3!";
blueH3.style.color = "blue";

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";
div.style.padding = "16px";

const divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";

const divParagraph = document.createElement("p");
divParagraph.textContent = "ME TOO!";

div.appendChild(divH1);
div.appendChild(divParagraph);

container.appendChild(redParagraph);
container.appendChild(blueH3);
container.appendChild(div);