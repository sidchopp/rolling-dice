'use strict';

// Selecting Elements..
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

// to give some variables global scope, let's define them
let scores, currentScore, activePlayer, playing;

// Starting conditions..
const init = function () {
  // we define an array for the total scores the first zero is for 1st player and 2nd zero is for 2nd player
  scores = [0, 0];
  // to select which player is the active player. 
  activePlayer = 0;
  // to store the initial score 
  currentScore = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  // if a class is already there and we still add it, JS gives us no error and same is true for remove
  // so these two commands below ensure that we get back to player0 as the default player to start the game
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

}

init();

// switch to next player. 
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // console.log(activePlayer);
  currentScore = 0;
  // toggle will remove a class if that class is there OR add a class if it is not there.
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}


// Rolling dice functionalty(Only if playing is true)..

btnRoll.addEventListener('click', function () {

  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the Dice Image acc to the Dice number
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`

    // 3. Check if rolled number 1: if true, switch to next player,if false: add the dice roll
    if (dice !== 1) {
      // Add dice value to current socre
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }

})

// when hold button is clicked( only if playing is true)

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score >=50: 
    if (scores[activePlayer] >= 50) {
      //finish the game
      playing = false;
      diceEl.src = `winner.jpg`
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      //3. if not : switch to next player
      switchPlayer();
    }
  }
});

// resetting the game to its initial conditions when new game button is clicked

btnNew.addEventListener('click', init);






