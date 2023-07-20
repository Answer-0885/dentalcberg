const quiz = () => {
   const change1 = document.querySelectorAll('.change-1'); 
   const change2 = document.querySelectorAll('.change-2'); 
   const change3 = document.querySelectorAll('.change-3'); 
   const change4 = document.querySelectorAll('.change-4'); 
   const other1 = document.querySelector('.input_1-1'); 
   const other2 = document.querySelector('.input_2-4'); 
   const stepBack2 = document.querySelector('.step_back-2'); 
   const stepBack3 = document.querySelector('.step_back-3'); 
   const stepBack4 = document.querySelector('.step_back-4'); 
   const step1 = document.querySelector('.block-9-step-1'); 
   const step2 = document.querySelector('.block-9-step-2'); 
   const step3 = document.querySelector('.block-9-step-3'); 
   const step4 = document.querySelector('.block-9-step-4'); 
   const step5 = document.querySelector('.block-9-step-5'); 

//    Первый шаг
change1.forEach(btn =>{
        btn.addEventListener('click', ()=> {
            step1.style.display = 'none';
            step2.style.display = 'flex';
        })
   })

other1.addEventListener('click', ()=> {
    step1.style.display = 'none';
    step2.style.display = 'flex';
})

   // Второй шаг
change2.forEach(btn =>{
    btn.addEventListener('click', ()=> {
        step2.style.display = 'none';
        step3.style.display = 'flex';
        })
   })

other2.addEventListener('click', ()=> {
    step2.style.display = 'none';
    step3.style.display = 'flex';
})

stepBack2.addEventListener('click', ()=> {
    step1.style.display = 'flex';
    step2.style.display = 'none';
})

   // Третий шаг
change3.forEach(btn =>{
btn.addEventListener('click', ()=> {
    step3.style.display = 'none';
    step4.style.display = 'flex';
    })
})

stepBack3.addEventListener('click', ()=> {
    step3.style.display = 'none';
    step2.style.display = 'flex';
})
   // Четвёртый шаг
change4.forEach(btn =>{
btn.addEventListener('click', ()=> {
    step4.style.display = 'none';
    step5.style.display = 'flex';
    })
})
stepBack4.addEventListener('click', ()=> {
    step3.style.display = 'flex';
    step4.style.display = 'none';
})


}
quiz()