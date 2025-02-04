// Pseudocode:
// User inputs their choice of rock, paper, or scissors
// Otherwise alert "Please enter rock, paper, or scissors."
// Computer returns a choice of rock, paper, or scissors
// If user inputs rock and computer returns scissors, print "You win! Rock beats scissors."
// If user inputs rock and computer returns paper, print "You lose! Paper beats rock."
// If user inputs scissors and computer returns paper, print "You win! Scissors beat paper."
// If user inputs scissors and computer returns rock, print "You lose! Rock beats scissors."
// If user inputs paper and computer returns rock, print "You win! Paper beats rock."
// If user inputs paper and computer returns scissors, print "You lose! Scissors beat paper."
// Otherwise print "It's even."
// Play 5 rounds, calculate scores, and declare a final winner

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  const humanChoice = prompt("Rock, paper, or scissors?");

  if (humanChoice.toLowerCase() === "rock") {
    return "rock";
  } else if (humanChoice.toLowerCase() === "paper") {
    return "paper";
  } else if (humanChoice.toLowerCase() === "scissors") {
    return "scissors";
  } else {
    alert("Please enter rock, paper, or scissors.");
  }
}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  
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
    humanScore++;
    console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + ".");
    console.log("Your score: " + humanScore + ". Computer's score: " + computerScore + ".");
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".");
    console.log("Your score: " + humanScore + ". Computer's score: " + computerScore + ".");
  } else if (
    (humanChoice === "scissors" && computerChoice === "paper") 
  ) {
    humanScore++;
    console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beat " + computerChoice + ".");
    console.log("Your score: " + humanScore + ". Computer's score: " + computerScore + ".");
  } else if (
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore++;
    console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beat " + humanChoice + "."); 
    console.log("Your score: " + humanScore + ". Computer's score: " + computerScore + ".");
  } else if (humanChoice === computerChoice) {
    console.log("It's even.");
    console.log("Your score: " + humanScore + ". Computer's score: " + computerScore + ".");
  }
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