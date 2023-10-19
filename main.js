let computerNum = 0;
let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");
let resetButton = document.getElementById("reset-button");
let gameOver = false;
let chances = 5;
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100 사이의 숫자로 입력하세요!";
    return;
  }
  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자에요... 다른 숫자를 넣어주세요.";
    return;
  }

  chances--;
  chanceArea.innerHTML = `남은 기회: ${chances}번`;

  if (userValue < computerNum) {
    resultArea.textContent = "Up!!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down!!!";
  } else {
    resultArea.textContent = "정답!!!";
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();

  resultArea.textContent = "정답인지 아닌지..업, 다운 게임!!";

  gameOver = false;
  playButton.disabled = false;
  chances = 5;
  chanceArea.innerHTML = `남은 기회: ${chances}번`;
  history = [];
}

pickRandomNum();
