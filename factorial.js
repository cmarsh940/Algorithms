// Write a function iFactorial that behaves like the following:

// iFactorial(1) = 1                  => 1
// iFactorial(2) = 2 * 1              => 2
// iFactorial(3) = 3 * 2 * 1          => 6
// iFactorial(4) = 4 * 3 * 2 * 1      => 24
// iFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120

//Make sure the function is iterative, not recursive.


function iFactorial(num){
	var output = 1;
	for(var i = 1; i < num + 1; i++){
		output *= i;
	}
	return output;
}

var result = iFactorial(5);
console.log(result);