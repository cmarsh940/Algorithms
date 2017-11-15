function arrayToMap(arr1, arr2){
    var output = {};
    for(var i = 0; i < arr1.length; i++){
        output[arr1[i]] = arr2[i];
    }
    return output;
}

console.log(arrayToMap(['name', 'age', 'email'], ['Cam', '27', 'cam@cam.cam']))