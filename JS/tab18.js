const tab18 = () => {
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');
    const slides1 = document.querySelector('.swiper3');
    const slides2 = document.querySelector('.swiper4');


    btnRight.addEventListener('click', ()=> {
        slides1.style.display = 'none';
        slides2.style.display = 'block';
        btnRight.classList.add('button_active');
        btnLeft.classList.remove('button_active');    
    })
    btnLeft.addEventListener('click', ()=> {
        slides1.style.display = 'block';
        slides2.style.display = 'none';
        btnLeft.classList.add('button_active');
        btnRight.classList.remove('button_active');
    })
}

tab18()