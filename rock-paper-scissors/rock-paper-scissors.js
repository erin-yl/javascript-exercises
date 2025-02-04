// Pseudocode:
// User inputs their choice of rock, paper or scissors
// Computer returns a choice of rock, paper or scissors
// If user inputs rock and computer returns scissors, print "You win! Rock beats scissors."
// If user inputs rock and computer returns paper, print "You lose! Paper beats rock."
// If user inputs scissors and computer returns paper, print "You win! Scissors beat paper."
// If user inputs scissors and computer returns rock, print "You lose! Rock beats scissors."
// If user inputs paper and computer returns rock, print "You win! Paper beats rock."
// If user inputs paper and computer returns scissors, print "You lose! Scissors beat paper."
// Otherwise print "It's even."

let humanScore = 0;
let computerScore = 0;

const computerChoice = Math.floor(Math.random() * 3);
const humanChoice = prompt("Enter your choice: ");

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + ".");
    console.log("Your score: " + (humanScore + 1) + ". Computer's score: " + computerScore + ".");
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".");
    console.log("Your score: " + humanScore + ". Computer's score: " + (computerScore + 1) + ".");
  } else if (
    (humanChoice === "scissors" && computerChoice === "paper") 
  ) {
    console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beat " + computerChoice + ".");
    console.log("Your score: " + (humanScore + 1) + ". Computer's score: " + computerScore + ".");
  } else if (
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beat " + humanChoice + "."); 
    console.log("Your score: " + humanScore + ". Computer's score: " + (computerScore + 1) + ".");
  } else if (humanChoice === computerChoice) {
    console.log("It's even.");
    console.log("Your score: " + humanScore + ". Computer's score: " + computerScore + ".");
  } else {
    return;
  }
}

playRound(humanSelection, computerSelection);