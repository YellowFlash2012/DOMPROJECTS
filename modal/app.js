const openModal = document.querySelector('.modal-btn');

const modalOverlay = document.querySelector('.modal-overlay');

const closeModal = document.querySelector('.close-btn');

openModal.addEventListener('click', () => {
    modalOverlay.classList.toggle('open-modal');
});

closeModal.addEventListener('click', () => {
    modalOverlay.classList.toggle('open-modal');
});