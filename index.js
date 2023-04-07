var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);
var arrayofImages = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];
var store1 = arrayofImages[randomNumber1];
var store2 = arrayofImages[randomNumber2];
document.getElementsByClassName("img1")[0].setAttribute("src", store1);
document.getElementsByClassName("img2")[0].setAttribute("src", store2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
