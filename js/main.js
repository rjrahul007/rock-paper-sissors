const computerPlay = () => {
  let arr = ["ROCK", "PAPER", "SCISSORS"];
  let randomNum = Math.floor(Math.random() * 3);
  return arr[randomNum];
};

let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection, computerSelection) => {
  let playerCap = playerSelection.toUpperCase();
  if (playerCap === computerSelection) {
    console.log(`It's a tie! ${playerCap} can't beat ${computerSelection}`);
  } else if (playerCap === "PAPER" && computerSelection === "SCISSORS") {
    computerScore++;
    console.log("You lose! Scissors beats paper");
  } else if (playerCap === "SCISSORS" && computerSelection === "ROCK") {
    computerScore++;
    console.log("You lose! Rock beats scissors");
  } else if (playerCap === "ROCK" && computerSelection === "PAPER") {
    computerScore++;
    console.log("You lose! Paper beats rock");
  } else {
    playerScore++;
    console.log(`You win! ${playerCap} beats ${computerSelection}`);
  }
};

// const game = () => {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt("Type you weapon of choice", "");
//     playRound(playerSelection, computerPlay());
//   }
//   if (computerScore > playerScore) {
//     console.log("Computer wins, HAHAHAHAHHAHAH");
//   } else if (computerScore === playerScore) {
//     console.log("It's a TIE!!!!!!!");
//   } else {
//     console.log("YOU WIN HURRAYYYYYYYYYYY!");
//   }
// };

// game();
