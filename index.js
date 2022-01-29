

var d1 = Math.floor(Math.random()*6)+1;
var d2 = Math.floor(Math.random()*6)+1;

var ch1= "dice"+d1+".png";
var ch2= "dice"+d2+".png";

document.querySelector(".img1").setAttribute("src","images/"+ch1);
document.querySelector(".img2").setAttribute("src","images/"+ch2);

if(d1>d2){
  document.querySelector("h1").textContent = "Player 1 Win";
}else if(d2>d1){
  document.querySelector("h1").textContent = "Player 2 Win";
}else {
  document.querySelector("h1").textContent = "I Win";
}
