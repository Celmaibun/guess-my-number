'use strict';
const input = document.querySelector('.guess');
const confirmBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const scoreSpan = document.querySelector('.score');
const highscoreSpan = document.querySelector('.highscore');
const messageSpan = document.querySelector('.message');
const numberSpan = document.querySelector('.number');

let generatedNumber = 0;
let score = 20;
let highscore = 0;

const guessIt = function () {
  let inputValue = Number(input.value);

  if (inputValue === generatedNumber) {
    messageSpan.textContent = `BRAWO KURWA, BRAWO DEBILU`;
    highscore += score;
    highscoreSpan.textContent = highscore;
    numberSpan.textContent = generatedNumber;
    document.body.style = 'background-color: #60b347;';
  } else if (inputValue > generatedNumber) {
    messageSpan.textContent = 'TOO HIGH!';
    reduceScore();
  } else if (inputValue < generatedNumber) {
    reduceScore();
    messageSpan.textContent = 'TOO LOW!';
  }
};

const reduceScore = () => {
  score--;
  scoreSpan.textContent = score;
};

const resetGame = function () {
  const createNumber = function () {
    let number = 0;
    number = Math.round(Math.random() * 20 + 1);
    return number;
  };
  document.body.style = 'background-color: #222;';
  score = 20;
  scoreSpan.textContent = score;
  numberSpan.textContent = '?';
  input.value = '';
  messageSpan.textContent = 'Zacznij zgadywać...';
  generatedNumber = createNumber();
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

//EASTER EGG SMIECIU JEBANY, DAWAJ NA QUADY CHUJU
