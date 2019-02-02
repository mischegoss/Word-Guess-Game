let smurfs = ["actor", "astro", "baker", "brainy", "chef", "greedy", "painter", "scaredy", "smurfette", "vanity"]
let pickedImage;
let pickedName;
let blankWord = []
let pickedNameLength;
let pickedNameLetters = []
let guessedLetter = [];
let wordblanks = document.getElementById("guess-word");
let guessbox = document.getElementById("guessed-letters-box");
let guesscount = document.getElementById("guess-count");
let image = document.getElementById("changingImage");
let wincount = document.getElementById("win-count");
let button = document.getElementById("button");
let goaway = document.getElementById("go-away");
let getstarted = document.getElementById("get-started");
let jumbotitle = document.getElementById("jumbo-title");
let guessframe = document.getElementById("guess-frame")
let guess = 10;
let win = 0;
let valid;
let userpick;

function pickerChanger() {
  pickedName = smurfs[Math.floor(Math.random() * smurfs.length)];
  pickedImage = "assets/images/" + pickedName + ".png";
  pickedNameLength = pickedName.length;
  image.src = pickedImage;
  splitPickedName();
  blankSetter();
}

function game() {
  checkPick();
  checkWin();
  countGuess();
}

function playAgain() {
  button.classList.toggle("hide");
  guessedLetter = [];
  pickedNameLetters = [];
  blankWord = [];
  guessbox.innerHTML = "";
  guesscount.innerHTML = "10";
  guess = 10;
  goaway.classList.toggle("hide");
  pickerChanger();
  game();
}

function winTrigger() {
  pickedNameOut();

  if (smurfs.length > 0) {
    win++;
    image.src = "assets/images/win.gif";
    wordblanks.innerHTML = "YOU WIN!";
    wincount.innerHTML = win;
    button.classList.toggle("hide");
    goaway.classList.toggle("hide");
  } else {
    if (smurfs.length === 0) {
      image.src = "assets/images/smurfy.gif";
      wordblanks.innerHTML = "⭐⭐⭐⭐⭐⭐ <br>You Know <br> Your Smurfs<br>⭐⭐⭐⭐⭐⭐";
      guesscount.innerHTML = "⭐⭐⭐⭐⭐";
      wincount.innerHTML = "⭐Smurftastic⭐";
      getstarted.innerHTML= "";
      jumbotitle.innerHTML = "";
      guessframe.classList.add("hide");

     


    }
  }
}

function checkWin() {
  if (blankWord.includes("_")) {
    console.log("No win");
  } else {
    setTimeout(winTrigger, 500);
  }
}

function countGuess() {
  if (guess > 1 && event.keyCode > 64 && event.keyCode < 91) {
    guess--;
    guesscount.innerText = guess;
  } else {
  }
  if (guess === 1) {
    guesscount.innerText = "0";
    image.src = "assets/images/lose.png";
    wordblanks.innerHTML = "YOU LOSE";
    button.classList.toggle("hide");
    goaway.classList.toggle("hide");
  }
}

function splitPickedName() {
  for (var i = 0; i < pickedNameLength; i++) {
    pickedNameLetters.push(pickedName.charAt(i));
  }
}

function checkPick() {
  if (
    pickedNameLetters.includes(userpick) &&
    event.keyCode > 64 &&
    event.keyCode < 91
  ) {
    for (var i = 0; i < pickedNameLength; i++) {
      if (pickedNameLetters[i] === userpick) {
        blankWord[i] = pickedNameLetters[i];
      }
      wordblanks.innerHTML = buildOurBlank();
    }

    console.log(blankWord);
    console.log(pickedNameLetters);
  } else {
    if (event.keyCode > 64 && event.keyCode < 91) {
      guessedLetter.push(userpick);
    }
    buildGuessBox();
    console.log("No Match");
  }
}

function pickedNameOut() {
  let pickedNameIndex = smurfs.indexOf(pickedName);
  smurfs.splice(pickedNameIndex, 1);
  console.log(smurfs);
}

function buildGuessBox() {
  for (var i = 0; i < guessedLetter.length; i++) {
    guessbox.innerHTML = guessedLetter;
  }
}

function buildOurBlank() {
  var blankbuilt = "";
  for (var i = 0; i < blankWord.length; i++) {
    blankbuilt += " " + blankWord[i];
  }
  return blankbuilt;
}

function blankSetter() {
  for (var i = 0; i < pickedNameLength; i++) {
    blankWord.push("_");
  }
  wordblanks.innerHTML = buildOurBlank();
}

window.onload = pickerChanger();
document.onkeyup = function(event) {
  userpick = String.fromCharCode(event.keyCode).toLowerCase();
  game();
};










