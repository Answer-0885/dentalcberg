'use strict'
const swiper11 = () => {

    const swiper = new Swiper('.swiper2', {
      on: {
         slideChange :  (e) => {
            const slides11 = document.querySelector('.slides-11');
            const slides = document.querySelector('.slide_number .span1');
            const slidesSpan = document.querySelector('.slide_number .span2');
            const slideLength = slides11.querySelectorAll('div');
            const doctors = document.querySelectorAll('.main__content-11 .doctors');


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

         }
      },
      slideChangeStart :  (e) => {

         const slides11 = document.querySelector('.slides-11');
         const slideLength = slides11.querySelectorAll('div');
         const doctors = document.querySelectorAll('.main__content-11 .doctors');
         // определяет реальный индекс
         let index = swiper.eq(swiper.activeIndex).attr('data-swiper-slide-index');
 
         doctors.forEach((doctor, idx) => {   
            slideLength.forEach((slideActive, i) => {
               slideActive.addEventListener('click', (e)=> {
                  // При клике на слайд открывается соответсвующий контент
               if(e.target[index] === doctors[idx]) {
                  return    

                } else if (e.target[index] !== doctors[idx]) {
                  // открывает тот слайд индекс с которым совпадает
                  doctors[i].style.display = 'flex' 
                  // остальные слайды закрывает   
                  doctors[idx].style.display = 'none' 

                }

            })
         })
      })
      },

      // останавливает слайд при наведении
      // on: {
      //    init() {
      //       document.querySelector(".slides-11").addEventListener("mouseover", function( ) {
      //          swiper.autoplay.stop();
      //      });
      //      document.querySelector(".slides-11").addEventListener("mouseout", function( ) {
      //       swiper.autoplay.start();
      //   });
      //    }
      //  },
      navigation: {
         nextEl: '.benefits__arrow--right',
         prevEl: '.benefits__arrow--left',
      },
        loop: true, 
      //   centeredSlides: false,
        autoplay: {
           delay: 5000,
           disableOnInteraction: false,
        },

      slideToClickedSlide: true,// ОЧЕНЬ ВАЖНО !!! при клике делает активным слайд

       pagination: {
         el: '.swiper-pagination',
         // clickable: true,
         // type: 'fraction',
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