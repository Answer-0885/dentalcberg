const tab10 = () => {
    const singleStage = document.querySelector('.main__content-10_flex_single-stage');
    const twoStage = document.querySelector('.main__content-10_flex_two-stage');
    const blockButton = document.querySelector('.main__content-10_button');
    const btnSingleStage = blockButton.querySelector('.button-1');
    const btnTwoStage = blockButton.querySelector('.button-2');

    btnTwoStage.addEventListener('click', ()=>{
        singleStage.style.display = 'none';
        twoStage.style.display = 'flex';
        btnSingleStage.classList.remove('button_active');
        btnTwoStage.classList.add('button_active');
    })
    btnSingleStage.addEventListener('click', ()=>{
        singleStage.style.display = 'flex';
        twoStage.style.display = 'none';
        btnSingleStage.classList.add('button_active');
        btnTwoStage.classList.remove('button_active');
    })
}

tab10()




