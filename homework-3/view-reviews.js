import { getReviews, deleteReview } from './storage.js';

const reviewsContainer = document.querySelector('.reviews-container');

function displayReviews() {
    const productReviews = getReviews();

    reviewsContainer.innerHTML = '';

    productReviews.forEach((review, indexProduct) => {
        const reviewDiv = document.createElement('div');
        const productNameDiv = document.createElement('div');
        const reviewsTextDiv = document.createElement('div');
        const toggleButton = document.createElement('button');
        const productName = review.productName;

        productNameDiv.textContent = productName;
        toggleButton.textContent = 'Показать отзывы';
        reviewsTextDiv.style.display = 'none';

        toggleButton.addEventListener('click', () => {
            if (toggleButton.textContent === 'Показать отзывы') {
                reviewsTextDiv.style.display = 'block';
                toggleButton.textContent = 'Скрыть отзывы';
            } else {
                reviewsTextDiv.style.display = 'none';
                toggleButton.textContent = 'Показать отзывы';
            }
        });

        const reviews = review.reviews;
        reviews.forEach((review, index) => {
            const reviewTextDiv = document.createElement('p');
            const deleteButton = document.createElement('button');

            deleteButton.textContent = 'Удалить отзыв';
            reviewTextDiv.textContent = review;

            deleteButton.addEventListener('click', () => {
                deleteReview(productReviews, indexProduct, index);
                displayReviews();
            });

            reviewTextDiv.appendChild(deleteButton);
            reviewsTextDiv.appendChild(reviewTextDiv);
        });

        reviewDiv.appendChild(productNameDiv);
        reviewDiv.appendChild(toggleButton);
        reviewDiv.appendChild(reviewsTextDiv);
        reviewsContainer.appendChild(reviewDiv);
    });
}

displayReviews();