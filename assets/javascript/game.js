let pickedName = "brainy"
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

window.onload = imageChanger()
window.onload = blankSetter()
window.onload = splitPickedName()