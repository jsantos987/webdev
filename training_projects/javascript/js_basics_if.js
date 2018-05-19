
// Get age and convert it to a number (prompt always returns a string)
var age = Number(prompt("What is your age?"));

// if are is a negative
if(age < 0){
	console.log("Come back once you've out of the wonmb");
}

//if age is 21
if(age == 21){
	console.log("Happy 21st Birthday!!");
}


//if age is odd
//(not evently divisible by two)
if(age % 2 !== 0){
	console.log("Your age is odd!");
}

//if age is a perfect square
if(age % Math.sqrt(age) === 0){
	console.log("Your age is a perfect square!");
}