

let randomNumber = parseInt(Math.random() * 100 + 1);
const submit=document.querySelector('#subt'); //this will store the submit value for event listener
const userInput=document.querySelector('#guessField');// guess number will be stored 
const guessSlot=document.querySelector('.guesses'); // number of guesses
const remaining=document.querySelector('.lastResult'); // last guess
const lowOrHi=document.querySelector('.lowOrHi'); 
const startOver=document.querySelector('.resultParas'); 

const p = document.createElement('p'); // creating a para 

let prevGuess = []; // storing the guessed number 
let numGuess = 1;// total number guessed

let playGame = true; // to check if the person is valid or not 

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) { // to check of the guessed number is correct 
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) { //if the value is equal to random, if high or low then random
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {  // cleaning the value and also updating the array 
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {   // printing the message  high or low 
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {// ending the game 
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {// starting new game
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

