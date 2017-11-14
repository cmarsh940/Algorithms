function rFactorial(n){
  console.log(n);
  if(n == 1){
    return 1;
  }
  return n * rFactorial(n-1)
}

rFactorial(3)