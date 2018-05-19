//Create a secret number
var secretNumber = 15;

// ask user to guess a number
// Need to add (NUMBER) to convert guess string to integer
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// check if guess is right
if(guess === secretNumber){
	alert("YOU GOT IT RIGHT!!!");
}

else if(guess > secretNumber){
	alert("To high, guess again.");
}

else {
	alert("To low, guess again.");
}