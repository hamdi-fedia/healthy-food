window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var logo = document.getElementsByClassName("logo");

function myFunction() {
  
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    logo[0].classList.add("log")

  } else {
    navbar.classList.remove("sticky");
    logo[0].classList.remove("log")
  }
}
function fedia() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let carts = document.querySelectorAll('.add-cart')

for (let i=0 ; i < carts.length ; i++ ){
  carts[i].addEventListener('click' , () => {
    console.log("salem");
  })
  
}