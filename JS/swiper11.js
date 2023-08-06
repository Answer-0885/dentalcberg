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

            // Определяет общее количество слайдов
            let quanitySlide = slideLength.length; 
            // Определяет номер текущего слайда   
            let realIndex = swiper.realIndex + 1;

            // Определяет активный индекс из уникальных   
            let activeIndex = swiper.activeIndex;
            
            // Определяет индекс текщуего слайда
            let currentIndex = swiper.realIndex;

            // Добавляем на страницу общее количество слайдов
            slidesSpan.innerHTML = '/ ' + quanitySlide;
            // Добавляем на страницу номер текущего слайда
            slides.innerHTML = realIndex;

            // Перебираем блоки с докторами 

                  doctors.forEach((doctor, idx) => {  
            // и если индекс блока совпадает с индексом текущего слайда, то он выводится на экран 
                     if((idx) === currentIndex) {
                        doctors[idx].style.display = 'flex'          
                  }
                    else {
                     // В противном случае блок будет закрыт
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
         // определяет реальный индекс без сбоя при переходе от последнего к первому
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

      // pagination: {
        // el: '.swiper-pagination',
         // clickable: true,
         // type: 'fraction',
    // },
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