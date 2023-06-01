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
  breakpoint: 600,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1
  }
}
]
});
})

