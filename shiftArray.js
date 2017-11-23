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