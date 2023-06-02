
function parallax() {
  var parallax = document.getElementById("parallax");
  parallax.style.top = -(window.pageYOffset / 4)+'px';
}

window.addEventListener("scroll", parallax, false);

// JavaScript code
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
