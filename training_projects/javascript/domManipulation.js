

// Insted of this:
/* 
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";
*/




var hl = document.getElementById("highlight");
var h1 = document.querySelector("h1");

/* 
	1. First create classes defined in css 
	2. Use the created classes in the css sheet with the variables defined above to apply manipulate elements. */
h1.classList.add("eBorder");
h1.classList.remove("eBorder");
hl.classList.add("eBig");
hl.classList.remove("eBig");
hl.classList.toggle("eBig");
