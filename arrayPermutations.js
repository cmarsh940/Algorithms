function permuteArr(arr, sub=[], permArr=[]){
    var length = arr.length;
    if(length === 0){
        permArr.push(sub);
    }
    for(var i = 0; i < length; i++){
        var sub2 = sub.slice(0);
        sub2.push(arr[i]);
        var newArr = arr.slice(0);
        var first = arr.slice(0, i);
        newArr = first.concat(newArr.splice(i + 1));
        permuteArr(newArr, sub2, permArr);
    }
    return permArr;
}

console.log(permuteArr([1,2,3]));