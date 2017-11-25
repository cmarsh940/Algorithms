//return true if the string in the first element of 
//the array contains all of the letters of the string 
//in the second element of the array

function mutate(arr){
	for(var i in arr){
		arr[i] = arr[i].toLowerCase();
	}

	for(var j = 0; j < arr[1].length; j++){
		if(arr[0].indexOf(arr[1][j]) < 0){
			return false;
		}
	}
	return true;
}

var result = mutate(['hello', 'hel']);
console.log(result);