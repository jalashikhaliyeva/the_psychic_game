const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const optionsLeft = document.querySelector("#optionsLeft");
const yourOptions = document.querySelector("#yourOptions");

function getRandomElement() {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let randomLetter = letters[Math.floor(Math.random() * letters.length)];
  return randomLetter;
  // console.log(randomLetter);
}
let randomLetter = getRandomElement();
let wins = 0;
let loses = 0;
let guessesLeft = 10;
let guessedLetters = [];

function resetGame() {
  guessesLeft = 10;
  guessedLetters = [];
  randomLetter = getRandomElement();
  updateDisplay();
}

document.addEventListener("keypress", function (event) {
  const userGuess = event.key.toLowerCase();

  guessedLetters.push(userGuess);

  if (randomLetter == userGuess) {
    wins++;
    resetGame();
  } else {
    guessesLeft--;
    if (guessesLeft === 0) {
      loses++;
      resetGame();
    }
  }
  updateDisplay();
});

function updateDisplay() {
  win.textContent = "Wins : " + wins;
  lose.textContent = "Loses : " + loses;
  optionsLeft.textContent = "Guesses Left: " + guessesLeft;
  yourOptions.textContent = "Your Guesses so far: " + guessedLetters;
}
