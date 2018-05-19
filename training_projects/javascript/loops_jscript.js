// Print all numbers between -10 and 19
console.log("PRINTING ALL NUMBERS BETWEEN -10 ANB 19")

var counter = -10

while(counter < 20){
	console.log(counter);
	counter++;
}

// Print even numbers between 10 and 40
console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 and 40")
var counter = 10

while(counter <= 40){
	console.log(counter);
	counter+=2;
}


// Print odd numbers between 300 and 333
console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 and 333")
var counter = 300

while(counter <= 333){
	if(counter % 2 !== 0){
		console.log(counter);
	}
	counter+=1;
}


// Print all number divisible by 5 AND 3 between 5 and 50
console.log("PRINTING number divisible by 5 AND 3 between 5 and 50")
var counter = 5

while(counter <= 50){
	if(counter % 5 === 0 && counter % 3 === 0){
		console.log(counter);
	}
	counter+=1;
}