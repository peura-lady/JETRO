$(function(){
  $('.slider__inner').slick({
    arrows: true,
    asNavFor: '.thumbs',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider-prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider-next.svg" alt=""></button>',
  });


  $('.thumbs').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider__inner',
    focusOnSelect: true,
    dots: false,
    // centerMode: false,
  });
});






$('.header__menu-btn').on('click', function(){
    $('.header__menu > ul').slideToggle();
}); 