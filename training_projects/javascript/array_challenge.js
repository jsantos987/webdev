var num = [];

var input = prompt("Add numbers to array");


while(input !== "quit"){
	//handle input
	if(input === "list"){
		listNumList();
	} else if(input === "new"){
		addNumList();
	} else if(input === "printReverse"){
		printReverseNumList();
	} else if(input === "isUniform"){
		isUniformNumList();
	} else if(input === "sumArray"){
		sumArrayNumList();
	} else if(input === "max"){
		maxNumList();
	}

		
	//ask again for new input
	input = prompt("what woud you like to do?");
}
console.log("Ok, YOU QUIT THE APP");



function listNumList(){
	console.log("******")
	num.forEach(function(num, i){
		console.log(i + ": " + num);
	});
	console.log("******")
}

function addNumeList(){
	//ask for a new todo
	var addNumList = prompt("Enter new number to list");
	//add to todos array
	num.push(addNumList);
	console.log("Added Number To List");
}	