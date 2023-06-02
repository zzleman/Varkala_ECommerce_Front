let slideIndex = 1;
let startX = 0;
let endX = 0;
let dragging = false;
let dragStartX = 0;
let dragDistance = 0;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function touchStart(event) {
  startX = event.touches[0].clientX;
}

function touchMove(event) {
  endX = event.touches[0].clientX;
}

function touchEnd() {
  if (endX - startX > 50) {
    plusSlides(-1); 
  } else if (startX - endX > 50) {
    plusSlides(1); 
  }
  
  startX = 0;
  endX = 0;
}

function dragStart(event) {
  dragging = true;
  dragStartX = event.clientX;
  event.preventDefault();
}

function dragMove(event) {
  if (dragging) {
    const slideContainer = document.querySelector('.slideshow-container');
    dragDistance = event.clientX - dragStartX;
    slideContainer.style.transform = `translateX(${dragDistance}px)`;
  }
}

function dragEnd() {
  const slideContainer = document.querySelector('.slideshow-container');
  const slideWidth = slideContainer.clientWidth;
  const threshold = slideWidth / 4; 
  
  if (dragging) {
    if (dragDistance > threshold) {
      plusSlides(-1); 
    } else if (dragDistance < -threshold) {
      plusSlides(1);
    }
    
    slideContainer.style.transform = '';
    dragging = false;
    dragStartX = 0;
    dragDistance = 0;
  }
}

// Add event listeners for touch events
const slideContainer = document.querySelector('.slideshow-container');
slideContainer.addEventListener('touchstart', touchStart);
slideContainer.addEventListener('touchmove', touchMove);
slideContainer.addEventListener('touchend', touchEnd);

// Add event listeners for drag events
slideContainer.addEventListener('mousedown', dragStart);
slideContainer.addEventListener('mousemove', dragMove);
slideContainer.addEventListener('mouseup', dragEnd);
slideContainer.addEventListener('mouseleave', dragEnd);


// Function to start the countdown
function startCountdown() {
  var days = 15;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;

  function updateCountdown() {
      seconds--;

      if (seconds < 0) {
          seconds = 59;
          minutes--;

          if (minutes < 0) {
              minutes = 59;
              hours--;

              if (hours < 0) {
                  hours = 23;
                  days--;

                  if (days < 0) {
                      clearInterval(countdownInterval);
                  }
              }
          }
      }

      document.getElementById("days").textContent = formatTime(days);
      document.getElementById("hours").textContent = formatTime(hours);
      document.getElementById("minutes").textContent = formatTime(minutes);
      document.getElementById("seconds").textContent = formatTime(seconds);
  }

  function formatTime(time) {
      return time < 10 ? "0" + time : time;
  }

  updateCountdown();

  var countdownInterval = setInterval(updateCountdown, 1000);
}
window.addEventListener("load", startCountdown);

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