function longestWord(str){
	var arr = str.split(' ');
	str = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i].length > str.length){
			str = arr[i];
		}
	}
	return str.length;
}

console.log(longestWord('There once was a green cat, Who had a green hat, who lived with a yellow rat'));