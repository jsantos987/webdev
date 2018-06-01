var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");


while(input !== "quit"){
	//handle input
	if(input === "list"){
		listTodos();
	} else if(input === "new"){
		addTodo();
	} else if(input === "delete"){
		deleteTodo();
	}
		
	//ask again for new input
	input = prompt("what woud you like to do?");
}
console.log("Ok, YOU QUIT THE APP");



function listTodos(){
	console.log("******")
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("******")
}

function addTodo(){
	//ask for a new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log("Added Todo");
}	

function deleteTodo(){
	//ask for index to be deleted
	var index = prompt("Enter index of todo to delete");
	//delete to todo
	//splice()
	todos.splice(index, 1);
	console.log("Deleted Todo");
}