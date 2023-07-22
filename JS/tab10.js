const tab10 = () => {
    const singleStage = document.querySelector('.swiper5');
    const twoStage = document.querySelector('.swiper6');
    const blockButton = document.querySelector('.main__content-10_button');
    const btnSingleStage = blockButton.querySelector('.button-1');
    const btnTwoStage = blockButton.querySelector('.button-2');
    const btnSwiper1 = document.querySelectorAll('.swiper_10_btn');
    const btnSwiper2 = document.querySelectorAll('.swiper_10_btn-2');


    btnSwiper1.forEach(btn1 => {
        btnSwiper2.forEach(btn2 => {
            btnTwoStage.addEventListener('click', ()=>{
                singleStage.style.display = 'none';
                twoStage.style.display = 'flex';
        
                btn1.style.display = 'none';
                btn2.style.display = 'block';
        
                btnSingleStage.classList.remove('button_active');
                btnTwoStage.classList.add('button_active');
            })
            btnSingleStage.addEventListener('click', ()=>{
                singleStage.style.display = 'flex';
                twoStage.style.display = 'none';
                btn1.style.display = 'block';
                btn2.style.display = 'none';
                btnSingleStage.classList.add('button_active');
                btnTwoStage.classList.remove('button_active');
            })
        })
    })


}

tab10()




