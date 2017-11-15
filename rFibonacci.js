function rFibonacci(num){
	if(num < 0){return null;}
	if(num == 0 || num == 1){
		return num;
	}
	return rFibonacci(num - 2) + rFibonacci(num - 1);
}

var result = rFibonacci(6);
console.log(result);