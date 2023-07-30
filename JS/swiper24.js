'use strict'
const swiper24 = () => {
    const swiper = new Swiper('.swiper', {
       navigation: {
          nextEl: '.benefits__arrow--right',
          prevEl: '.benefits__arrow--left',
       },
       loop: true,
       autoplay: {
          delay: 2000,
          disableOnInteraction: false,
       },
      //  slidesPerView: 4,
       pagination: {
         el: '.swiper-pagination',
         clickable: true,
     },
   //   mousewheel: true,
       keyboard: true,

       breakpoints: {
 
          576: {
             slidesPerView: 4,
             spaceBetween: 10
          },

          390: {
             slidesPerView: 3,
             spaceBetween: 5
          }
       }
    });
 };
swiper24()