const popUp = () => {
    const openForm = document.querySelectorAll('.open-form');
    const openFormQuestion = document.querySelectorAll('.open_form_questions');
    const openFormConsultation = document.querySelector('.main__content-5_desc-button');
    const form2 = document.querySelector('.form-2');
    const form3 = document.querySelector('.form-3');
    const form4 = document.querySelector('.form-4');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
    console.log(openFormQuestion);

   //Открываем форму - Записаться на приём
   openForm.forEach(btn => {
	btn.addEventListener('click', (e) => {
	   e.preventDefault();
	   form2.style.display = 'block';
	   overlay.style.display = 'block';
       body.style.overflow = 'hidden';
	   animate({
		  duration: 600,
		  timing(timeFraction) {
			 return timeFraction;
		  },
		  draw(progress) {
			form2.style.opacity = progress;
			 overlay.style.opacity = progress;
		  }
	   });
	});
 });
   //Открываем форму - Задать вопрос
   openFormQuestion.forEach(btn => {
    btn.addEventListener('click', (e) => {
	   e.preventDefault();
	   form3.style.display = 'block';
	   overlay.style.display = 'block';
       body.style.overflow = 'hidden';
	   animate({
		  duration: 600,
		  timing(timeFraction) {
			 return timeFraction;
		  },
		  draw(progress) {
			form3.style.opacity = progress;
			 overlay.style.opacity = progress;
		  }
	   });
    });
	});

   // Получить бесплатную консультацию
   openFormConsultation.addEventListener('click', (e) => {
	   e.preventDefault();
	   form4.style.display = 'block';
	   overlay.style.display = 'block';
       body.style.overflow = 'hidden';
	   animate({
		  duration: 600,
		  timing(timeFraction) {
			 return timeFraction;
		  },
		  draw(progress) {
			form3.style.opacity = progress;
			 overlay.style.opacity = progress;
		  }
	   });
    });



     // Закрываем и форму и видео при нажатии на крестик или оверлай 
     window.addEventListener('click', (e) => {
        if (e.target.closest('.overlay') || e.target.classList.contains('close__video')) {
            overlay.style.display = 'none';
            form2.style.display = 'none';
            form3.style.display = 'none';
            form4.style.display = 'none';
            body.style.overflow = 'auto';
        };
    });

}

popUp();