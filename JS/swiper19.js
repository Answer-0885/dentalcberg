'use strict'
const swiper19 = () => {
    const swiper = new Swiper('.swiper7', {
    //    navigation: {
    //       nextEl: '.benefits__arrow--right',
    //       prevEl: '.benefits__arrow--left',
    //    },
       loop: true,
       autoplay: {
          delay: 2000,
          disableOnInteraction: false,
       },
       slidesPerView: 5,
       spaceBetween: 10,
       
    //    pagination: {
    //      el: '.swiper-pagination',
    //      clickable: true,
    //  },
   //   mousewheel: true,
       keyboard: true,

       breakpoints: {
 
          // Если ширина окна больше или равна 576px
        //    576: {
        //       slidesPerView: 6,
        //       spaceBetween: 10
        //    }
       }
    });
 };
swiper19()