
function parallax() {
  var parallax = document.getElementById("parallax");
  parallax.style.top = -(window.pageYOffset / 4)+'px';
}

window.addEventListener("scroll", parallax, false);


var shopLink = document.getElementById("shop-link");
var companyLink = document.getElementById("company-link");
var accountLink = document.getElementById("account-link");

var shopDropdown = document.getElementById("shop-dropdown");
var companyDropdown = document.getElementById("company-dropdown");
var accountDropdown = document.getElementById("account-dropdown");

// Prevent default behavior and toggle dropdown
shopLink.addEventListener("click", function(event) {
  event.preventDefault();
  shopDropdown.classList.toggle("active");
});

companyLink.addEventListener("click", function(event) {
  event.preventDefault();
  companyDropdown.classList.toggle("active");
});

accountLink.addEventListener("click", function(event) {
  event.preventDefault();
  accountDropdown.classList.toggle("active");
});


let isOpen= false;
hamIcon = document.querySelector('#ham-icon')
hamDropdown= document.querySelector('.ham-dropdown')
hamIcon.addEventListener("click",()=>{
  if(!isOpen){
    hamDropdown.style.display= "flex"
    hamDropdown.style.flexDirection = "column"

  }
  else{
    hamDropdown.style.display= "none"
  }
  isOpen= !isOpen
})


let isOpenHome= false;
homeMain= document.querySelector('#home-main')
homeDrop=document.querySelector('.home-main-drop')
homeMain.addEventListener("click",()=>{
  if(!isOpenHome){
    homeDrop.style.display="flex"
    homeDrop.style.flexDirection = "column"
  }
  else{
    homeDrop.style.display= "none"
  }
  isOpenHome= !isOpenHome
})

let isOpenShop = false;
shopMain = document.querySelector('#shop-main')
shopDrop = document.querySelector('.shop-main-drop')
shopMain.addEventListener("click",()=>{
  if(!isOpenShop){
    shopDrop.style.display="flex"
    shopDrop.style.flexDirection = "column"
  }
  else{
    shopDrop.style.display= "none"
  }
  isOpenShop= !isOpenShop
})

let isOpenIcon = false;
iconMain = document.querySelector('#icon-main')
iconDrop = document.querySelector('.icon-main-drop')
iconMain.addEventListener("click",()=>{
  if(!isOpenIcon){
    iconDrop.style.display="flex"
  }
  else{
    iconDrop.style.display= "none"
  }
  isOpenIcon= !isOpenIcon
})