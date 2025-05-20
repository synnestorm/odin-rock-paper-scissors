// Let's play rock, paper, scissors in the console

// Written logic to get the computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    console.log("Rock");
    return;
  } else if (computerChoice === 2) {
    console.log("Paper");
    return;
  } else if (computerChoice === 3) {
    console.log("Scissor");
    return;
  }
}

// Written logic to get the human choice
function getHumanChoice() {
  let humanChoice = prompt("Choose: Rock, Paper or Scissors", "");
  console.log(`You chose: ${humanChoice}`);
  return;
}

// Variables

humanScore = 0;
computerScore = 0;
