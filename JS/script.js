'use strict'

const form1 = document.getElementById('fb_phone');
const form2 = document.querySelector('.form-2');
const buttonVideo = document.querySelector('.main__content_icons-video');
const buttonVideo2 = document.querySelector('.main__content-4_header_right-video-icons');
const video = document.querySelector('.main__content_video-video');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const menuHeader = document.querySelector('.header-menu');
const buttonQuestions = document.querySelector('.header-menu__button');


// Маска для набора номера телефона из библиотеки IMask

const maskOptions = {
    mask: '+{7}(000) 000-00-00'
};
IMask(form1, maskOptions);


// form.forEach( () => {

// });




const videoHeader = () => {
        // Запуск видео при нажатии на кнопку
    buttonVideo.addEventListener('click',() => {
        video.style.display = 'block';
        overlay.style.display = 'block';
        // body.style.overflow = 'hidden';
        video.play();

    });
    buttonVideo2.addEventListener('click',() => {
        video.style.display = 'block';
        overlay.style.display = 'block';
        // body.style.overflow = 'hidden';
        video.play();

    });

    // Закрываем видео при нажатии на крестик или оверлай 
    window.addEventListener('click', (e) => {
        if (e.target.closest('.overlay') || e.target.classList.contains('close__video')) {
            video.style.display = 'none';
            overlay.style.display = 'none';
            form2.style.display = 'none';
            // body.style.overflow = 'auto';
            video.pause();
        };
    });
}

const popUp = () => {
    // Открываем форму при нажатии
    buttonQuestions.addEventListener('click', (e) => {
        form2.style.display = 'block';
        overlay.style.display = 'block';
    })
}

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


document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;       
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});


videoHeader();
menu();
popUp();

