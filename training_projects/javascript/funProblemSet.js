//isEven(4) True
function isEven(n) {
//return true if even
	if(n % 2 === 0) {
		return true;
	} 
//return false if odd
	else {
		return false
	}
}

//factorial(5);  //120 (FACTORIAL = 4! is  4x3x2x1) (-1 stop when === 0)
function factorialize(n) {
// return -1  if number is a negative
	if(n < 0)
		return -1;
// return 1 if number is 0
	else if (n == 0)
		return 1;
// calculate factorial (4) factorial 4 Do 3 * 2 * 1 = 24
	else {
		return (n * factorialize(n -1));
	}
}


// KebabToSnake replaces dashes (-) with underscores (_)
 function kebabToSnake(str) {
// 	replace all '-' with "_"'s
 	var newStr = str.replace(/-/g , "_");
// return str with replaced dashes 
 	return newStr;
}