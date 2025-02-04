// Pseudocode:
// User inputs their choice of rock, paper or scissors
// Computer returns a choice of rock, paper or scissors
// If user inputs rock and computer returns scissors, print "You win!"
// If user inputs rock and computer returns paper, print "You lose!"
// If user inputs scissors and computer returns paper, print "You win!"
// If user inputs scissors and computer returns rock, print "You lose!"
// If user inputs paper and computer returns rock, print "You win!"
// If user inputs paper and computer returns scissors, print "You lose!"
// Otherwise print "It's even."

let humanScore = 0;
let computerScore = 0;

const computerChoice = Math.floor(Math.random() * 3);
const humanChoice = prompt("Enter your choice: ");

function getHumanChoice() {
  if (humanChoice.toLowerCase() === "rock") {
    return "rock";
  } else if (humanChoice.toLowerCase() === "paper") {
    return "paper";
  } else if (humanChoice.toLowerCase() === "scissors") {
    return "scissors";
  } else {
    console.log("Please try again.");
  }
}

function getComputerChoice() {
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "rock")
  ) {
    console.log("You win! " + humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1) + " beats " + computerSelection);
  } else if (
    (humanSelection === "rock" && computerSelection === "paper") ||
    (humanSelection === "scissors" && computerSelection === "rock") ||
    (humanSelection === "paper" && computerSelection === "scissors")
  ) {
    console.log("You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + humanSelection);
    } else if (humanSelection === computerSelection) {
    console.log("It's even.");
  } else {
    console.log("Please try again.");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);