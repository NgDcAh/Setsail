$(document).ready(function(){
    $('.header__slider').slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        draggable:false,
        fade: true,
        cssEase: 'ease-out',
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='ti-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='ti-angle-right' aria-hidden='true'></i></button>",
        
    });
  });

$(document).ready(function(){
    $('.tour__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        draggable:false,
        prevArrow:"<button type='button' class='slick-prev pull-left'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'></button>",
        
    });
  });