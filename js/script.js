// VARIABLES

let startPage = document.querySelector(".start_page");
let playerOneBox = document.querySelector(".player_one-box");
let playerOneBtn = document.querySelector(".player_one-btn");
let playerOneInput = document.querySelector(".player_one-input");
let playerTwoBox = document.querySelector(".player_two-box");
let playerTwoInput = document.querySelector(".player_two-input");
let playerTwoBtn = document.querySelector(".player_two-btn");
let playerTwoHealth = document.querySelector(".player_two-health");
let playerThreeHealth = document.querySelector(".player_three-health");
let gameOverPage = document.querySelector(".game_over-page");
let playerThreeBox = document.querySelector(".player_three-box");
let playerThreeInput = document.querySelector(".player_three-input");
let playerThreeBtn = document.querySelector(".player_three-btn");
let winner = document.querySelector(".game_over-page-sub-title");
let playerTwoEmojiSad = document.querySelector(".player_two-emoji-sad");
let playerTwoEmojiThinking = document.querySelector(
  ".player_two-emoji-thinking"
);
let playerThreeEmojiSad = document.querySelector(".player_three-emoji-sad");
let playerThreeEmojiThinking = document.querySelector(
  ".player_three-emoji-thinking"
);
let heartEmojies = document.querySelectorAll(".heart_emoji");

let number;
let health = 4;

// GAME START FUNCTION
addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    startPage.classList.add("remove_page");
    playerOneBox.classList.add("visible");
  }
});

// CHECKING THE PLAYER ONE INPUT
playerOneBtn.addEventListener("click", () => {
  let check = Number(playerOneInput.value);
  if (!check || check > 10 || check < 0) {
    playerOneInput.style.borderColor = "#ff4a4a";
    playerOneInput.value = "";
  } else {
    number = check;
    playerOneInput.style.borderColor = "#828282";
    playerOneInput.value = "";
    playerOneBox.classList.remove("visible");
    playerTwoBox.classList.add("visible");
  }
});

// COMPARING PLAYER TWO INPUT

playerTwoBtn.addEventListener("click", () => {
  let check = Number(playerTwoInput.value);
  if (check) {
    if (health != 0) {
      if (check != number) {
        playerTwoEmojiThinking.classList.remove("d_block");
        playerTwoEmojiSad.classList.add("d_block");
        playerTwoInput.style.borderColor = "#ff4a4a";
        health -= 1;
        playerTwoHealth.removeChild(playerTwoHealth.lastElementChild);
        playerTwoInput.value = "";
      }
      if (check == number) {
        playerTwoBox.classList.remove("visible");
        gameOverPage.classList.remove("remove_page");
        winner.textContent = "PLAYER TWO WON";
        playerTwoInput.value = "";
        playerTwoInput.style.borderColor = "#828282";
      }
    } else {
      playerTwoBox.classList.remove("visible");
      playerThreeBox.classList.add("visible");
      playerTwoInput.value = "";
      health = 4;
      playerTwoInput.style.borderColor = "#828282";
      playerThreeInput.style.borderColor = "#828282";
    }
  } else {
    playerTwoInput.style.borderColor = "#ff4a4a";
  }
});

// PLAYER TWO EMOJI
if (health == 4) {
  playerTwoEmojiSad.classList.remove("d_block");
  playerTwoEmojiThinking.classList.add("d_block");
}

playerTwoInput.addEventListener("focus", () => {
  if (health < 4) {
    playerTwoEmojiSad.classList.remove("d_block");
    playerTwoEmojiThinking.classList.add("d_block");
    playerTwoInput.style.borderColor = "#828282";
  }
});

// COMPARING PLAYER THREE INPUT
playerThreeBtn.addEventListener("click", () => {
  let check = Number(playerThreeInput.value);
  if (check) {
    if (health != 0) {
      if (check == number) {
        playerThreeBox.classList.remove("visible");
        gameOverPage.classList.remove("remove_page");
        winner.textContent = "PLAYER THREE WON";
        playerThreeInput.value = "";
        playerThreeInput.style.borderColor = "#828282";
      }
      if (check != number) {
        playerThreeEmojiThinking.classList.remove("d_block");
        playerThreeEmojiSad.classList.add("d_block");
        playerThreeInput.style.borderColor = "#ff4a4a";
        health -= 1;
        playerThreeHealth.removeChild(playerThreeHealth.lastElementChild);
        playerThreeInput.value = "";
      }
    } else {
      playerThreeInput.value = "";
      gameOverPage.classList.remove("remove_page");
      winner.textContent = "PLAYER ONE WON";
      playerThreeInput.style.borderColor = "#828282";
    }
  } else {
    playerThreeInput.style.borderColor = "#ff4a4a";
  }
});

// PLAYER THREE EMOJI
if (health == 4) {
  playerThreeEmojiSad.classList.remove("d_block");
  playerThreeEmojiThinking.classList.add("d_block");
}

playerThreeInput.addEventListener("focus", () => {
  if (health < 4) {
    playerThreeEmojiSad.classList.remove("d_block");
    playerThreeEmojiThinking.classList.add("d_block");
    playerThreeInput.style.borderColor = "#828282";
  }
});

// GAME OVER PAGE LOGIC

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    playerTwoInput.style.borderColor = "#828282";
    playerThreeInput.style.borderColor = "#828282";
    playerTwoHealth.replaceChildren("");
    playerThreeHealth.replaceChildren("");
    for (let i = 0; i <= 4; i++) {
      let heartEmogi = document.createElement("img");
      heartEmogi.src = "../assets/heart.png";
      heartEmogi.classList.add("heart_emoji");
      playerTwoHealth.appendChild(heartEmogi);
    }
    for (let i = 0; i <= 4; i++) {
      let heartEmogi = document.createElement("img");
      heartEmogi.src = "../assets/heart.png";
      heartEmogi.classList.add("heart_emoji");
      playerThreeHealth.appendChild(heartEmogi);
    }
    gameOverPage.classList.add("remove_page");
    playerOneBox.classList.add("visible");
    playerThreeBox.classList.remove("visible");
    health = 4;
  }
});
