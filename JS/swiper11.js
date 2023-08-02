'use strict'
const swiper11 = () => {

    const swiper = new Swiper('.swiper2', {
      on: {
         transitionEnd :  () => {
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

            let activeIndex = swiper.activeIndex - 1;
            let realIndex = swiper.realIndex + 1;

            slidesSpan.innerHTML = '/ ' + quanitySlide;
            slides.innerHTML = realIndex;

            slideLength.forEach((slideActive, i)=>{
               doctors.forEach((doctor, idx) => {
                  if((idx) === activeIndex) {
           
                     doctors[idx].style.display = 'flex'
          
                  }
                    else {

                     doctors[idx].style.display = 'none'
   
                  }
               })
            })




            // slideActive.matches('div.swiper-slide.swiper-slide-active'
// -----------------------------------------

            // const slides1 = slides11.querySelectorAll('.swiper-slide');
            // let currentSlide = 0;
            // const nextSlide = (elems, index, strClass) => {
            //    elems[index].classList.add(strClass);
            // }

            // if (currentSlide >= slides.length) {
            //    currentSlide = 0;
            // }
            // if (currentSlide < 0) {
            //    currentSlide = slides.length - 1;
            // }

            // nextSlide(slides1, currentSlide, 'swiper-active-11');

// ---------------------------------------------
            // if(realIndex == 1) {

            //    console.log(realIndex);
            //    doctors1.style.display = 'flex'
            //    doctors2.style.display = 'none'
            //    doctors3.style.display = 'none'
            //    doctors4.style.display = 'none'
            //    doctors5.style.display = 'none'
            // } 
            // else if (realIndex == 2) {

            //    console.log(realIndex);
            //    doctors1.style.display = 'none'
            //    doctors2.style.display = 'flex'
            //    doctors3.style.display = 'none'
            //    doctors4.style.display = 'none'
            //    doctors5.style.display = 'none'
            // }
            // else if (realIndex == 3) {

            //    console.log(realIndex);
            //    doctors1.style.display = 'none'
            //    doctors2.style.display = 'none'
            //    doctors3.style.display = 'flex'
            //    doctors4.style.display = 'none'
            //    doctors5.style.display = 'none'
            // }
            // else if (realIndex == 4) {

            //    console.log(realIndex);
            //    doctors1.style.display = 'none'
            //    doctors2.style.display = 'none'
            //    doctors3.style.display = 'none'
            //    doctors4.style.display = 'flex'
            //    doctors5.style.display = 'none'
            // }
            // else if (realIndex == 5) {

            //    console.log(realIndex);
            //    doctors1.style.display = 'none'
            //    doctors2.style.display = 'none'
            //    doctors3.style.display = 'none'
            //    doctors4.style.display = 'none'
            //    doctors5.style.display = 'flex'
            // } else {
            //    return
            // }
         }},
       navigation: {
          nextEl: '.benefits__arrow--right',
         //  prevEl: '.benefits__arrow--left',
       },
       loop: true,
       loopedSlides: 5,
        autoplay: {
           delay: 2000,
           disableOnInteraction: false,
        },

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
             slidesPerView: 'auto',
            //  slidesPerView: 'auto',
             spaceBetween: 10,
          }
       }
    });
 };
swiper11()