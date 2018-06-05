

// Insted of this:
/* 
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";
*/




var hl = document.getElementById("highlight");
var h1 = document.querySelector("h1");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
var button = document.querySelector("button");
var para = document.getElementById("para");

/*
	1. First create classes defined in css 
	2. Use the created classes in the css sheet with the 
	variables defined above to apply manipulate elements. 
*/
h1.classList.add("eBorder");
h1.classList.remove("eBorder");
hl.classList.add("eBig");
hl.classList.remove("eBig");
hl.classList.toggle("eBig");


h1.addEventListener("click", function(){
	h1.style.background = "orange";
})


ul.addEventListener("click", function(){
	console.log("YOU CLICKED THE UL!");
});


for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "pink";
	});
}

button.addEventListener("click", changeText);

function changeText() {
	para.textContent = "Someone Clicked the button!";
}