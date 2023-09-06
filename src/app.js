/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  document.querySelector(".Card2").classList.add(GenerateRandomCards());
  document.querySelector(".Card-number").innerHTML = GenerateRandomNumber();
};
function GenerateRandomNumber() {
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let Numero = Math.floor(Math.random() * numeros.length);
  return numeros[Numero];
}
function GenerateRandomCards() {
  let cards = ["diam", "spade", "heart", "club"];
  let card = Math.floor(Math.random() * cards.length);
  return cards[card];
}
