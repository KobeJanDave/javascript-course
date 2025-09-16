'use strict';

// CONSTANTS
const MIN_NUMBER = 1;
const MAX_NUMBER = 20; 
const START_SCORE = 20;

// Cached selectors
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

// UI Helper
function setMessage(text) {
  messageEl.textContent = text;
}

function setNumber(value) {
  numberEl.textContent = value;
}

function setScore(value) {
  scoreEl.textContent = value;
}

function setHighscore(value) {
  highscoreEl.textContent = value;
}

function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}

function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}

function clearInput() {
  guessEl.value = '';
}

// Game state
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}

renderInitialUI();


// Basic Game Logic

checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);

// Input validation
// New
  if (!guess) return setMessage('please input a number');

 
  if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    return setmessage(`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}`);
  }

  if (guess === secretNumber) {
    setmessage ('You have won!!!');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput('');
    return;
     }

  // Wrong guess
  setMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
  score--;
  setScore(score);
  
  if (score <= 0) {
    setMessage('Game Over. Please press again!');
    setNumber(secretNumber);
    setBackground('red');
    setScore(0);
    disablePlay(true);
    clearInput();
    return;
  }
});

againBtnEl.addEventListener('click', function () {
  resetGameState
  renderInitialUI();
});

// Allow pressing Enter to submit guess
guessEl.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    checkBtnEl.click();
  }
});

// Initial render
renderInitialUI();


