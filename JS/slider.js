const slider = () => {
    const sliderBlock = document.querySelector('.main__content-8_swiper-list');
    const slides = document.querySelectorAll('.main__content-8_swiper-item');
    let ulDots = document.querySelector('.main__content-8_swiper-dots');
 
 
    let timeInterval = 4000;
    let currentSlide = 0;
    let interval;
 
    const prevSlide = (elems, index, strClass) => {
       elems[index].classList.remove(strClass);
    }
 
    const nextSlide = (elems, index, strClass) => {
       elems[index].classList.add(strClass);
    }
 
    const autoSlide = () => {
       let dots = document.querySelectorAll('.dot');
 
       prevSlide(slides, currentSlide, 'swiper-item-active');
       prevSlide(dots, currentSlide, 'dot-active');
       currentSlide++;
       if (currentSlide >= slides.length) {
          currentSlide = 0;
       }
       nextSlide(slides, currentSlide, 'swiper-item-active');
       nextSlide(dots, currentSlide, 'dot-active');
    }
 
    const startSlide = (timer = 1500) => {
       interval = setInterval(autoSlide, timer);
    }
    const stopSlide = () => {
       clearInterval(interval);
    }
 
    sliderBlock.addEventListener('click', (e) => {
       e.preventDefault()
       let dots = document.querySelectorAll('.dot');
 
       if (!e.target.matches('.dot, .main__content-8_swiper-btn')) {
          return
       }
 
       prevSlide(slides, currentSlide, 'swiper-item-active');
       prevSlide(dots, currentSlide, 'dot-active');
 
       if (e.target.matches('#arrow-right')) {
          currentSlide++;
       } else if (e.target.matches('#arrow-left')) {
          currentSlide--;
       } else if (e.target.classList.contains('dot')) {
          dots.forEach((dot, index) => {
             if (e.target === dot) {
                currentSlide = index;
             }
          })
       }
       if (currentSlide >= slides.length) {
          currentSlide = 0;
       }
       if (currentSlide < 0) {
          currentSlide = slides.length - 1;
       }
       nextSlide(slides, currentSlide, 'swiper-item-active');
       nextSlide(dots, currentSlide, 'dot-active');
    })
    sliderBlock.addEventListener('mouseenter', (e) => {
       if (e.target.matches('.dot, .main__content-8_swiper-btn')) {
          stopSlide();
       }
    }, true)
    sliderBlock.addEventListener('mouseleave', (e) => {
       if (e.target.matches('.dot, .main__content-8_swiper-btn')) {
          startSlide(timeInterval);
       }
    }, true)
    // Добавляем точки для слайдера
    const dotAdd = () => {
       for (let i = 0; i < slides.length; i++) {
          let dot = document.createElement('li');
          dot.classList.add('dot');
          ulDots.append(dot);
       }
 
       ulDots.children[0].classList.add('dot-active');
    };
 
    if (sliderBlock && slides && ulDots) {
       dotAdd();
       startSlide(timeInterval);
    }
 }
slider();