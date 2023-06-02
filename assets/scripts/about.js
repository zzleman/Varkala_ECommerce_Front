$(document).ready(function () {
    $('.logo-area').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 5,
slidesToScroll: 1,
centerMode:false,     
    draggable:true,    
    arrows:false,    
responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: true
  }
},
{
  breakpoint: 768,
  settings: {
    slidesToShow: 5,
    slidesToScroll: 1
  }
}
]
});
})

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
  