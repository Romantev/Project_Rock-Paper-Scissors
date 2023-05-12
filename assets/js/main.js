//! INPUT/OUTPUT FIELDS
const headlineRounds = document.querySelector(".headline-rounds");
const outputRounds = document.querySelector(".picked-rounds");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const outputUser = document.querySelector(".user-stat");
const outputComp = document.querySelector(".comp-stat");
const buttons = document.querySelectorAll(".buttons");
const resultYou = document.querySelector(".output-you");
const resultComp = document.querySelector(".output-comp");
const currentResult = document.querySelector(".current-stat");
const endResult = document.querySelector(".endresult");
const animationYou = document.querySelector(".animation-you");
const animationComp = document.querySelector(".animation-comp");
const animationClash = document.querySelector(".clash");

//! START VAL COUNTS
let roundsCount = 0;
let userScore = 0;
let compScore = 0;
let selectedVal = 5;
let situation = [
  ["DRAW", "WIN", "LOSE"],
  ["LOSE", "DRAW", "WIN"],
  ["WIN", "LOSE", "DRAW"],
];

//! FUNCTION RADIO VALUE
radioButtons.forEach((button) => {
  button.addEventListener("change", () => {
    selectedVal = Number(button.value);
  });
});

//! FUNCTION GAME
action = (userAction) => {
  //* GENERATED VAL
  const compRandomVal = Math.floor(Math.random() * 3);
  const userVal = situation[userAction][compRandomVal];
  const maxRound = selectedVal;
  const weapons = ["Rock", "Paper", "Scissors"];
  const userWeapon = weapons[userAction];
  const compWeapon = weapons[compRandomVal];

  //* ROUND: DRAW
  if (userVal == "DRAW") {
    outputRounds.innerHTML = `<p>DRAW! Both of you got ${userWeapon}</p>`;

    //* ROUND: LOSE!
  } else if (userVal == "LOSE") {
    compScore++;

    outputComp.innerHTML = compScore;
    outputRounds.innerHTML = `<p>YOU LOSE! You got beaten by ${compWeapon}</p>`;

    //* ROUND: WIN!
  } else {
    userScore++;

    outputUser.innerHTML = userScore;
    outputRounds.innerHTML = `<p>YOU WIN! You won against ${compWeapon}</p>`;
  }

  //* ADDING RESULT
  roundsCount++;
  headlineRounds.innerHTML = "Round";
  outputRounds.innerHTML += `<p>${roundsCount} / ${maxRound}</p>`;
  outputRounds.style.display = "block";
  resultYou.innerHTML += `<img src="./assets/img/game-${userWeapon}.png" alt="${userWeapon}" class="${userWeapon}" />`;
  resultComp.innerHTML += `<img src="./assets/img/game-${compWeapon}.png" 
  alt="${compWeapon}" class="${compWeapon}" />`;
  currentResult.innerHTML += `<p>${userScore} : ${compScore}</p>`;

  //* ANIMATION
  animationClash.innerHTML = `<h2> ${situation[userAction][compRandomVal]}</h2>`;
  animationYou.innerHTML = `<img src="./assets/img/game-${userWeapon}.png" alt="${userWeapon}" />`;
  animationComp.innerHTML = `<img src="./assets/img/game-${compWeapon}.png"
  alt="${compWeapon}" />`;
  animationYou.classList.add("animation-you-after");
  setTimeout(() => {
    animationYou.classList.remove("animation-you-after");
  }, 1500);
  animationComp.classList.add("animation-comp-after");
  setTimeout(() => {
    animationComp.classList.remove("animation-comp-after");
  }, 1500);
  animationClash.classList.add("clash-after");
  setTimeout(() => {
    animationClash.classList.remove("clash-after");
  }, 1000);

  //* GAME FINISHED
  if (roundsCount === maxRound) {
    buttons.forEach((button) => (button.disabled = true));
    if (userScore == compScore) {
      endResult.innerHTML = "So close, it's a DRAW! Try again!";
    } else if (userScore < compScore) {
      endResult.innerHTML = "Too bad, YOU LOSE! It's not your day!";
    } else {
      endResult.innerHTML = "You're the CHOSEN ONE! The World is yours!";
    }
  }
};
