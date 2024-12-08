var age=25;
function displayAge(){
  console.log("age is "+age);
  function changeAge(){
    age=35;
  console.log("updated age is "+age);
  }
  changeAge();
} 

displayAge();
