'use strict'
const swiper11 = () => {
    const swiper = new Swiper('.swiper2', {
       navigation: {
          nextEl: '.benefits__arrow--right',
          prevEl: '.benefits__arrow--left',
       },
       loop: true,
       autoplay: {
          delay: 2000,
          disableOnInteraction: false,
       },
      //  slidesPerView: 5,
      //  spaceBetween: 10,
       pagination: {
         el: '.swiper-pagination'
     },
   //   mousewheel: true,
       keyboard: true,

       breakpoints: {
 
          // Если ширина окна больше или равна 576px
          360: {
             slidesPerView: 4,
             spaceBetween: 10
          },
          // Если ширина окна больше или равна 576px
          768: {
             slidesPerView: 5,
             spaceBetween: 10
          }
       }
    });
 };
swiper11()