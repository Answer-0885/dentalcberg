const menuHeader = document.querySelector('.header-menu-list');



const menu = () => {
   const body = document.querySelector('body');
   const burgerMenu = document.querySelector('.header-body__burger-menu');
   const menu = document.querySelector('.header-menu');
    menuHeader.addEventListener('click', (e) => {
          // Плавно перемещаемся к выбранному блоку из списка меню
        if (menuHeader.contains(e.target)) {
          e.preventDefault();
          const block = e.target.getAttribute('href');
          body.classList.remove('fixed-page');
          burgerMenu.classList.remove('open-menu');
          menu.classList.remove('open-menu');
          document.querySelector(block).scrollIntoView({
             behavior: 'smooth',
             block: 'start'
          });
       } 
    });
 };

 menu();