console.log("CONNECTED");


//=================================================
//*** printReverse - prints provided array in reverse
function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i --){
		console.log(arr[i]);
	}
}

// printReverse([3,6,2,5]);


//=================================================
//*** isUniform returns true if all elements in array are identical
function isUniform(arr) {
	var first = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

//*** sumArray() - takes a single array returns sume of all numbers
function sumArray(arr){
	var total =  0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}


//*** max() - returns the maximum number in the array
function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
	//for (var item in array = 1 "while" item less than length of array "then" add 1 + item.)	
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}





