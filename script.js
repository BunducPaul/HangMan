function onlyLetters() {
  if (/^[a-zA-Z]+$/.test(document.getElementById("input").value) == true) {
    addWord_hidden(), addletters();
  } else if (document.getElementById("input").value.length == 0) {
    document.getElementById("advertisement_Or_hidden_Word").innerHTML = "empty";
  } else {
    document.getElementById("advertisement_Or_hidden_Word").innerHTML = "only Letters";
  }
}

function addWord_hidden() {
  document.getElementById("advertisement_Or_hidden_Word").innerHTML = "";
  for (let i = 0; i < document.getElementById("input").value.length; ++i) {
    let hiddenLetter = document.createElement("text");
    Object.assign(hiddenLetter, {
      id: i,
      textContent: "_ ",
    });
    document
      .getElementById("advertisement_Or_hidden_Word")
      .appendChild(hiddenLetter);
  }
}

function addletters() {
  document.getElementById("input_And_button").style = "display:none";
  let all_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let j = 0; j <= 25; ++j) {
    let button = document.createElement("button");
    Object.assign(button, {
      id: all_letters.charAt(j),
      textContent: all_letters.charAt(j),
      onclick: () => check_The_chosen_Letter(button.id),
    });
    document.getElementById("btn_Group_alphabet").appendChild(button);
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
  document.getElementById("input_And_button").style = "display:block";
  document.getElementById("end_Of_the_Game").style = "display:none";
  document.getElementById("start_Screen").style = "display:none";
  document.getElementById("game_Page").style = "display:block";
}

function restartGame(mesaj) {
  buttonPressed = 0;
  document.getElementById("img").src ="img/0.png";
  document.getElementById("btn_Group_alphabet").innerHTML = "";
  document.getElementById("advertisement_Or_hidden_Word").innerHTML = "";
  document.getElementById("input").innerHTML = "";
  document.getElementById("game_Page").style = "display:none";
  document.getElementById("end_Of_the_Game").style = "display:block";
  document.getElementById("final_Message").innerHTML ='\n'+ mesaj;
}
