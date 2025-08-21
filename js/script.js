alert("Let us play a game. Are you ready?");

// grabbing the images
let rockHand = document.getElementById("rock-hand");
let paperHand = document.getElementById("paper-hand");
let scissorHand = document.getElementById("scissor-hand");

let humanChoice = document.getElementById("human-choice");

function rock() {
  humanChoice.innerText = "Rock";
}

/* Let's play rock, paper, scissors in the console


// Written logic to get the computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    console.log("Rock");
    return;
  } else if (computerChoice === 1) {
    console.log("Paper");
    return;
  } else if (computerChoice === 2) {
    console.log("Scissor");
    return computerChoice;
  }
}

// Written logic to get the human choice
function getHumanChoice() {
  let humanChoice = prompt("Choose: Rock, Paper or Scissors", "");
  console.log(`You chose: ${humanChoice}`);
  return humanChoice;
}

// Variables

humanScore = 0;
computerScore = 0;

// Single round logic
function playRound(humanChoice, computerChoice) {} */
