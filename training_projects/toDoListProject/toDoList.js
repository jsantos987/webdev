

/*
// Check off specific todos by clicking
$("li").click(function(){
	// IF li is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
		// turn it black
		$(this).css({
			color: "black",
			textDecoration: "none"
		});
	} 
	// else
	else {
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}

});

*/

// All the above refactored by creasting COMPLETED class and adding one line.

// Check off Specific Todos By Clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});