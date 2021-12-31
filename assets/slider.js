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

  $(document).ready(function(){
    $('.review__slider').slick({
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
    });
  });

  $(document).ready(function(){
    $('.describe__slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
    });
  });