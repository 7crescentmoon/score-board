const p1Btn = document.querySelector("#p1-btn");
const p2Btn = document.querySelector("#p2-btn");
const resetBtn = document.querySelector("#reset");
const playTo = document.querySelector("#playTo");

const p1Display = document.querySelector("#p1-display p");
const p2Display = document.querySelector("#p2-display p");

const p1Name = document.querySelector("#p1-name");
const p2Name = document.querySelector("#p2-name");

const btnName = document.querySelector("#enter-name");
const valP1Name = document.querySelector("#inpt-team1");
const valP2Name = document.querySelector("#inpt-team2");

const p1Win = document.querySelector('#p1-win')
const p2Win = document.querySelector('#p2-win')

let p1Scrore = 0;
let p2Scrore = 0;
let winPoint = 0;
let gameOver = false;
p1Win.style.display = "none";
p2Win.style.display = "none";

function disableBtn() {
  if (winPoint == 0) {
    p1Btn.setAttribute("disabled", "");
    p2Btn.setAttribute("disabled", "");
  } else {
    p1Btn.removeAttribute("disabled");
    p2Btn.removeAttribute("disabled");
  }
}

function reset() {
  gameOver = false;
  winPoint = 0;
  p1Scrore = 0;
  p2Scrore = 0;
  p1Display.textContent = p1Scrore;
  p2Display.textContent = p2Scrore;
  p1Btn.setAttribute("disabled", "");
  p2Btn.setAttribute("disabled", "");
  p2Win.style.display = "none";
  p1Win.style.display = "none";
  p1Name.innerText = 'team #1';
  p2Name.innerText = 'team #1';
  playTo.value = "none";
}

p1Btn.addEventListener("click", () => {
  if (!gameOver) {
    p1Scrore += 1;
    if (p1Scrore == winPoint) {
      gameOver = true;
      p1Win.style.display = "inline";
    }
    p1Display.textContent = p1Scrore;

  }
});

p2Btn.addEventListener("click", () => {
  if (!gameOver) {
    p2Scrore += 1;
    if (p2Scrore == winPoint) {
      gameOver = true;
      p2Win.style.display = "inline";
    }
    p2Display.textContent = p2Scrore;
  }
});

resetBtn.addEventListener("click", reset);

playTo.addEventListener("change", function () {
  winPoint = parseInt(this.value);
  disableBtn();
  reset;
});

console.log( btnName.addEventListener("click", () => {
  if (valP1Name.value != "" && valP2Name.value != "") {
    const p1Value = valP1Name.value;
    const p2Value = valP2Name.value;
    p1Name.innerText = p1Value;
    p2Name.innerText = p2Value;
    valP1Name.value = "";
    valP2Name.value = "";
  }
}))


disableBtn();
