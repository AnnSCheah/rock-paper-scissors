console.log("Hello World! Rock Paper Scissors Time!");

// * Variable to keep track of the score, starts at 0
let playerScore = 0;
let computerScore = 0;

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
  // * Switch statement is used for the logic of the game.
  // * Points are given to either player or computer depending on the outcome.
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        return "Tie! Rock and Rock.";
      } else if (computerSelection === "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
      } else {
        playerScore++;
        return "You Win! Rock beats Scissors";
      }
      break;

    case "paper":
      if (computerSelection === "rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
      } else if (computerSelection === "paper") {
        return "Tie! Paper and Paper";
      } else {
        computerScore++;
        return "You Lose! Scissors beat Paper";
      }
      break;

    case "scissors":
      if (computerSelection === "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
      } else if (computerSelection === "paper") {
        playerScore++;
        return "You Win! Scissors beat Paper";
      } else {
        return "Tie! Scissors and Scissors";
      }
      break;
  }
}

// TODO: Fix error handling when invalid input is detected.
// TODO: Game will restart from Round 1 if invalid answer is given mid-game.
// * game function is called to start the game
function game() {
  for (i = 0; i < 5; i++) {
    // * Get computer choice each time it is called
    const computerSelection = getComputerChoice();

    // * Prompt user for a valid answer
    let playerSelection = prompt(`Round ${i + 1}\nRock Paper Scissors?`, "");
    if (playerSelection == null) {
      alert("Cancelled");
      break;
    }

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "") {
      alert("Please pick a hand.");
    } else if (
      playerSelection != "rock" &&
      playerSelection != "scissors" &&
      playerSelection != "paper"
    ) {
      alert("Please enter a valid input.");
    } else {
      // * If user gives a valid answer, call playRound function to determine winner
      console.log(playRound(playerSelection, computerSelection));
    }
  }
  calculateScore();
}

// * Function to calculate the final score and determine the winner.
function calculateScore() {
  if (playerScore > computerScore)
    console.log(
      `You are the winner! Player Scored ${playerScore} to Computer Score ${computerScore}`
    );
  else if (playerScore < computerScore)
    console.log(
      `You lost! Player Score ${playerScore} to Computer Score ${computerScore}`
    );
  else console.log(`Tie Game! The score is tied at ${playerScore}`);
}
