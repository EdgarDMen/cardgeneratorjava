/* eslint-disable */
"use strict";
import { eventListeners } from "@popperjs/core";
import "bootstrap";
import { Button } from "bootstrap";
import "./style.css";

document.addEventListener("DOMContentLoaded", function() {
  const generateBtn = document.querySelector(".btn");

  generateBtn.addEventListener("click", function() {
    generateRandomCard();
  });

  generateRandomCard();
});

function generateRandomCard() {
  const suits = [
    { name: "Clubs", symbol: "♣" },
    { name: "Diamonds", symbol: "♦" },
    { name: "Hearts", symbol: "♥" },
    { name: "Spades", symbol: "♠" }
  ];
  const values = [
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

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const cardElement = document.getElementById("randomCard");
  const topLeftSuitElement = cardElement.querySelector(".top-left");
  const bottomRightSuitElement = cardElement.querySelector(".bottom-right");
  const valueElement = cardElement.querySelector(".value");

  topLeftSuitElement.textContent = randomSuit.symbol;
  topLeftSuitElement.style.color =
    randomSuit.name === "Diamonds" || randomSuit.name === "Hearts"
      ? "red"
      : "black";
  bottomRightSuitElement.textContent = randomSuit.symbol;
  bottomRightSuitElement.style.color =
    randomSuit.name === "Diamonds" || randomSuit.name === "Hearts"
      ? "red"
      : "black";
  valueElement.textContent = randomValue;
}
