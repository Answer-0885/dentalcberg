const swiper10 = () => {
    const swiper5 = new Swiper('.swiper5', {
       navigation: {
          nextEl: '.tab-1__arrow--right',
          prevEl: '.tab-1__arrow--left',
       },
       loop: true,
      //  centeredSlides: true,
    //    autoplay: {
    //       delay: 2000,
    //       disableOnInteraction: false,
    //    },
   //   mousewheel: true,
       keyboard: true,
       slideToClickedSlide: true,

       breakpoints: {

           768: {
            slidesPerView: 3,
            spaceBetween: 5
         },
         // Если ширина окна больше или равна 576px
         576: {
            slidesPerView: 2,
            spaceBetween: 1
         },
         // Если ширина окна больше или равна 576px
         320: {
            slidesPerView: 1,
            spaceBetween: 1
         }
       }
    });
    const swiper6 = new Swiper('.swiper6', {
        navigation: {
            nextEl: '.tab-2__arrow--right',
            prevEl: '.tab-2__arrow--left',
        },
        loop: true,
        // autoplay: {
        //    delay: 2000,
        //    disableOnInteraction: false,
        // },
      // mousewheel: true,
        keyboard: true,
 
        breakpoints: {
  
           // Если ширина окна больше или равна 576px
           390: {
              slidesPerView: 3,
              spaceBetween: 1
           },
           // Если ширина окна больше или равна 576px
           320: {
              slidesPerView: 1,
              spaceBetween: 1
           }
        }
     });
 };

swiper10()