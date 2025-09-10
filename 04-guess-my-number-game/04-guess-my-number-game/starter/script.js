'use strict';

// DOM Element Selection
const messageEl = document.querySelector( ".message");
console.log(messageEl);
console.log(messageEl.textContent);
// messageEl.textContent = "Hello from javascript";

const scoreEl = document.querySelector('.score');
console.log("Score element:", scoreEl);
// scoreEl.textContent = "50";

const numberEl = document.querySelector(".number");
numberEl.textContent = 15;

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = 100;

const guestEl = document.querySelector('.guess');
// guessEl.value = 12;

let secretNumber = Math.trunc(Math.random()) * 20 + 1;
console.log('secret Number:', secretNumber);

// track the current score// this is your current score
let score = 20;
let highscore = 0;

document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highscore;

console.log('Game state initialized');

// Basic Game Logic

document.querySelector('.check').addEventListener('click', function () {
  // once check button is clicked, do this below
  console.log('Check button is clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);
 
  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too High!');
    document.querySelector('.message').textContent = 'Too High!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
  }
});