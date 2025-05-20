// Let's play rock, paper, scissors in the console

// Written logic to get the computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 1) {
    console.log("Rock");
    return;
  }
}

console.log(getComputerChoice());

//
