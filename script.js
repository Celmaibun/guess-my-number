'use strict';
const input = document.querySelector('.guess');
const confirmBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const scoreSpan = document.querySelector('.score');
const highscoreSpan = document.querySelector('.highscore');
const messageSpan = document.querySelector('.message');
const numberSpan = document.querySelector('.number');
const guessSpan = document.querySelector('.header-guess');

const generateNumber = () => Math.round(Math.random() * 20 + 1);
const displayMessage = mess => (messageSpan.textContent = mess);

let generatedNumber = generateNumber();
let score = 20;
let highscore = 0;
let correct = new Audio('correct.mp3');
let wrong = new Audio('wrong.mp3');

const guessIt = function () {
  let inputValue = Number(input.value);
  if (score <= 0) {
    displayMessage('YOU LOSE!');
    return;
  }
  if (inputValue < 1 || inputValue > 20) {
    displayMessage('Numbers from 1-20!');
  } else if (inputValue === generatedNumber) {
    displayMessage(`Correct number!`);
    highscore = score;
    highscoreSpan.textContent = highscore;
    numberSpan.textContent = generatedNumber;
    document.body.style = 'background-color: #60b347;';
    correct.play();
  } else if (inputValue !== generatedNumber) {
    wrong.play();
    displayMessage(inputValue > generatedNumber ? 'TOO HIGH!' : 'TOO LOW!');
    reduceScore();
  }
  console.log(generatedNumber);
  console.log(inputValue);
};

const reduceScore = () => {
  score--;
  scoreSpan.textContent = score;
  input.value = '';
};

const resetGame = function () {
  document.body.style = 'background-color: #222;';
  score = 20;
  highscore = highscore;
  highscoreSpan.textContent = highscore;
  scoreSpan.textContent = score;
  numberSpan.textContent = '?';
  input.value = '';
  messageSpan.textContent = 'Start guessing...';
  generatedNumber = generateNumber();
};
resetGame();
input.addEventListener('keypress', function (e) {
  console.log(e);
  if (e.key === 'Enter') {
    guessIt();
  }
});
confirmBtn.addEventListener('click', guessIt);
againBtn.addEventListener('click', resetGame);
