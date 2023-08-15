'use strict'
const swiper18 = () => {
    const swiper3 = new Swiper('.swiper3', {
       navigation: {
          nextEl: '.benefits__arrow--right',
          prevEl: '.benefits__arrow--left',
       },
       loop: true,
      //  autoplay: {
      //     delay: 2000,
      //     disableOnInteraction: false,
      //  },
       pagination: {
         el: '.swiper-pagination-3',
         clickable: true,
     },
   //   mousewheel: true,
       keyboard: true,

       breakpoints: {
 
          // Если ширина окна больше или равна 576px
          576: {
             slidesPerView: 3,
             spaceBetween: 9
          },
          // Если ширина окна больше или равна 320px
          320: {
             slidesPerView: 2,
             spaceBetween: 9
          }
       }
    });
    const swiper4 = new Swiper('.swiper4', {
      navigation: {
         nextEl: '.benefits__arrow--right',
         prevEl: '.benefits__arrow--left',
      },
       loop: true,
      autoplay: {
         delay: 2000,
         disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination-4',
        clickable: true,
    },
   //  mousewheel: true,
      keyboard: true,

      breakpoints: {

         // Если ширина окна больше или равна 576px
         576: {
            slidesPerView: 3,
            spaceBetween: 9
         },
         // Если ширина окна больше или равна 320px
         320: {
            slidesPerView: 2,
            spaceBetween: 5
         }
      }
   });
 };


swiper18()