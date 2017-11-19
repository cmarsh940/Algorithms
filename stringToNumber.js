function stringToNumber(str){
	var sum = 0;
	for(var i = 0; i < str.length; i++){
		var x = parseInt(str[i]);
		if(isNaN(x) === false){
			sum += x;
		}
	}
	return sum;
}

var result = stringToNumber('toda34');
console.log(result);