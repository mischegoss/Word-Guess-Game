
/* This is the array that holds all the smurf names */

let smurfs = ["actor", "astro", "baker", "brainy", "chef", "greedy", "painter", "scaredy", "smurfette", "vanity"]

/* These are the elements that will be manipulated by Javascript. */
let wordblanks = document.getElementById("guess-word");
let guessbox = document.getElementById("guessed-letters-box");
let guesscount = document.getElementById("guess-count");
let image = document.getElementById("changing-image");
let wincount = document.getElementById("win-count");
let button = document.getElementById("button");
let goaway = document.getElementById("go-away");
let getstarted = document.getElementById("get-started");
let jumbotitle = document.getElementById("jumbo-title");
let guessframe = document.getElementById("guess-frame");


/* This sets initial guess and win counts */
let guess = 10;
let win = 0;

/* Sets up empty variables and arrays */
let valid;
let userpick;
let pickedImage;
let pickedName;
let blankWord = []
let pickedNameLength;
let pickedNameLetters = []
let guessedLetter = [];

/* This function assigns the variable pickedName a random name from smurfs array then
 * adds the correlating image. It also calls the functions needed to get blanks on screen */
function pickerChanger() {
  pickedName = smurfs[Math.floor(Math.random() * smurfs.length)];
  pickedImage = "assets/images/" + pickedName + ".png";
  pickedNameLength = pickedName.length;
  image.src = pickedImage;
  splitPickedName();
  blankSetter();
}

/* This function splits up picked name into a new array containing the letters of name ie. ['s','m', 'u', 'r', 'f'] */
function splitPickedName() {
  for (var i = 0; i < pickedNameLength; i++) {
    pickedNameLetters.push(pickedName.charAt(i));
  }
}

/* This function creates a new array of "_" and uses the buildOurBlank function to push it to the user screen */
function blankSetter() {
  for (var i = 0; i < pickedNameLength; i++) {
    blankWord.push("_");
  }
  wordblanks.innerHTML = buildOurBlank();
}

function buildOurBlank() {
  var blankbuilt = "";
  for (var i = 0; i < blankWord.length; i++) {
    blankbuilt += " " + blankWord[i];
  }
  return blankbuilt;
}


/*This checks to make sure it is a valid key and if match replaces it, otherwise the letter is added to the guess box if it is not already there */

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
    if (event.keyCode > 64 && event.keyCode < 91 && (guessedLetter.indexOf(userpick) === -1)) {
      guessedLetter.push(userpick);
    }
    buildGuessBox();
    console.log("No Match");
  }
}

/* This function builds the wrong guess box */

function buildGuessBox() {
  for (var i = 0; i < guessedLetter.length; i++) {
    guessbox.innerHTML = guessedLetter;
  }
}

/* This function counts guesses and triggers lose screen */

function countGuess() {
  if (guess > 0 && event.keyCode > 64 && event.keyCode < 91) {
    guess--;
    guesscount.innerText = guess;
  } else {
  }
  if (guess === 0) {
    guesscount.innerText = "0";
    image.src = "assets/images/lose.png";
    wordblanks.innerHTML = "YOU LOSE";
    button.classList.toggle("hide");
    goaway.classList.toggle("hide");
    jumbotitle.classList.add("hide");
    getstarted.classList.add("hide");
    

  }
}

/*This functions check for win and trigger apropriate screens */

function checkWin() {
  if (blankWord.includes("_")) {
    console.log("No win");
  } else {
    setTimeout(winTrigger, 300);
  }
}
/****/
function winTrigger() {
  pickedNameOut();

  if (smurfs.length > 0) {
    win++;
    image.src = "assets/images/win.gif";
    wordblanks.innerHTML = "YOU WIN!";
    wincount.innerHTML = win;
    button.classList.toggle("hide");
    goaway.classList.toggle("hide");
    jumbotitle.classList.add("hide");
    getstarted.classList.add("hide");
  } else {
    if (smurfs.length === 0) {
      image.src = "assets/images/smurfy.gif";
      wordblanks.innerHTML = "⭐⭐⭐⭐⭐ <br>You Know <br> Your Smurfs<br>⭐⭐⭐⭐⭐";
      guesscount.innerHTML = "⭐⭐⭐⭐⭐";
      wincount.innerHTML = "⭐Smurftastic⭐";
      guessframe.classList.add("hide");

     


    }
  }
}

/*If a user guesses the name correctly, this function eliminates it from the array. When the array equals zero (see function above) 
a Smurftastic screen is triggered*/

function pickedNameOut() {
  let pickedNameIndex = smurfs.indexOf(pickedName);
  smurfs.splice(pickedNameIndex, 1);
  console.log(smurfs);
}

/*Loads up game*/

function game() {
  checkPick();
  checkWin();
  countGuess();
}

/* Play again triggered by button. Note: I know in the instructions it said automatically, but I liked the idea of additional user input */

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


/* Set up and event listener */

window.onload = pickerChanger();
document.onkeyup = function(event) {
  userpick = String.fromCharCode(event.keyCode).toLowerCase();
  game();
};










