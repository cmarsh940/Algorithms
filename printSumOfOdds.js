function printSumOfOddsTo(num){
	var sum = 0;
	for(var i = 1; i < num + 1; i += 2){
		sum += i;
	}
	return sum;
}

var result = printSumOfOddsTo(5000);
console.log(result);