
//Example 1 - var named obj which contains a method "add"

var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["bob", "tina"],
	add: function(x,y) {
		return x + y;
	}
}


//Example 2 - var named DOG and CAT with method named "speak"

var dog = {};
dog.speak = function(){
	return "WOOF, WOOF, WOOF!!!!!";
}

var cat = {};
cat.speak = function(){
	return "MEOW, MOEW, MOEW!!!!";
}