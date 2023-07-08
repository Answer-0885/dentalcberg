const menuHeader = document.querySelector('.header-menu');

const menu = () => {
    menuHeader.addEventListener('click', (e) => {
          // Плавно перемещаемся к выбранному блоку из списка меню
        if (menuHeader.contains(e.target)) {
          e.preventDefault();
          const block = e.target.getAttribute('href');
          document.querySelector(block).scrollIntoView({
             behavior: 'smooth',
             block: 'start'
          });
       } 
    });
 };

 menu();