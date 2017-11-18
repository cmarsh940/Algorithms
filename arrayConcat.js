function arrayConcat(arr1, arr2){
    var output = [];
    for(var i = 0; i < arr1.length; i++){
        // output.push(arr1[i]);
        output[i] = arr1[i];
    }
    for(var j = 0; j < arr2.length; j++){
        // output.push(arr2[j]);
        output[output.length] = arr2[j];
    }
    return output;
}

console.log(arrayConcat([1,2,3], [4,5,6]))