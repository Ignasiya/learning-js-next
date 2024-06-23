const filterElementsByDataAttribute = (attribute, max) => {
    const elements = Array.from(document.querySelectorAll(`[data-${attribute}]`));
    elements.forEach((element) => {
        const value = parseFloat(element.dataset[attribute]);
        if (value > max) {
            element.style.display = 'none';
        }
    });
};

filterElementsByDataAttribute('price', 90);

const sortElementsByDataAttribute = attribute => {
    const rating = document.querySelector('.rating');
    const elements = Array.from(rating.querySelectorAll(`[data-${attribute}]`));
    elements.sort((a, b) => {
        const valueA = parseInt(a.dataset[attribute]);
        const valueB = parseInt(b.dataset[attribute]);
        if (valueA > valueB) {
            return 1;
        }
        if (valueA < valueB) {
            return -1;
        }
        return 0;
    });
    elements.forEach((element) => {
        rating.appendChild(element);
    });
};

sortElementsByDataAttribute('rating');