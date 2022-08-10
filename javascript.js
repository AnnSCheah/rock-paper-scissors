console.log("Hello World! Rock Paper Scissors Time!");

// * getComputerChoice randomly returns a "choice" for the computer.
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];

  // * Math.random() returns a random floating-point between 0 and 1.
  // * the method can then be scaled by multiplying it with the maximum desired integer.
  // * Math.floor() method rounds down the floating-point value to an integer.

  // TODO: Change up the comments to better clarify Math.random method.
  // * EXAMPLE
  // * To return a number between 0 and 10(inclusive)
  // * Math.floor(Math.random() * 10) + 1;

  // * To return a number between 2 numbers
  // * Math.floor(Math.random() * (10 - 2 + 1)) + 2;
  let computerChoice = Math.floor(Math.random() * 3);

  return choice[computerChoice];
}

function playRound(playerSelection, computerSelection) {
  // * Switch statement used for the logic of the game.
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") return "Tie! Rock and Rock.";
      else if (computerSelection === "paper")
        return "You Lose! Paper beats Rock";
      else return "You Win! Rock beats Scissors";
      break;

    case "paper":
      if (computerSelection === "rock") return "You Win! Paper beats Rock";
      else if (computerSelection === "paper") return "Tie! Paper and Paper";
      else return "You lose! Scissors beat Paper";
      break;

    case "scissors":
      if (computerSelection === "rock") return "You Lose! Rock beats Scissors";
      else if (computerSelection === "paper")
        return "You Win! Scissors beat Paper";
      else return "Tie! Scissors and Scissors";
      break;
  }
}

// TODO: Complete game function.
function game() {
  const computerSelection = getComputerChoice();

  while (playerSelection == null || playerSelection == "") {
    const playerSelection = prompt("Rock, Paper or Scissors?", "").toLowerCase;
  }
}
