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
    winningNum = getRandomNum(min, max)/* Hoisted function  for winning num and is defined below */,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again Event Listener - Used when user looses
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        // reload page
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    //console.log(guess);

    // Validate
    // If guess is not a number or guess is less than min or guess is greater than max
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

// Check if guess is the winning number
if(guess === winningNum){
    // Game over - won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);

} else {
    // Wrong number - subtract one turn from guesses left
    guessesLeft -= 1;

    if(guessesLeft === 0){

        // game over - lost
        gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    } else {

        // Game continues - answer wrong

        // Change border color
        guessInput.style.borderColor = 'red';

        // Clear the input
        guessInput.value = '';

        // Tell user its the wrong number
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
}
});

// Game over function
function gameOver(won, msg){
    // use a turnary 
    let color;
    won === true ? color = 'green' : color = 'red';
    
    //Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set Message
    setMessage(msg);

    // Play Again - This will add play-again to guessBtn class and value
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
    }

    // Get Winning Number
    function getRandomNum(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
// console.log(winningNum); // Provides winning number
 
// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
