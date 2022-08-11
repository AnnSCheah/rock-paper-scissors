console.log("Hello World! Rock Paper Scissors Time!");

// * Variable to keep track of the score, starts at 0
let playerScore = 0;
let computerScore = 0;

// * getComputerChoice randomly returns a "choice" for the computer.
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];

  // * Math.random() returns a random floating-point between 0 and 1.
  // * the method can then be scaled by multiplying it with maximum random integer.
  // * Math.floor() method rounds down the floating-point value to an integer.

  // * EXAMPLE
  // * ------------------------------------------------------------------------------
  // * To return a random number between 0 and 10 (inclusive)
  // * Math.floor(Math.random() * 11)
  // * Math.floor(Math.random() * (max + 1));
  // * Math.random() is multiplied by 11, because 11 is not inclusive.
  // * Math.floor() method is then used to round it down to an integer.

  // * To return a number between 2 and 10 (inclusive)
  // * Math.floor(Math.random() * (11 - 2)) + 2;
  // * Math.floor(Math.random() * ((max + 1) - min))) + min;
  // * ------------------------------------------------------------------------------

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

// * game function is called to start the game
function game() {
  // * Setting up the game
  let validAnswer = false;
  let playerSelection = "";
  playerScore = 0;
  computerScore = 0;

  for (i = 0; i < 5; i++) {
    // * Get computer choice each time it is called
    const computerSelection = getComputerChoice();

    // * Prompt user for a valid answer
    // * If an invalid answer is given, the while loop will prompt the user
    // * without the for loop incrementing by 1
    while (!validAnswer) {
      playerSelection = prompt(`Round ${i + 1}\nRock Paper Scissors?`, "");

      if (playerSelection == null) {
        alert("Cancelled");
        return; // * Breaks out of the function and nested loops
      }

      playerSelection = playerSelection.toLowerCase();

      // * Logic check for valid answer
      if (
        playerSelection == "" ||
        (playerSelection != "rock" &&
          playerSelection != "paper" &&
          playerSelection != "scissors")
      ) {
        alert("Please enter a valid input.");
      } else {
        validAnswer = true; // * Changed to true to break out of while loop
      }
    }

    // * playRound function is called to determine winner
    console.log(playRound(playerSelection, computerSelection));

    validAnswer = false; // * Changed to false for the next round
    playerSelection = ""; // * Reset playerSelection to ''
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
