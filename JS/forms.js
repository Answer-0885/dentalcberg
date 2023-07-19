const popUp = () => {
    const openForm = document.querySelectorAll('.open-form');
    const form2 = document.querySelector('.form-2');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');


   //Открываем модальные окна
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

     // Закрываем и форму и видео при нажатии на крестик или оверлай 
     window.addEventListener('click', (e) => {
        if (e.target.closest('.overlay') || e.target.classList.contains('close__video')) {
            overlay.style.display = 'none';
            form2.style.display = 'none';
            body.style.overflow = 'auto';
        };
    });

}

popUp();