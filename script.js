'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// a better way to get select element by id is:
//const score2 = document.getElementById('score--1').textContent = 0;

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// to store the initial score 
let currentScore = 0;

// Rolling dice functionalty

btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the Dice Image acc to the Dice number
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`

  // 3. Check if rolled number 1: if true, switch to next player,if false: add the dice roll
  if (dice !== 1) {
    // Add dice value to current socre
    currentScore += dice;
    current0El.textContent = currentScore; // change later
  } else {
    // switch to next player
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  }


})



