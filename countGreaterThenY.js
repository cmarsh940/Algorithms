function countGreaterThan(num, arr){
	var length = arr.length;
	var count = 0;
	for(var i = 0; i < length; i ++){
		if(arr[i] > num){
			count++
		}
	}
	return count;
}

var result = countGreaterThan(2, [1,2,3,4,5]);
console.log(result);