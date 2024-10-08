"use strict";

console.log("Welcome to a friendly(ish) game of rock, paper, scissors!");

function getHumanChoice() {
  let userChoice = prompt("Choose between rock/paper/scissors: ");

  userChoice = userChoice.toLowerCase();

  if(userChoice == "rock") {
    return "rock";
  } else if(userChoice == "paper") {
    return "paper";
  } else if(userChoice == "scissors") {
    return "scissors";
  } else {
    return "Invalid choice!";
  }
}

function getComputerChoice() {
  let randomObject = Math.floor(Math.random() * 3);
  
  if(randomObject == 0) {
    return "rock";
  } else if(randomObject == 1) {
    return "paper";
  } else if(randomObject == 2) {
    return "scissors";
  }
}

let roundNum = 0;

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if(humanChoice == "rock" && computerChoice == "scissors") {
      humanScore += 1;
      console.log(`You WIN! ${humanChoice} beats ${computerChoice}.`);
    } else if(humanChoice == "rock" && computerChoice == "rock") {
      console.log("DRAW!");
    } else if(humanChoice == "paper" && computerChoice == "rock") {
      humanScore += 1;
      console.log(`You WIN! ${humanChoice} beats ${computerChoice}.`);
    } else if(humanChoice == "paper" && computerChoice == "paper") {
      console.log("DRAW!");
    }  else if(humanChoice == "scissors" && computerChoice == "paper") {
      humanScore += 1;
      console.log(`You WIN! ${humanChoice} beats ${computerChoice}.`);
    } else if(humanChoice == "scissors" && computerChoice == "scissors") {
      console.log("DRAW!");
    } else {
      computerScore += 1;
      console.log(`You LOSE! ${computerChoice} beats ${humanChoice}.`);
    }

    roundNum += 1;

    if (roundNum == 5) {
      if(humanScore < computerScore) {
        console.log("You lost the match! Try again.");
      } else if (humanScore == computerScore) {
        console.log("It's a draw!");
      } else {
        console.log("You won! Congratulations. :)");
      }
    }
  }

  playRound();
}

while(roundNum < 5) {
  playGame();
}
