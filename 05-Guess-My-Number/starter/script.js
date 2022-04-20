'use strict';
let secretNumber;
let score;
let highscore = 0;
reset(20);

document.querySelector('.check').addEventListener('click', mainGameLogic);

document.querySelector('.again').addEventListener('click', function () {
  reset(20);
  document.querySelector('.check').addEventListener('click', mainGameLogic);
});

function reset(scoreNum) {
  secretNumber = Math.trunc(Math.random() * scoreNum) + 1;
  score = scoreNum;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
}

function mainGameLogic(event) {
  const guess = Number(document.querySelector('.guess').value);

  if (score <= 1) {
    document.querySelector('.message').textContent = '💥 You lost the game!';
    score = 0;
  } else if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    event.currentTarget.removeEventListener('click', mainGameLogic);
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low!';
    score--;
  }

  document.querySelector('.score').textContent = score;
}
