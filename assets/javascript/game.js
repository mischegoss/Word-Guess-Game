let pickedName = "actor"
let pickedImage = "assets/images/" + pickedName + ".png"
let blankWord = []
let pickedNameLength = pickedName.length
let pickedNameLetters = []
let wordblanks = document.getElementById("guess-word")

let userpick = "r";

function imageChanger()  {
    image =document.getElementById("changingImage")
    image.src = pickedImage

}


function splitPickedName () {
    for (var i=0; i <pickedNameLength; i++) {
      pickedNameLetters.push(pickedName.charAt(i));
    }
    if (pickedNameLetters.includes(userpick)) {
        index = pickedNameLetters.findIndex(pickedNameLetter => pickedNameLetter === userpick);
        console.log(index)
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

window.onload = imageChanger()
window.onload = blankSetter()
window.onload = splitPickedName()