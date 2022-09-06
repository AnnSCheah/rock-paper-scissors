console.log("Hello World! Rock Paper Scissors Time!");

let playerScore = 0;
let computerScore = 0;

const result = document.querySelector(".result");
let playScore = document.querySelector(".p-score");
let compScore = document.querySelector(".c-score");

// * Event Listener that calls the playRound function
const buttons = document.querySelectorAll(".button-container button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (playerScore == 5 || computerScore == 5) {
      return; // * stops the function from running after a winner is declared
    }
    result.textContent = playRound(e.currentTarget.value);
    playScore.textContent = playerScore;
    compScore.textContent = computerScore;
    checkScore();
  });
});

const winner = document.querySelector(".winner");

// * Reset the game
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  playScore.textContent = computerScore = 0;
  compScore.textContent = playerScore = 0;
  result.textContent = "";
  winner.textContent = "";
});

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

// * The logic of the game
function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
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

// * The function to start the game.
function game() {
  // * Setting up the game
  let validAnswer = false;
  let playerSelection = "";
  playerScore = 0;
  computerScore = 0;

  for (i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();

    // * Prompt user for a valid answer using while loop
    while (!validAnswer) {
      playerSelection = prompt(`Round ${i + 1}\nRock Paper Scissors?`, "");

      if (playerSelection == null) {
        alert("Cancelled");
        return; // * Breaks out of the function and nested loops
      }

      // * To make user input case insensitive
      playerSelection = playerSelection.toLowerCase();

      if (
        playerSelection == "" ||
        (playerSelection != "rock" &&
          playerSelection != "paper" &&
          playerSelection != "scissors")
      ) {
        alert("Please enter a valid input.");
      } else {
        validAnswer = true;
      }
    }

    // * playRound function is called to determine winner
    console.log(playRound(playerSelection, computerSelection));

    // * Resetting variable for next round
    validAnswer = false;
    playerSelection = "";
  }
  calculateScore();
}

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

function checkScore() {
  if (computerScore == 5) {
    winner.textContent = "COMPUTER WINS!";
  }
  if (playerScore == 5) {
    winner.textContent = "PLAYER WINS!";
  }
}
