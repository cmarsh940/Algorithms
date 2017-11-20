function uniqueIndex(string){
	var dictionary = {};
	var solo = -1;
	for(i in string){
		if(!dictionary[string[i]]){
			dictionary[string[i]] = 1;
		}
		else{
			dictionary[string[i]]++;
		}
	}
	for(i in dictionary){
		if(dictionary[i] == 1){
			solo = i;
			break;
		}
	}
	for(i in string){
		if(string[i] == solo){
			return i;
		}
	}
	return solo;
}

var result = uniqueIndex('aaa');

console.log(result);