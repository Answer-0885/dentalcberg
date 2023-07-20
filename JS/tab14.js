const tab14 = () => {
    const noOneTooth = document.querySelector('.no_one_tooth-14');
    const noAllTooth = document.querySelector('.no_all_tooth-14');
    const btnOneTooth = document.querySelector('.button-1_14');
    const btnTwoTooth = document.querySelector('.button-2_14');

    btnTwoTooth.addEventListener('click', ()=> {
        noOneTooth.style.display = 'none';
        noAllTooth.style.display = 'flex';
        btnOneTooth.classList.remove('button_active');
        btnTwoTooth.classList.add('button_active');
    })    
    btnOneTooth.addEventListener('click', ()=> {
        noOneTooth.style.display = 'flex';
        noAllTooth.style.display = 'none';
        btnOneTooth.classList.add('button_active');
        btnTwoTooth.classList.remove('button_active');
    })    

}

tab14()