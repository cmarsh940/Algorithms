function removeNeg(arr){
  var answer = [];
  var counter = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 0){
      answer[counter] = arr[i];
      counter++
    }
  }
  return answer;
}
removeNeg([0,-1,4,-8,-9,2])