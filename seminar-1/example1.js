function addMetadata(book, metadataType, data) {
    if (book[metadataType]) {
        book[metadataType].push(data)
    } else {
        book[metadataType] = [data];
    }
}

function getMetadata(book, metadataType) {
    return book[metadataType];
}

const book = {
    title: "1984",
    author: "George Orwell",
}

const review = Symbol('review');
const rating = Symbol('rating');
const tags = Symbol('tags');

addMetadata(book, review, 'Отличная книга о дистопии');
addMetadata(book, rating, 5);
addMetadata(book, tags, 'dystopia');

console.log(getMetadata(book, review));
console.log(getMetadata(book, rating));
console.log(getMetadata(book, tags));