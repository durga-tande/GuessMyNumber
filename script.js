'use strict';

//Selecting a random number
let number = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

//function for displaying the message

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//function for displaying the number

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //User dont put a number
  if (!guess) {
    displayMessage('👎 No number!');
  } else {
    //User guess correct number
    if (guess === number) {
      displayMessage('🎉 Correct Number!');

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.score').textContent = score;
      displayNumber(number);

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    //User guess incorrect number
    else if (guess !== number) {
      if (score > 1) {
        --score;
        document.querySelector('.score').textContent = score;

        displayMessage(guess < number ? '📉 Too low!' : '📈 Too high!');
      } else {
        displayMessage('💥You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

//resetting the game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  document.querySelector('.guess').value = '';

  //resetting the background color

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
