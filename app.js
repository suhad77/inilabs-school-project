const list = document.querySelector(".list");
const icon = document.querySelector("#icon");


icon.addEventListener("click", ()=>{

  list.classList.toggle("mobail-menu");
  
  icon.classList.toggle('fa-times');
});


$('.slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });


$('.counter').counterUp({
  delay: 10,
  time: 1000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');





$('.teacher-slider-active').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 400,
  slidesToShow: 3,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,    
  prevArrow:"<div class='icon-left'> <i class='fas fa-arrow-left-long'></i> </div>",
  nextArrow:"<div class='icon-right'><i class='fas fa-arrow-right-long'></i></div>",
  responsive:[
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
  ]
});

new VenoBox({
  selector: '.venobox',

});
