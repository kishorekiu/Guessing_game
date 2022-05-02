"use-strict";

let secret = Math.trunc(Math.random() * 20) + 1;
let win = document.querySelector(".win");
let secretNumber = document.querySelector(".secretNumber");
let score = document.querySelector(".score");
let checkBtn = document.querySelector(".check");
let message = document.querySelector(".text");
let body = document.querySelector("body");
let border = document.querySelector(".Border");
let resetBtn = document.querySelector(".reset");

checkBtn.addEventListener("click", function () {
  let guess = +document.querySelector(".number").value;

  if (!guess) {
    message.textContent = "No number!";
  } else if (guess < secret) {
    if (score.textContent > 1) {
      message.textContent = "Too low!";
      message.style.color = "#ae3ec9";
      score.textContent--;
    } else {
      message.textContent = "You Lose!";
      secretNumber.textContent = secret;
      body.style.backgroundColor = "#ff8787";
      border.style.width = "250px";
      win.textContent = "YOU LOSE😐";
    }
  } else if (guess > secret) {
    message.textContent = "Too high!";
    message.style.color = "#f03e3e";
    score.textContent--;
  } else if (guess === secret) {
    message.textContent = "Correct number!";
    secretNumber.textContent = secret;
    body.style.backgroundColor = "#69db7c";
    border.style.width = "250px";
    win.textContent = "YOU WIN 🏆";
  }
});

resetBtn.addEventListener("click", function () {
  window.location.reload();
});
