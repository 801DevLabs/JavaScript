/*
====================================
NUMBER GUESSER - WALIDATION AND WINNING CASE
====================================

GAME FUNCTIONS
 - Player must guess a number between a min and max
 - Player gets a certain amount of guesses
 - Notify player of guesses remaining
 - Notify the player of the correct answer if loose
 - Let player choose to play again

*/

// GAME VALUES
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3

// UI ELEMENTS
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message')

// ASSIGN UI MIN AND MAX
minNum.textContent = min
maxNum.textContent = max

// LISTEN FOR GUESS
guessBtn.addEventListener('click', function(){
  let guess = parseInt((guessInput.value))

  // VALIDATE
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }

  // CHECK IF WON
  if(guess === winningNum) {
    // BLOCK INPUT
    guessInput.disabled = true
    // CHANGE BORDER COLOR
    guessInput.style.borderColor = 'green'
    // SET MESSAGE
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green')
  }
})

// SET MESSAGE
function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
}