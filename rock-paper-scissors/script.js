let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"]

const container = document.createElement("div");
document.body.appendChild(container);

const resultDiv = document.createElement("div");
resultDiv.style.marginTop = "20px";
container.appendChild(resultDiv);

const resultMessage = document.createElement("p");
const score = document.createElement("p");
const winnerMessage = document.createElement("p");

resultDiv.appendChild(resultMessage);
resultDiv.appendChild(score);
resultDiv.appendChild(winnerMessage);

choices.forEach(humanChoice => {
  const button = document.createElement("button");
  button.textContent = humanChoice;
  button.addEventListener("click", () => determineWinner(humanChoice, getComputerChoice()));
  container.appendChild(button);
});

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(humanChoice, computerChoice) {
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (
    computerChoice === winConditions[humanChoice] 
  ) {
    humanScore++;
    resultMessage.textContent = `You win! ${capitalize(humanChoice)} beats ${computerChoice}.`;
  } else if (humanChoice === computerChoice) {
    resultMessage.textContent = `It's a tie! Both chose ${humanChoice}.`;
  } else {
    computerScore++;
    resultMessage.textContent = `You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`;
  }
  
  score.textContent = `Your score: ${humanScore}. Computer's score: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    winnerMessage.textContent = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}