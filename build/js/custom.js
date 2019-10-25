'use strict';

$('document').ready(function () {
  $('.ear-music__notes-example-list .ear-music__label').click(function () {
    $('.ear-music__notes-example-list .ear-music__label').each(function (index, value) {
      $(index).prop("checked", false);
    });
    $(this).prop("checked", true);
  });
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoHeight: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-button-prev'
    }
  });

  mySwiper.on('slideChange', function () {
    $("body").scrollTop('-10px');
  });
});