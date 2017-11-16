function mergeSort(arr){
	var length = arr.length;
	if(length < 2){
		return arr;
	}
	var left = arr.splice(0, length / 2);
	return merge(mergeSort(left), mergeSort(arr));
}

function merge(left, right){
	var output = [];
	while(true) {
		if(left.length == 0){
			return output.concat(right);
		}
		if(right.length == 0){
			return output.concat(left);
		}
		if(left[0] < right[0]){
			output.push(left.shift());
		} else {
			output.push(right.shift());
		}
	}
}

var result = mergeSort([9,8,7,6,5,4,3,2,1]); //worst case
var result2 = mergeSort([1,2,3,4,5,6,7,8,9]); //best case 
var result3 = mergeSort([13,55,61,1,9,3,50,78,41,29,8]); //random
console.log(result);
console.log(result2);
console.log(result3);