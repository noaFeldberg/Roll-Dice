
//variabels
var randomNumber1 = Math.floor((Math.random()*6)+1);        //random number between 1-6
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randonDiceImg1 = "images/dice"+randomNumber1+".png";
var randonDiceImg2 = "images/dice"+randomNumber2+".png";

//Dice for player 1
//we select based on our "img" tag.
//[0] - for the first image in the DOM tree
document.querySelectorAll("img")[0].setAttribute("src",randonDiceImg1);
document.querySelectorAll("img")[1].setAttribute("src",randonDiceImg2);

//Change the title for the wining dice
if(randomNumber1>randomNumber2){
  document.querySelector(".main-title").innerHTML = "🚩Player 1 Wins!"
}
else if (randomNumber1<randomNumber2){
    document.querySelector(".main-title").innerHTML = "Player 2 Wins!🚩"
}
else{
    document.querySelector(".main-title").innerHTML = "Draw!"
}
