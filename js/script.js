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



let total = []
let totalCart = document.querySelector('.total')
var addToCard = document.getElementsByClassName('add-cart')
for ( var i = 0 ; i < addToCard.length ; i++){
    var button =  addToCard[i]
    button.addEventListener('click', addTocartClicked)
}


function addTocartClicked(event){
  var button = event.target
  var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement
  var name = shopItem.getElementsByClassName('title')[0].innerText
  var prix = shopItem.getElementsByClassName('price')[0].innerText
  var imgSrc = shopItem.getElementsByClassName('pic-1')[0].getAttribute("src")
  console.log(name , prix , imgSrc)
  addItemToCart (name , prix , imgSrc)
  total.push( parseFloat(prix))
  console.log(calculTotal())
  addQuantity()
}

function  addItemToCart (name , prix , imgSrc){
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItem = document.getElementsByClassName('cart-item')[0]
  
  var cartRowContents = `
  <div class="cart-item">
  <hr>
        <div class="row cart-row">
          <div class="col-md-3">
             <img src="${imgSrc}" alt="" class="img-cart" >
          </div>
          <div class="col-md-2">
            <span>${name}</span>
          </div>
          <div class="col-md-3">
            <spen class="cart-price">${prix}</spen>
          </div>
          <div class="col-md-2">
            <input type="number" class="card-quantity" name="" value="1" id="">
          </div>
          <div class="col-md-2">
            <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
        <hr>
       </div>
  `
  cartRow.innerHTML = cartRowContents
  cartItem.append(cartRow)
 
}

function addQuantity () {
  totalCart.innerHTML = `
  <h4>${calculTotal()}</h4>

 `
}

function calculTotal(){

    return total.reduce((a,b) => (a+b) )
}

let itemFav = document.querySelector('.cart-fav')
var addFavorite = document.getElementsByClassName('add-favorite')
for ( var i = 0 ; i < addFavorite.length ; i++){

  addFavorite[i].addEventListener('click', addToFavoritClicked)
}

function addToFavoritClicked(event){
  var button = event.target
  var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement
  var name = shopItem.getElementsByClassName('title')[0].innerText
  var prix = shopItem.getElementsByClassName('price')[0].innerText
  var imgSrc = shopItem.getElementsByClassName('pic-1')[0].getAttribute("src")
  console.log(name , prix , imgSrc)
  addItemToCartFavorit (name , prix , imgSrc)

}


function addItemToCartFavorit (name , price , imgSrc){
    
  
  itemFav.innerHTML += `
  <div class="row mt-3 ">
  <div class="col-md-3">
    <img src="${imgSrc}" class="img-cart" >
  </div>
  <div class="col-md-2">
    <strong>${name}</strong>
  </div>
  <div class="col-md-3">
    <strong>${price}</strong>
  </div>
  <div class="col-md-2">
  <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
  </div>
  <div class="col-md-2">
  <button type="button" class="btn btn-vert add-cart"><i class="fas fa-shopping-cart"></i> </button>
  </div>
</div>
  ` 
 
}




