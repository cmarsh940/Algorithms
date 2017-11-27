// Given an array of numbers return true if there is a place to split the array so that 
// the sum of the numbers on one side is equal to the sum of the numbers on the other side

function balance(arr){
	for(var i = 1; i < arr.length; i++){
		var first = arr.slice(0, i);
		var last = arr.slice(i);
		if(sum(first) == sum(last)){
			return true;
		}
	}
	return false;
}

function sum(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum;
}

var result1 = balance([1,2,3,4]);
console.log(result1);
var result2 = balance([1,6,4,11]);
console.log(result2);

//a more efficient way

function balance2(arr){
	var sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum += arr[i]
	}
	var halfSum = 0;
	for(let i = 0; i < arr.length; i++){
		if(sum / 2 == halfSum){
			return true
		}
		halfSum += arr[i];
	}
	return false
}

var result3 = balance2([1,2,3,3,3]);
console.log(result3);