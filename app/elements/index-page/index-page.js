 var mySwiper = new Swiper('.swiper-container', {
   loop: true,
   autoHeight: true,
   centeredSlides: true,
   navigation: {
     nextEl: '.swiper-btn-next',
     prevEl: '.swiper-button-prev',
   }
 })

 mySwiper.on('slideChange', function () {
   $("body").scrollTop('-10px');
 });