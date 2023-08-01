'use strict'

const video = () => {
	const openVideo = document.querySelectorAll('.video_1_play');
	const video = document.querySelector('.video_1');
	const overlay = document.querySelector('.overlay');
	const body = document.querySelector('body');
	//const buttonQuestions = document.querySelector('.header-menu__button');

        // Запуск видео при нажатии на кнопку
		openVideo.forEach(btn => {
			btn.addEventListener('click', () => {

				video.style.display = 'block';
				overlay.style.display = 'block';
				body.style.overflow = 'hidden';
				video.play();
				// video.requestFullscreen();
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

video();


