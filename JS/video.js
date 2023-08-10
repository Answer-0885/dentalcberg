'use strict'

const video = () => {
	const openVideo1 = document.querySelectorAll('.video_1_play')
	const openVideo2 = document.querySelector('.video_2_play')
	const openVideo3 = document.querySelectorAll('.video_3_play')
	const openVideo4 = document.querySelectorAll('.video_4_play')
	const openVideo5 = document.querySelector('.video_5_play')
	const openVideo6 = document.querySelector('.video_6_play')
	const openVideo7 = document.querySelector('.video_7_play')
	const openVideo8 = document.querySelector('.video_8_play')
	const openVideo9 = document.querySelector('.video_9_play')
	const video1 = document.querySelector('.video_1')
	const video2 = document.querySelector('.video_2') 
	const video3 = document.querySelector('.video_3') 
	const video4 = document.querySelector('.video_4') 
	const video5 = document.querySelector('.video_5') 
	const video6 = document.querySelector('.video_6') 
	const video7 = document.querySelector('.video_7') 
	const video8 = document.querySelector('.video_8') 
	const video9 = document.querySelector('.video_9') 
	const overlay = document.querySelector('.overlay')
	const body = document.querySelector('body')
	//const buttonQuestions = document.querySelector('.header-menu__button');
        // Запуск видео при нажатии на кнопку

		// Видео 1 о технологии восстановления зубов на 4-6 имплантах
		openVideo1.forEach(btn => {
			btn.addEventListener('click', () => {
				video1.style.display = 'block';
				overlay.style.display = 'block';
				body.style.overflow = 'hidden';
				video1.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
				// video.play();
				// video.requestFullscreen();
		animate({
			duration: 600,
			timing(timeFraction) {
			   return timeFraction;
			},
			draw(progress) {
			   video1.style.opacity = progress;
			   overlay.style.opacity = progress;
			}
		 });
    });
		})

		// Видео 2 Приветствие Ольга Тишкина
		openVideo2.addEventListener('click', () => {
				video2.style.display = 'block';
				overlay.style.display = 'block';
				body.style.overflow = 'hidden';
				video2.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
				// video.play();
				// video.requestFullscreen();
		animate({
			duration: 600,
			timing(timeFraction) {
			   return timeFraction;
			},
			draw(progress) {
			   video2.style.opacity = progress;
			   overlay.style.opacity = progress;
			}
		 });
    });
	// Видео 3 ОТЗЫВ о лечении в Центре
	openVideo3.forEach(btn => {
		btn.addEventListener('click', () => {
			video3.style.display = 'block';
			overlay.style.display = 'block';
			body.style.overflow = 'hidden';
			video3.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
			// video.play();
			// video.requestFullscreen();
	animate({
		duration: 600,
		timing(timeFraction) {
		   return timeFraction;
		},
		draw(progress) {
		   video3.style.opacity = progress;
		   overlay.style.opacity = progress;
		}
	 });
	});
	})

	// Видео 4 ОТЗЫВ 2 о лечении в Центре
	openVideo4.forEach(btn => {
		btn.addEventListener('click', () => {
			video4.style.display = 'block';
			overlay.style.display = 'block';
			body.style.overflow = 'hidden';
			video4.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
			// video.play();
			// video.requestFullscreen();
	animate({
		duration: 600,
		timing(timeFraction) {
		   return timeFraction;
		},
		draw(progress) {
		   video4.style.opacity = progress;
		   overlay.style.opacity = progress;
		}
	 });
	});
	})


// Видео 5 Протезирование при полной адентии с помощью протокола All-On-4
	openVideo5.addEventListener('click', () => {
		video5.style.display = 'block';
		overlay.style.display = 'block';
		body.style.overflow = 'hidden';
		video5.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
		// video.play();
		// video.requestFullscreen();
	animate({
	duration: 600,
	timing(timeFraction) {
	return timeFraction;
	},
	draw(progress) {
	video5.style.opacity = progress;
	overlay.style.opacity = progress;
	}
	});
});

// ВИДЕО 6 Как ЧАСТО нужно ходить к стоматологу? / Почему порой осмотр ВАЖНЕЕ, чем само лечение?
	openVideo6.addEventListener('click', () => {
		video6.style.display = 'block';
		overlay.style.display = 'block';
		body.style.overflow = 'hidden';
		video6.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
		// video.play();
		// video.requestFullscreen();
			animate({
			duration: 600,
			timing(timeFraction) {
			return timeFraction;
			},
			draw(progress) {
			video6.style.opacity = progress;
			overlay.style.opacity = progress;
	}
	});
});

// ВИДЕО 7 Что такое ИМПЛАНТАТ зуба? / Восстановление зубов
	openVideo7.addEventListener('click', () => {
		video7.style.display = 'block';
		overlay.style.display = 'block';
		body.style.overflow = 'hidden';
		video7.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
		// video.play();
		// video.requestFullscreen();
			animate({
			duration: 600,
			timing(timeFraction) {
			return timeFraction;
			},
			draw(progress) {
			video7.style.opacity = progress;
			overlay.style.opacity = progress;
	}
	});
});

// ВИДЕО 8 НАРКОЗ В СТОМАТОЛОГИИ: БОЯТЬСЯ ИЛИ НЕТ? / Советы стоматолога по выбору анестезии
openVideo8.addEventListener('click', () => {
	video8.style.display = 'block';
	overlay.style.display = 'block';
	body.style.overflow = 'hidden';
	video8.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
	// video.play();
	// video.requestFullscreen();
		animate({
		duration: 600,
		timing(timeFraction) {
		return timeFraction;
		},
		draw(progress) {
		video8.style.opacity = progress;
		overlay.style.opacity = progress;
}
});
});

// ВИДЕО 9 Как восстановить потерянные зубы? | Какой протез выбрать?
openVideo9.addEventListener('click', () => {
	video9.style.display = 'block';
	overlay.style.display = 'block';
	body.style.overflow = 'hidden';
	video9.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
	// video.play();
	// video.requestFullscreen();
		animate({
		duration: 600,
		timing(timeFraction) {
		return timeFraction;
		},
		draw(progress) {
		video9.style.opacity = progress;
		overlay.style.opacity = progress;
}
});
});

    // Закрываем и форму и видео при нажатии на крестик или оверлай 
    window.addEventListener('click', (e) => {
        if (e.target.closest('.overlay') || e.target.classList.contains('close__video')) {
            video1.style.display = 'none';
            video2.style.display = 'none';
            video3.style.display = 'none';
            video4.style.display = 'none';
            video5.style.display = 'none';
            video6.style.display = 'none';
            video7.style.display = 'none';
            video8.style.display = 'none';
            video9.style.display = 'none';
            overlay.style.display = 'none';
            body.style.overflow = 'auto';
			// video.pause();
			// Останавливаем видео с ютуб
			video1.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
			video2.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
			video3.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
			video4.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
			video5.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
			video6.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
			video7.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
			video8.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
			video9.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');

        };
    });
}

video();


