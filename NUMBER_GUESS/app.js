/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let Player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');


// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Listen for guess
UIguessBtn.addEventListener('click', function(){
    let guess = parseInt(UIguessInput.value);
    //console.log(guess);

    // Validate
    // If guess is not a number or guess is less than min or guess is greater than max
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

// Check if is the winning number
if(guess === winningNum){
    //Disable input
    UIguessInput.disabled = true;
    // Change border color
    UIguessInput.style.borderColor = 'green';
    // Set Message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

} else {

}
});

// Set Message
function setMessage(msg, color){
    UImessage.style.color = color;
    UImessage.textContent = msg;
}
