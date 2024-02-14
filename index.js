var randomNumber1 =Math.floor(Math.random()*6+1);

var diceImage= document.querySelector(".img1");
diceImage.src='dice'+randomNumber1+'.png';

var randomNumber2= Math.floor(Math.random()*6+1);
var diceImage= document.querySelector(".img2");
diceImage.src="dice"+randomNumber2+".png";

if(randomNumber1 > randomNumber2){
    document.getElementById("hi").innerHTML="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f6a9.svgPlayer 1 wins";
}else if(randomNumber2 > randomNumber1){
    document.getElementById("hi").innerHTML="Player 2 winshttps://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f6a9.svg";
}else{
    document.getElementById("hi").innerHTML="DRAW"; 
}