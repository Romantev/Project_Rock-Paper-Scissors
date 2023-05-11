//* OUTPUT FIELDS
const outputRounds = document.querySelector(".pick-rounds");
const outputUser = document.querySelector(".user-stat");
const outputComp = document.querySelector(".comp-stat");
const outputText = document.querySelector(".text-output");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let startRound = false;

//* VAL COUNTS
let roundsCount = 0;
let userCount = 0;
let compCount = 0;
let clickCount = 0;

action = (userAction) => {
  if (startRound == false) {
    const inputRound = Number(
      document.querySelector("input[name='rounds']:checked").value
    );
    startRound = true;
    return (round = inputRound);
  }

  let compRandomVal = Math.floor(Math.random() * 3);

  //! ROUND: DRAW
  if (compRandomVal == userAction) {
    roundsCount++;
    clickCount++;

    //* Round finish
    if (clickCount == round) {
      rock.disabled = true;
      paper.disabled = true;
      scissors.disabled = true;
    }

    outputText.innerHTML = "DRAW!";
    outputRounds.innerHTML = roundsCount + " / " + round;

    //! ROUND: LOSE!
  } else if (
    (userAction == 0 && compRandomVal == 1) ||
    (userAction == 1 && compRandomVal == 2) ||
    (userAction == 2 && compRandomVal == 0)
  ) {
    roundsCount++;
    compCount++;
    clickCount++;

    //* Round finish
    if (clickCount == round) {
      rock.disabled = true;
      paper.disabled = true;
      scissors.disabled = true;
    }
    outputComp.innerHTML = compCount;
    outputText.innerHTML = "YOU LOSE!";
    outputRounds.innerHTML = roundsCount + " / " + round;

    //! ROUND: WIN!
  } else {
    roundsCount++;
    userCount++;
    clickCount++;

    //* Round finish
    if (clickCount == round) {
      rock.disabled = true;
      paper.disabled = true;
      scissors.disabled = true;
    }
    outputUser.innerHTML = userCount;
    outputText.innerHTML = "YOU WIN!";
    outputRounds.innerHTML = roundsCount + " / " + round;
  }
};
