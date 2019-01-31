// var randomNumber = Math.random();
// var diceRollOne = Math.floor((randomNumber * 6) + 1);
//
// switch (diceRollOne) {
//   case 1:
//     document.getElementsByTagName("img")[0].setAttribute("src","images/dice1.png");
//     break;
//   case 2:
//     document.getElementsByTagName("img")[0].setAttribute("src","images/dice2.png");
//     break;
//   case 3:
//     document.getElementsByTagName("img")[0].setAttribute("src","images/dice3.png");
//     break;
//   case 4:
//     document.getElementsByTagName("img")[0].setAttribute("src","images/dice4.png");
//     break;
//   case 5:
//     document.getElementsByTagName("img")[0].setAttribute("src","images/dice5.png");
//     break;
//   case 6:
//     document.getElementsByTagName("img")[0].setAttribute("src","images/dice6.png");
// }
//
// var randomNumber = Math.random();
// var diceRollTwo = Math.floor((randomNumber * 6) + 1);
//
// switch (diceRollTwo) {
//   case 1:
//     document.getElementsByTagName("img")[1].setAttribute("src","images/dice1.png");
//     break;
//   case 2:
//     document.getElementsByTagName("img")[1].setAttribute("src","images/dice2.png");
//     break;
//   case 3:
//     document.getElementsByTagName("img")[1].setAttribute("src","images/dice3.png");
//     break;
//   case 4:
//     document.getElementsByTagName("img")[1].setAttribute("src","images/dice4.png");
//     break;
//   case 5:
//     document.getElementsByTagName("img")[1].setAttribute("src","images/dice5.png");
//     break;
//   case 6:
//     document.getElementsByTagName("img")[1].setAttribute("src","images/dice6.png");
// }
//
// if (diceRollOne > diceRollTwo){
//   document.getElementsByTagName("h1")[0].innerText = "Player 1 wins";
// } else if (diceRollOne < diceRollTwo) {
//   document.getElementsByTagName("h1")[0].innerText = "Player 2 wins";
// } else{
//   document.getElementsByTagName("h1")[0].innerText = "Draw";
// }


var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
