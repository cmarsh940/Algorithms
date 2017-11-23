//Given an array x (e.g. [1,5, 10, 7, -2]), create an algorithm that
//shifts each number by one (to the front).  For example when the program 
//is done x (assuming it was [1,5,10,7,-2]) should become [5,10,7,-2, 0].

function shift(num, arr){
	var length = arr.length;
	var idx;
	for(var i = 0; i < length; i++){
		if(i + num > length - 1){
			arr[i] = 0;
		} else {
			arr[i] = arr[i + num];
		}
	}
	return arr;
}

var result = shift(2,[1,2,3,4,5])
console.log(result);