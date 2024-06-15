function* numberGenerator() {
    let i = 0;
    while (true) {
        i++;
        yield i;
    }
}

const numberIterator = numberGenerator();

console.log(numberIterator.next().value);
console.log(numberIterator.next().value);
console.log(numberIterator.next().value);
console.log(numberIterator.next().value);
console.log(numberIterator.next().value);
console.log(numberIterator.next().value);