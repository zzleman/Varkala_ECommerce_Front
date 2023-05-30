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
    plusSlides(-1); // Swipe/drag right, move to previous slide
  } else if (startX - endX > 50) {
    plusSlides(1); // Swipe/drag left, move to next slide
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
  const threshold = slideWidth / 4; // Adjust threshold as needed
  
  if (dragging) {
    if (dragDistance > threshold) {
      plusSlides(-1); // Dragged/swiped to the right, move to previous slide
    } else if (dragDistance < -threshold) {
      plusSlides(1); // Dragged/swiped to the left, move to next slide
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
