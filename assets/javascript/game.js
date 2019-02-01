let smurfs = ["brainy", "smurfette", "astro", "actor", "baker"]
let pickedImage;
let pickedName;
let blankWord = []
let pickedNameLength;
let pickedNameLetters = []
let guessedLetter = []
let wordblanks = document.getElementById("guess-word")
let guessbox = document.getElementById("guessed-letters-box")

let userpick;
// on Load

function pickerChanger()  {
    pickedName = smurfs[Math.floor(Math.random() * smurfs.length)];
    pickedImage = "assets/images/" + pickedName + ".png";
    pickedNameLength = pickedName.length;
    image =document.getElementById("changingImage")
    image.src = pickedImage
    splitPickedName()
    blankSetter();
    
}

//on Key Press
function splitPickedName () {
    for (var i=0; i <pickedNameLength; i++) {
      pickedNameLetters.push(pickedName.charAt(i));
    }}

function checkPick () {

    if (pickedNameLetters.includes(userpick) && event.keyCode > 64 && event.keyCode < 91) {

        for (var i= 0; i < pickedNameLength; i++) {
            if (pickedNameLetters[i] === userpick) {
                blankWord[i]  = pickedNameLetters[i];
            }
            wordblanks.innerHTML = buildOurBlank()
        }

console.log(blankWord);
console.log(pickedNameLetters)
    } else {
        if (event.keyCode > 64 && event.keyCode < 91){
        guessedLetter.push(userpick)
        }
        buildGuessBox()
        console.log("No Match")
    }
}



function buildGuessBox() {
    for (var i = 0; i < guessedLetter.length; i++) {
      guessbox.innerHTML= guessedLetter;
    }
  }

function buildOurBlank() {
    var blankbuilt = "";
    for(var i = 0; i < blankWord.length; i++){
        blankbuilt += " "+blankWord[i];
    }
    return blankbuilt; 
}

function blankSetter() {
for (var i = 0; i < pickedNameLength; i++) {
    blankWord.push("_");}  
   wordblanks.innerHTML = buildOurBlank()
}

window.onload = pickerChanger()

document.onkeyup = function (event) {
    userpick = String.fromCharCode(event.keyCode).toLowerCase();
    checkPick();
}










