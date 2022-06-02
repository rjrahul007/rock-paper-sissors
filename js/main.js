const weaponEl = document.querySelectorAll(".img-div");
const userEl = document.getElementById("user-score");
const computerEl = document.getElementById("computer-score");
const message = document.getElementById("message");
const buttonEl = document.getElementById("reset");
const chanceEl = document.getElementById("chance-left");
let playerSelection = "";
let gameOver = false;
weaponEl.forEach((el) => {
  el.addEventListener("click", () => {
    playerSelection = el.ariaValueText;
    game();
  });
});

const computerPlay = () => {
  let arr = ["ROCK", "PAPER", "SCISSORS"];
  let randomNum = Math.floor(Math.random() * 3);
  return arr[randomNum];
};

let playerScore = 0;
let computerScore = 0;
let userClicked = 0;
let chanceLeft = 5;

const playRound = (playerSelection, computerSelection) => {
  let playerCap = playerSelection.toUpperCase();
  if (playerCap === computerSelection) {
    message.textContent = `It's a tie! ${playerCap} can't beat ${computerSelection}`;
  } else if (playerCap === "PAPER" && computerSelection === "SCISSORS") {
    computerScore++;
    message.textContent = "You lose! Scissors beats paper";
  } else if (playerCap === "SCISSORS" && computerSelection === "ROCK") {
    computerScore++;
    message.textContent = "You lose! Rock beats scissors";
  } else if (playerCap === "ROCK" && computerSelection === "PAPER") {
    computerScore++;
    message.textContent = "You lose! Paper beats rock";
  } else {
    playerScore++;
    message.textContent = `You win! ${playerCap} beats ${computerSelection}`;
  }
  chanceLeft--;
};

const game = () => {
  if (!playerSelection) return;
  if (!gameOver) {
    playRound(playerSelection, computerPlay());
    userEl.textContent = playerScore;
    computerEl.textContent = computerScore;
    chanceEl.textContent = chanceLeft;
  }
  if (chanceLeft === 0) {
    gameOver = true;
    if (computerScore > playerScore) {
      message.textContent = "Computer wins, HAHAHAHAHHAHAH!!!";
    } else if (computerScore === playerScore) {
      message.textContent = "Holy Molly!! It's a TIE!!!!!!!";
    } else {
      message.textContent = "YOU WIN HURRAYYYYYYYYYYY!";
    }
    buttonEl.classList.add("btn-show");
    buttonEl.addEventListener("click", () => reset());
  }
};

function reset() {
  gameOver = false;
  playerScore = 0;
  computerScore = 0;
  chanceLeft = 5;
  userEl.textContent = playerScore;
  computerEl.textContent = computerScore;
  chanceEl.textContent = chanceLeft;
  playerSelection = "";
  message.textContent = "Good Luck! Human 😉";
  buttonEl.classList.remove("btn-show");
}
