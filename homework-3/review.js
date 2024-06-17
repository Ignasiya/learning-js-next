import { getReviews, addReview } from './storage.js';

const formEl = document.querySelector('.reviewForm');
const errorMessageEl = document.querySelector('.errorMessage');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const productNameEl = formEl.querySelector('#productName').value;
    const reviewTextEl = formEl.querySelector('#reviewText').value;

    const reviews = getReviews();

    if (!productNameEl || !reviewTextEl) {
        errorMessageEl.textContent = 'Пожалуйста, заполните все поля!';
        return;
    }

    errorMessageEl.textContent = '';

    addReview(productNameEl, reviewTextEl, reviews);

    location.href = "view-reviews.html";
});