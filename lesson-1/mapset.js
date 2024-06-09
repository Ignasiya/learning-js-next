let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map);

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.size);

map.set('0', 'We')
    .set(0, 'likes')
    .set(false, 'JS')

console.log(map);

let recipeMap = new Map([
    ['огурец', 500],
    ['помидор', 350],
    ['лук', 50],
])

console.log(recipeMap);

for (let vegarable of recipeMap.keys()) {
    console.log(vegarable);
}

for (let amount of recipeMap.values()) {
    console.log(amount);
}

for (let entry of recipeMap) {
    console.log(entry);
}

recipeMap.forEach(value, key, map => {
    console.log(`${key}: ${value}`);
});

let map2 = new Map(Object.entries(obj));

let obj = Object.fromEntries(map);


let buddies = [
    'Жучка',
    'Тузик',
    'Булька',
    'Тузик',
    'Бобик',
    'Жучка',
    'Валера',
    'Жучка',
    'Тузик',
    'Манька',
];

let uniq = new Set(buddies);

console.log(uniq);

let arr = Array.from(uniq);

console.log(arr);