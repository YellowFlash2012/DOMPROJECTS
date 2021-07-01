//using selectors inside the elements
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    
    btn.addEventListener('click', () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');

    });
});

//traversing the DOM
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         //e.currentTarget.parentElement.parentElement.classList.toggle('show-text');

//         const question = e.currentTarget.parentElement.parentElement;
        
//         question.classList.toggle('show-text');
//     });
// });