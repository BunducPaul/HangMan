function onlyLetters() {
  if (/^[a-zA-Z]+$/.test(document.getElementById("input").value) == true) {
    addWordHidden(), addLetters();
  } else if (document.getElementById("input").value.length == 0) {
    document.getElementById("advertisementOrHiddenWord").innerHTML = "empty";
  } else {
    document.getElementById("advertisementOrHiddenWord").innerHTML = "only Letters";
  }
}

function addWordHidden() {
  document.getElementById("advertisementOrHiddenWord").innerHTML = "";
  for (let i = 0; i < document.getElementById("input").value.length; ++i) {
    let hiddenLetter = document.createElement("text");
    Object.assign(hiddenLetter, {
      id: i,
      textContent: "_ ",
    });
    document
      .getElementById("advertisementOrHiddenWord")
      .appendChild(hiddenLetter);
  }
}

function addLetters() {
  document.getElementById("inputAndButton").style = "display:none";
  let allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let j = 0; j <= 25; ++j) {
    let button = document.createElement("button");
    Object.assign(button, {
      id: allLetters.charAt(j),
      textContent: allLetters.charAt(j),
      onclick: () => checkTheChosenLetter(button.id),
    });
    document.getElementById("btnGroupAlphabet").appendChild(button);
  }
}

let buttonPressed = 0;

function checkTheChosenLetter(id) {
  ++buttonPressed;
  let word = document.getElementById("input").value.toUpperCase();
  let hiddenLettersLeft = 0;
  let chosenLetter = 0;
  for (let i = 0; i < word.length; ++i) {
    if (id == word.charAt(i)) {
      for (let j = 0; j < word.length; ++j) {
        if (word.charAt(j) == id) {
          ++chosenLetter;
          document.getElementById([j]).textContent = id;
          document.getElementById([id]).disabled = true;
        }
      }
    } else {
      document.getElementById([id]).disabled = true;
    }
    if (document.getElementById([i]).textContent == "_ ") {
      ++hiddenLettersLeft;
    }
  }
  if (chosenLetter > 0) {
    --buttonPressed;
    chosenLetter = 0;
  }
  if (buttonPressed >= 6) {
    restartGame("YOU LOST THE GAME :(");
  }
  if (buttonPressed > 0 && buttonPressed <= 5) {
    document.getElementById("img").src ="img/" + buttonPressed + ".png";
  }
  if (hiddenLettersLeft == 0) {
    restartGame("YOU WON THE GAME :)");
  }
}

function startGame() {
  document.getElementById("inputAndButton").style = "display:block";
  document.getElementById("endOfTheGame").style = "display:none";
  document.getElementById("startScreen").style = "display:none";
  document.getElementById("gamePage").style = "display:block";
}

function restartGame(mesaj) {
  buttonPressed = 0;
  document.getElementById("img").src ="img/0.png";
  document.getElementById("btnGroupAlphabet").innerHTML = "";
  document.getElementById("advertisementOrHiddenWord").innerHTML = "";
  document.getElementById("input").innerHTML = "";
  document.getElementById("gamePage").style = "display:none";
  document.getElementById("endOfTheGame").style = "display:block";
  document.getElementById("finalMessage").innerHTML ='\n'+ mesaj;
}
