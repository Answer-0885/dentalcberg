'use strict'
const swiper11 = () => {

    const swiper = new Swiper('.swiper2', {
      on: {
         slideChange :  () => {
            const slides11 = document.querySelector('.slides-11');
            const slides = document.querySelector('.slide_number .span1');
            const slidesSpan = document.querySelector('.slide_number .span2');
            const slideLength = slides11.querySelectorAll('.swiper-slide');
            const doctors = document.querySelectorAll('.main__content-11 .doctors');
            const doctors1 = document.querySelector('.doctors.d-1');
            const doctors2 = document.querySelector('.doctors.d-2');
            const doctors3 = document.querySelector('.doctors.d-3');
            const doctors4 = document.querySelector('.doctors.d-4');
            const doctors5 = document.querySelector('.doctors.d-5');

            let quanitySlide = slideLength.length; 

            let activeIndex = swiper.activeIndex;
            let realIndex = swiper.realIndex + 1;
            let currentIndex = swiper.realIndex;

            slidesSpan.innerHTML = '/ ' + quanitySlide;
            slides.innerHTML = realIndex;


                  doctors.forEach((doctor, idx) => {   

                     if((idx) === currentIndex) {
                        doctors[idx].style.display = 'flex'          
                  }
                    else {
                     doctors[idx].style.display = 'none'
                  }

               })

// -----------------------------------------

         }},
       navigation: {
          nextEl: '.benefits__arrow--right',
          prevEl: '.benefits__arrow--left',
       },
       loop: true,
      //  loopedSlides: 10,
      //   autoplay: {
      //      delay: 5000,
      //      disableOnInteraction: false,
      //   },

       pagination: {
         el: '.swiper-pagination'
     },
   //   mousewheel: true,
       keyboard: true,

       breakpoints: {
 
          // Если ширина окна больше или равна 576px
          320: {
             slidesPerView: 2,
             spaceBetween: 10
          },
          // Если ширина окна больше или равна 360px
          360: {
             slidesPerView: 3,
             spaceBetween: 10 
          },
          // Если ширина окна больше или равна 576px
          768: {
             slidesPerView: 4,
             spaceBetween: 10,
          },
          992: {
             slidesPerView: 5,
             spaceBetween: 10,
          }
       }
    });
 };
swiper11()