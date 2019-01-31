let pickedName = "actor"
let pickedImage = "assets/images/" + pickedName + ".png"

console.log(pickedImage)
function imageChanger()  {
    image =document.getElementById("changingImage")
    image.src = pickedImage

}

window.onload = imageChanger()