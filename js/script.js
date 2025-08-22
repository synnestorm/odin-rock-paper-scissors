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
