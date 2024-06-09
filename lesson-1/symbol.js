const symbol = Symbol();

const dogID = Symbol('dog');

const dog1 = Symbol('dog');
const dog2 = Symbol('dog');

console.log(dog1 === dog2);

let buddy = {
    [dogID]: 'Жучка',
}

console.log(buddy[dogID]);

buddy[dogID] = 'Бобик'; // Не даст перезаписать

console.log(buddy[dogID]);

let buddy1 = {
    name: 'Тузик'
};

buddy1.id = 'Наш идентификатор';
buddy1.id = 'Их идентификатор'; // Перезапишет

let buddies = {
    [Symbol('Жучка')]: 'Жучка',
    [Symbol('Мурка')]: 'Мурка',
    [Symbol('Таракашка')]: 'Таракашка',
    elephant: 'Слон',
}

console.log(buddies);

let newBuddies = {};
Object.assign(newBuddies, buddies);

buddies.cat = 'Барсик';

console.log(newBuddies);

let id = Symbol.for('id');
let idAgain = Symbol.for('id');
console.log(id === idAgain);

let sym = Symbol.for('name');
let sym2 = Symbol.for('id');

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));