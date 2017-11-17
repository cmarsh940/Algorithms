function removeNegatives(arr){
	var length = arr.length;
	var count = 0;
	for(var i = 0; i < length; i++){
		if(arr[i] < 0){
			count++;
		} 
		else if (count > 0) {
			arr[i - count] = arr[i];
		}
	}
	while(count--){
		arr.pop();
	}
	return arr;
}

function removeNegativesShorthand(arr){
	return arr.filter(function(num){
		if(num == 0) return 0;
		else if(num > -1) return num;
	});
}

var result = removeNegatives([0,-1,2,-3,4,-5,6])
console.log(result);