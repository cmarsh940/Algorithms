//return true if the string in the first element of 
//the array contains all of the letters of the string 
//in the second element of the array

function mutate(arr){
	for(var i = 0; i < arr[1].length; i++){
		for(var x = 0; x < arr[0].length; x++){
			if(arr[0][x] == arr[1][i]){
				break;
			}
			else if (x == arr[0].length - 1){
				return false;
			}
		}
	}
	return true;
}

var result = mutate(['hello', 'hel']);
console.log(result);