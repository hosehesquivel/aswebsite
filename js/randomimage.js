window.onload = randomImage;

var myImg = new Array(
    "/images/heroimage01.png",
    "/images/heroimage02.png",
    "/images/heroimage03.png"
)

function randomImage() {
    var randomNum = Math.floor(Math.random() * myImg.length);
    document.getElementById("heroimg").src = myImg[randomNum];
}
