var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// REACTORING var easyBtn = document.querySelector("#easyBtn");
// REFACTORING var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelector(".mode");


// ********REFACTORING THIS BELOW *********
/*   
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	//Generate 3 new colors
	colors = generateRandomColors(numSquares);
	//Generate a new picked color
	pickedColor = pickColor();
	//Display 3 new colors
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
	//Remove 3 bottom squars and colors
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	//Generate 3 new colors
	colors = generateRandomColors(numSquares);
	//Generate a new picked color
	pickedColor = pickColor();
	//Display 3 new colors
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
	
});
*/


for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("cllick", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		// REPLACING THE FOLLOWING WITH ONE LINE
		//if(this.textContent === "Easy"){
		//	numSquares = 3;
		//} else {
		//	numSquares = 6;
		//}
		this.testContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}

function reset(){
	// figure out how many squares to show
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	// update page to reflect changes
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares (loop)
	for(var i =0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[1].style.display="none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
/* REFACTORING 
	// Click needs to generate all random colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors"
	messageDisplay.textContent = ""
	//change colors of squares (loop)
	for(var i =0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
*/
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares 
	squares[i].addEventListener("click", function(){
		//grab color of cliecked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to arr
	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

	function randomColor(){
		//pick a red from 0 - 255
		var r = Math.floor(Math.random() * 256);
		//pick a green from 0 - 255
		var g = Math.floor(Math.random() * 256);
		//pick a blue from 0 - 255
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
}
