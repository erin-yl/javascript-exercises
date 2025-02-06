// Pseudocode:
// Human inputs their choice of rock, paper, or scissors
// Otherwise show "Please enter rock, paper, or scissors."
// Computer returns a choice of rock, paper, or scissors
// If human wins, print "You win! [human choice] beats [computer choice]."
// If computer wins, print "You lose! [computer choice] beats [human choice]."
// Otherwise show "It's even."
// Play 5 rounds, calculate scores, and declare a final winner

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let humanInput = prompt("Rock, paper, or scissors?").toLowerCase();
  if (humanInput !== "rock" && humanInput !== "paper" && humanInput !== "scissors") {
    humanInput = prompt("Please enter rock, paper, or scissors.").toLowerCase();
    return humanInput;
  } else {
    return humanInput;
  } 
}

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper") 
  ) {
    console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + ".");
    humanScore++;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".");
    computerScore++;
  } else if (humanChoice === computerChoice) {
    console.log("It's even.");
  }
  console.log("Your score: " + humanScore + ". Computer's score: " + computerScore + ".");
}

function playGame() {
  for (let round = 0; round < 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log("Your final score: " + humanScore + ". Computer's final score: " + computerScore + ".")

  if (humanScore > computerScore) {
    console.log("The winner is you!");
  } else if (computerScore > humanScore) {
    console.log("The winner is computer!");
  } else if (humanScore === computerScore) {
    console.log("It's even.");
  }
}

playGame();