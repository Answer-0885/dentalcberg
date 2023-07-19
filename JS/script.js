'use strict'

const openVideo = document.querySelectorAll('.video_1_play');
const video = document.querySelector('.video_1');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const buttonQuestions = document.querySelector('.header-menu__button');



// Маска для набора номера телефона из библиотеки IMask
document.querySelectorAll('.phone-mask').forEach((e) => {
    const phoneMask = IMask( e, { mask: '+{7}(000)000-00-00' })
  })


const videoHeader = () => {
        // Запуск видео при нажатии на кнопку

		openVideo.forEach(btn => {
			btn.addEventListener('click', () => {

				video.style.display = 'block';
				overlay.style.display = 'block';
				body.style.overflow = 'hidden';
				video.play();
		animate({
			duration: 600,
			timing(timeFraction) {
			   return timeFraction;
			},
			draw(progress) {
			   video.style.opacity = progress;
			   overlay.style.opacity = progress;
			}
		 });
    })});


    // Закрываем и форму и видео при нажатии на крестик или оверлай 
    window.addEventListener('click', (e) => {
        if (e.target.closest('.overlay') || e.target.classList.contains('close__video')) {
            video.style.display = 'none';
            overlay.style.display = 'none';
            body.style.overflow = 'auto';
			video.pause();
        };
    });
}






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


