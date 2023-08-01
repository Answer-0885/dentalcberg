'use strict'
const swiper11 = () => {

    const swiper = new Swiper('.swiper2', {
      on: {
         slideChange:  () => {
            const slides11 = document.querySelector('.slides-11');
            const slides = document.querySelector('.slide_number .span1');
            const slidesSpan = document.querySelector('.slide_number .span2');
            const slideLength = slides11.querySelectorAll('div');
            const doctors1 = document.querySelector('.doctors.d-1');
            const doctors2 = document.querySelector('.doctors.d-2');
            const doctors3 = document.querySelector('.doctors.d-3');
            const doctors4 = document.querySelector('.doctors.d-4');
            const doctors5 = document.querySelector('.doctors.d-5');

            let quanitySlide = slideLength.length; 
            let activeIndex = swiper.activeIndex;
            let realIndex = swiper.realIndex + 1;
           
            slidesSpan.innerHTML = '/ ' + quanitySlide;
            slides.innerHTML = realIndex;

            if(activeIndex == 0) {
               console.log(activeIndex);
               doctors1.style.display = 'flex'
               doctors2.style.display = 'none'
               doctors3.style.display = 'none'
               doctors4.style.display = 'none'
               doctors5.style.display = 'none'
            } 
            else if (activeIndex == 1) {
               console.log(activeIndex);
               doctors1.style.display = 'none'
               doctors2.style.display = 'flex'
               doctors3.style.display = 'none'
               doctors4.style.display = 'none'
               doctors5.style.display = 'none'
            }
            else if (activeIndex == 2) {
               console.log(activeIndex);
               doctors1.style.display = 'none'
               doctors2.style.display = 'none'
               doctors3.style.display = 'flex'
               doctors4.style.display = 'none'
               doctors5.style.display = 'none'
            }
            else if (activeIndex == 3) {
               console.log(activeIndex);
               doctors1.style.display = 'none'
               doctors2.style.display = 'none'
               doctors3.style.display = 'none'
               doctors4.style.display = 'flex'
               doctors5.style.display = 'none'
            }
            else if (activeIndex == 4) {
               console.log(activeIndex);
               doctors1.style.display = 'none'
               doctors2.style.display = 'none'
               doctors3.style.display = 'none'
               doctors4.style.display = 'none'
               doctors5.style.display = 'flex'
            } else {
               return
            }
         }},
       navigation: {
          nextEl: '.benefits__arrow--right',
         //  prevEl: '.benefits__arrow--left',
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
             slidesPerView: 3,
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