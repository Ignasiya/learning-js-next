const lsUsersKey = 'reviews';

function getReviews() {
    const reviews = localStorage.getItem(lsUsersKey);
    if (!reviews) {
        return [];
    }
    return JSON.parse(reviews);
}

function addReview(productName, reviewText, reviews) {
    const existingProduct = reviews.find(product => product.productName === productName);

    if (existingProduct) {
        existingProduct.reviews.push(reviewText);
    } else {
        reviews.push({
            productName,
            reviews: [reviewText]
        });
    }

    localStorage.setItem(lsUsersKey, JSON.stringify(reviews));
}

function deleteReview(reviews, productIndex, index) {
    const product = reviews[productIndex];

    product.reviews.splice(index, 1);

    if (!product.reviews.length) {
        reviews.splice(reviews.indexOf(product), 1);
    }
    localStorage.setItem(lsUsersKey, JSON.stringify(reviews));
}

export { getReviews, addReview, deleteReview };