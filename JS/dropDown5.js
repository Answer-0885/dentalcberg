'use strict'
const dropDown5 = () => {
    // const dropDownList = document.querySelector('.dropdown-5-list');
    const whatsapp = document.querySelector('.dropdown-5-item-1')
    const telegram = document.querySelector('.dropdown-5-item-2')


    whatsapp.addEventListener('click', () =>{
        telegram.style.display = 'block'
        whatsapp.style.display = 'none'
    })

    telegram.addEventListener('click', () =>{
        whatsapp.style.display = 'block'
        telegram.style.display = 'none'
    })

}
dropDown5()
