function factorial(num){
  var fact=1;
  if(num===0||num<0){
    console.log("Invalid input")
  }else{
    for(let i=1;i<=num;i++){
    fact=fact*i;
    }console.log(fact);
}
}
factorial(5);

factorial(0);

factorial(-1);

