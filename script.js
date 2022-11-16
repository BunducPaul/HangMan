function onlyLetters() {
  if (/^[a-zA-Z]+$/.test(document.getElementById("input").value) == true) {
    addWord_hidden(), addletters();
  } else if (document.getElementById("input").value.length == 0) {
    document.getElementById("advertisementOrhiddenWord").innerHTML = "empty";
  } else {
    document.getElementById("advertisementOrhiddenWord").innerHTML = "only Letters";
  }
}

function addWord_hidden() {
  document.getElementById("advertisementOrhiddenWord").innerHTML = "";
  for (let i = 0; i < document.getElementById("input").value.length; ++i) {
    let hiddenLetter = document.createElement("text");
    Object.assign(hiddenLetter, {
      id: i,
      textContent: "_ ",
    });
    document
      .getElementById("advertisementOrhiddenWord")
      .appendChild(hiddenLetter);
  }
}

function addletters() {
  document.getElementById("inputAndbutton").style = "display:none";
  let all_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let j = 0; j <= 25; ++j) {
    let button = document.createElement("button");
    Object.assign(button, {
      id: all_letters.charAt(j),
      textContent: all_letters.charAt(j),
      onclick: () => check_The_chosen_Letter(button.id),
    });
    document.getElementById("btnGroupalphabet").appendChild(button);
  }
}

let buttonPressed = 0;

function check_The_chosen_Letter(id) {
  ++buttonPressed;
  let word = document.getElementById("input").value.toUpperCase();
  let hidden_Letters_left = 0;
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
      ++hidden_Letters_left;
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
  if (hidden_Letters_left == 0) {
    restartGame("YOU WON THE GAME :)");
  }
}

function startGame() {
  document.getElementById("inputAndbutton").style = "display:block";
  document.getElementById("endOftheGame").style = "display:none";
  document.getElementById("startScreen").style = "display:none";
  document.getElementById("gamePage").style = "display:block";
}

function restartGame(mesaj) {
  buttonPressed = 0;
  document.getElementById("img").src ="img/0.png";
  document.getElementById("btnGroupalphabet").innerHTML = "";
  document.getElementById("advertisementOrhiddenWord").innerHTML = "";
  document.getElementById("input").innerHTML = "";
  document.getElementById("gamePage").style = "display:none";
  document.getElementById("endOftheGame").style = "display:block";
  document.getElementById("finalMessage").innerHTML ='\n'+ mesaj;
}
