window.onload = randomImage;

var myImg = new Array(
    "./images/heroimages/heroimage01.png",
    "./images/heroimages/heroimage02.png",
    "./images/heroimages/heroimage03.png",
    "./images/heroimages/heroimage04.png",
    "./images/heroimages/heroimage05.png"
)

function randomImage() {
    var randomNum = Math.floor(Math.random() * myImg.length);
    document.getElementById("heroimg").src = myImg[randomNum];
}
