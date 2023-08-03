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
       
    //    pagination: {
    //      el: '.swiper-pagination',
    //      clickable: true,
    //  },
   //   mousewheel: true,
       keyboard: true,

       breakpoints: {
 
          // Если ширина окна больше или равна 992px
           992: {
              slidesPerView: 5,
              spaceBetween: 38
           },
          
           576: {
              slidesPerView: 4,
              spaceBetween: 10
           },
          
           360: {
              slidesPerView: 3,
              spaceBetween: 10
           },         
           320: {
              slidesPerView: 2,
              spaceBetween: 10
           }
       }
    });
 };
swiper19()