 var mySwiper = new Swiper('.swiper-container', {
   autoHeight: true,
   centeredSlides: true,
   touchRatio: 0,
   //loop: true,
   navigation: {
     nextEl: '.swiper-btn-next',
     prevEl: '.swiper-button-prev',
   }
 })

 mySwiper.on('slideChange', function () {
   $(window).scrollTop(0);
 });

 let BK1,
   BK2,
   BK3;