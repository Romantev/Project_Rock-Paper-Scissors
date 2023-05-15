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
const animationYou = document.querySelector(".animation-you");
const animationComp = document.querySelector(".animation-comp");
const animationClash = document.querySelector(".clash");

//! START VAL COUNTS
let roundsCount = 0;
let userScore = 0;
let compScore = 0;
let selectedVal = 5;

//! RADIO VALUE
radioButtons.forEach((button) => {
  button.addEventListener("change", () => {
    selectedVal = Number(button.value);
  });
});

let situation = [
  ["DRAW", "WIN", "LOSE"],
  ["WIN", "DRAW", "LOSE"],
  ["WIN", "LOSE", "DRAW"],
];

//! FUNCTION GAME
action = (userAction) => {
  //* GENERATED VAL
  const compRandomVal = Math.floor(Math.random() * 3);
  const resultVal = situation[userAction][compRandomVal];
  const maxRound = selectedVal;
  const weapons = ["Rock", "Paper", "Scissors"];
  const userWeapon = weapons[userAction];
  const compWeapon = weapons[compRandomVal];

  //* ROUND: DRAW
  if (resultVal == "DRAW") {
    userScore++;
    compScore++;

    //* ROUND: LOSE!
  } else if (resultVal == "LOSE") {
    compScore++;

    //* ROUND: WIN!
  } else {
    userScore++;
  }

  //* ADDING RESULT
  roundsCount++;
  outputUser.innerHTML = userScore;
  outputComp.innerHTML = compScore;
  headlineRounds.innerHTML = "Round";
  outputRounds.innerHTML = `<p>${roundsCount} / ${maxRound}</p>`;
  outputRounds.style.display = "block";
  resultYou.innerHTML += `<img src="./assets/img/game-${userWeapon}.png" alt="${userWeapon}" class="${userWeapon}-mini" />`;
  resultComp.innerHTML += `<img src="./assets/img/game-${compWeapon}.png" 
  alt="${compWeapon}" class="${compWeapon}-mini" />`;
  currentResult.innerHTML += `<p>${userScore} : ${compScore}</p>`;

  //* ANIMATION
  if (situation[userAction][compRandomVal] == "DRAW") {
    animationClash.innerHTML = `<h2 style="color:blue"> ${situation[userAction][compRandomVal]}</h2>`;
  } else if (situation[userAction][compRandomVal] == "LOSE") {
    animationClash.innerHTML = `<h2 style="color:red"> ${situation[userAction][compRandomVal]}</h2>`;
  } else {
    animationClash.innerHTML = `<h2 style="color:green"> ${situation[userAction][compRandomVal]}</h2>`;
  }
  animationYou.innerHTML = `<img src="./assets/img/game-${userWeapon}.png" alt="${userWeapon}" />`;
  animationComp.innerHTML = `<img src="./assets/img/game-${compWeapon}.png"
  alt="${compWeapon}" />`;
  animationYou.classList.add("animation-you-after");
  animationComp.classList.add("animation-comp-after");
  animationClash.classList.add("clash-after");
  setTimeout(() => {
    animationYou.classList.remove("animation-you-after");
    animationComp.classList.remove("animation-comp-after");
  }, 2000);
  setTimeout(() => {
    animationClash.classList.remove("clash-after");
  }, 1500);

  //* GAME FINISHED
  if (roundsCount === maxRound) {
    buttons.forEach((button) => (button.disabled = true));
  }
};
