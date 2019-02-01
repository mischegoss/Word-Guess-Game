let smurfs = ["brainy", "smurfette", "astro", "actor", "baker"]
let pickedImage;
let pickedName;
let blankWord = []
let pickedNameLength;
let pickedNameLetters = []
let wordblanks = document.getElementById("guess-word")

let userpick = "r";
// on Load

function pickerChanger()  {
    pickedName = smurfs[Math.floor(Math.random() * smurfs.length)];
    pickedImage = "assets/images/" + pickedName + ".png";
    pickedNameLength = pickedName.length;
    image =document.getElementById("changingImage")
    image.src = pickedImage
}

//on Key Press
function splitPickedName () {
    for (var i=0; i <pickedNameLength; i++) {
      pickedNameLetters.push(pickedName.charAt(i));
    }
    if (pickedNameLetters.includes(userpick)) {

        for (var i= 0; i < pickedNameLength; i++) {
            if (pickedNameLetters[i] === userpick) {
                blankWord[i]  = pickedNameLetters[i];
            }
            wordblanks.innerHTML = buildOurBlank()
        }

console.log(blankWord);
console.log(pickedNameLetters)
    } else {
        console.log("No Match")
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
  /* wordblanks = document.getElementById("guess-word") */
   wordblanks.innerHTML = buildOurBlank()
}

window.onload = pickerChanger()
window.onload = blankSetter()
window.onload = splitPickedName()