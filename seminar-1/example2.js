const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" },
]

books[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to
                ? { done: false, value: books[this.current++] }
                : { done: true };
        }
    }
}

for (let book of books) {
    console.log(`${book.title} - ${book.author}`);
}