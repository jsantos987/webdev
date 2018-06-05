var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p1");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;



p1Button.addEventListener("click", function(){
	p1Score++;
	p1Display.textContent = p1Score;
});



