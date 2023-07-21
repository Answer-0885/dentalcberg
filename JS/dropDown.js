document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
	const neodent = document.querySelectorAll('.neodent');
	const noris = document.querySelectorAll('.noris');
	const osstem = document.querySelectorAll('.osstem');
	const straumann = document.querySelectorAll('.straumann');
 

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
	});

	  // Выбор элемента списка.
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();  
            // Выбрать цену в зависимости от выбранного импланта
    neodent.forEach((neodent)=> {
        noris.forEach((noris)=>{
            osstem.forEach((osstem)=>{
                straumann.forEach((straumann)=>{
        
                    if(listItem.dataset.value == 'Neodent') {
                        neodent.style.display = 'block'
                        noris.style.display = 'none'
                        osstem.style.display = 'none'
                        straumann.style.display = 'none'
                    } else if (listItem.dataset.value == 'Noris') {
                        neodent.style.display = 'none'
                        noris.style.display = 'block'
                        osstem.style.display = 'none'
                        straumann.style.display = 'none'
                    } else if (listItem.dataset.value == 'Osstem') {
                        neodent.style.display = 'none'
                        noris.style.display = 'none'
                        osstem.style.display = 'block'
                        straumann.style.display = 'none'
                    } else if (listItem.dataset.value == 'Straumann') {
                        neodent.style.display = 'none'
                        noris.style.display = 'none'
                        osstem.style.display = 'none'
                        straumann.style.display = 'block'
                    }   

                })
            })
        })
    })
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
			dropDownBtn.innerHTML = this.innerHTML;           
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