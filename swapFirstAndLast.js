function swap(arr){
	var temp;
	var length = arr.length;
	temp = arr[0];
	arr[0] = arr[length - 1];
	arr[length - 1] = temp;
	return arr;
}

var result = swap([1,2,3,4,5])
console.log(result);