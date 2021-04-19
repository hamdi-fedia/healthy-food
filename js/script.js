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
          <div class="col-md-3 col-3">
             <img src="${imgSrc}" alt="" class="img-cart" >
          </div>
          <div class="col-md-3 col-3">
            <span>${name}</span>
          </div>
          <div class="col-md-3 col-3">
            <spen class="cart-price">${prix}</spen>
          </div>
          <div class="col-md-3 col-3">
            <input type="number" class="card-quantity" name="" value="1" id="">
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
  <div class="pos">
  
  <h4> <b>Total Price   </b>   ${calculTotal()} Dt</h4>
  </div>
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
  <div class="col-md-4 col-4">
    <img src="${imgSrc}" class="img-cart pic-1fav" >
  </div>
  <div class="col-md-4 col-4">
    <strong class="titlefav">${name}</strong>
  </div>
  <div class="col-md-4 col-4">
    <strong class="pricefav">${price}</strong>
  </div>
 
</div>
  ` 
 
}



document.querySelector('.all').addEventListener('click', purchaseClicked)
function purchaseClicked() {
  var cartItems = document.querySelector('.cart-item')
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  
  }
  addQuantityRomove ()
}


function addQuantityRomove () {
  totalCart.innerHTML = `
  <div class="pos">
  <h4> <b>Total Price   </b>   0 Dt</h4>
  </div>
 `
}

let item = document.querySelector('.cart-item')


let remov = document.querySelectorAll('.btn-danger')
for ( var i = 0 ; i < remov.length ; i++){
 remov[i].addEventListener('click', function (event){
    var btn=event.target
    btn.parentElement.parentElement.remove()
 
 })
}




