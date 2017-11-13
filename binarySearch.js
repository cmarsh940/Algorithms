function binarySearch(num,arr) {
  var a1 = arr.slice(0, arr.length/2);
  var a2 = arr.slice(arr.length/2, arr.length);
  console.log(a1);
  console.log(a2);

  
  if (num <= a1[a1.length-1]){
    if (a1.length > 1){
      return binarySearch(num, a1);
    }
    else if(a1.length == 1 && arr[0] == num){
      return "your number is in the list";
    }
    else{
      return "number is not in list";
    }
  }
  if (num >= a2[a2.length-1]){
    if (a2.length > 1){
      return binarySearch(num, a2)
    }
    else if(a2.length == 1 && arr[0] == num){
      return "your number is in the list";
    }
    else{
      return "number is not in list";
    }
  }
}

binarySearch(2, [1,2,3,4,5,6,7,8,9,10])