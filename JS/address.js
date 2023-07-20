const address = () => {
    const address1 = document.querySelector('.address-block-1');
    const address2 = document.querySelector('.address-block-2');
    const tabAddress1 = document.querySelector('.contacts-1');
    const tabAddress2 = document.querySelector('.contacts-2');

    address2.addEventListener('click', ()=> {
        address2.classList.remove('no-active-25');
        address1.classList.add('no-active-25');
        tabAddress1.style.opacity = '0';
        tabAddress2.style.opacity = '1';
    })

    address1.addEventListener('click', ()=> {
        address2.classList.add('no-active-25');
        address1.classList.remove('no-active-25');
        tabAddress1.style.opacity = '1';
        tabAddress2.style.opacity = '0';
    })
}

address()