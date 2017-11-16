function truncate(str, num){
	if(num >= str.length){
		return str;
	}
	if(num > 3){
		str = str.slice(0, num -3);
	} else {
		str = str.slice(0, num);
	}
	str += "..."
	return str;
}

var result = truncate("A-1", 1)
console.log(result);