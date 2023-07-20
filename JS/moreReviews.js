const moreReviews = () => {
    const btnMoreReviews1 = document.querySelector('.button-reviews-1');
    const btnMoreReviews2 = document.querySelector('.button-reviews-2');
    const btnFeedback = document.querySelector('.btn_feedback-22');
    const btnHide1 = document.querySelector('.hide-1');
    const btnHide2 = document.querySelector('.hide-2');
    const btnHide3 = document.querySelector('.hide-3');
    const blockReviews1 = document.querySelectorAll('.reviews-1');
    const blockReviews2 = document.querySelectorAll('.reviews-2');
    const blockFeedback = document.querySelectorAll('.reviews-3');

    // Кнопка с видеоотзывами первая
btnMoreReviews1.addEventListener('click', () => {
    blockReviews1.forEach(block => {
        block.classList.remove('d-none');
        btnHide1.classList.remove('d-none');
        btnMoreReviews1.classList.add('d-none');
    })
        
})

btnHide1.addEventListener('click', () => {
    blockReviews1.forEach(block => {
        block.classList.add('d-none');
        btnHide1.classList.add('d-none');
        btnMoreReviews1.classList.remove('d-none');
})
})

// Кнопка с видеоотзывами вторая

btnMoreReviews2.addEventListener('click', () => {
    blockReviews2.forEach(block => {
        block.classList.remove('d-none');
        btnHide2.classList.remove('d-none');
        btnMoreReviews2.classList.add('d-none');
    })
			
})
btnHide2.addEventListener('click', () => {
    blockReviews2.forEach(block => {
        block.classList.add('d-none');
        btnHide2.classList.add('d-none');
        btnMoreReviews2.classList.remove('d-none');
    })
})
// Кнопка с обычными отзывами вторая

btnFeedback.addEventListener('click', () => {
    blockFeedback.forEach(block => {
        block.classList.remove('d-none');
        btnHide3.classList.remove('d-none');
        btnFeedback.classList.add('d-none');
    })
			
})
btnHide3.addEventListener('click', () => {
    blockFeedback.forEach(block => {
        block.classList.add('d-none');
        btnHide3.classList.add('d-none');
        btnFeedback.classList.remove('d-none');
    })
})
}

moreReviews()