var button = document.querySelector("button");

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});;


/*
var isPurple = false;

button.addEventListener("click", function(){
		// If white 
		// make it purple
	// else
		// make it white
	if(isPurple){
		document.body.style.background = "white";
		isPurple = false;
	} else {
		document.body.style.background = "purple";
	}
	isPurple = !isPurple;
});
*/