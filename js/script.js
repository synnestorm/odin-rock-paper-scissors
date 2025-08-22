// we are playing the game rock paper scissors
// creating the human variables and functions

let humanChoice = document.getElementById("human-choice");
let rockHand = "Rock";
let paperHand = "Paper";
let scissorHand = "Scissor";

function rockHandClicked() {
  humanChoice.innerText = rockHand;
}

function paperHandClicked() {
  humanChoice.innerText = paperHand;
}

function scissorHandClicked() {
  humanChoice.innerText = scissorHand;
}

// creating the computer choices

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1; // generates a random number between 1-3
  if (computerChoice === 1) {
    console.log("Rock");
    return "Rock";
  } else if (computerChoice === 2) {
    console.log("Paper");
    return "Paper";
  } else if (computerChoice === 3) {
    console.log("Scissors");
    return "Scissors";
  }
}

// getting the computer choice written when pushing the computer button

function displayComputerChoice() {
  const computerChoice = getComputerChoice();
  let getComputerChoiceWritten = document.getElementById("computer-choice");
  getComputerChoiceWritten.innerText = computerChoice;
}
