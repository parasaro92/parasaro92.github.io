function fact(num) {

  var i = 0;
  var fact = 1;

  while(i <= num){
    fact *= i;
    i += 1;
  }
}
fact(5);