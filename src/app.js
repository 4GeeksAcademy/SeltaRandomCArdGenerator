/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#card").classList.add(generateRandomSuits());
  document.querySelector("#card").innerHTML = generateRandomNumber();

  //write your code here
};

let generateRandomNumber = () => {
  let numbers = [
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
  let indexNumb = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumb];
};

let generateRandomSuits = () => {
  let suits = ["♦", "♥", "♠", "♣"];
  let indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
};
