function iSum(num){
	var sum = 0;
	for(var i = 1; i < num + 1; i++){
		sum += i;
	}
	return sum;
}

var result = iSum(5);
console.log(result);