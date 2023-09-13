// Get the button
const topButton = document.getElementById("topbtn")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scroll()}

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block"
  } else {
    topButton.style.display = "none"
  }
}

// When the user clicks on the button, scroll to the top of the document
function backtotop() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}