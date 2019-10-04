
var hacker1 = prompt("The driver's name is: ");
console.log("The driver's name is: " + hacker1);

var hacker2 = prompt("The navigator's name is:");
console.log("The navigator's name is:" + hacker2);

var hk1 = hacker1.length;
var hk2 = hacker2.length;

if( hacker1.length > hacker2.length ){
  console.log("The Driver has the longest name, it has" + hacker1.length + "characters");
}else if(hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has" + hacker2.length + "characters");
}else{
  console.log("wow, you both got equally long names, " + hk1 + hk2  + "characters!!");
}
