localStorage.setItem('name', 'John');

let soredUsername = localStorage.getItem('name');
console.log(soredUsername, 'name');

localStorage.removeItem('name');

localStorage.clear();

if (localStorage.getItem('counter')) {
    let counter = Number(localStorage.getItem('counter')) + 1;
    localStorage.setItem('counter', counter.toString());
} else {
    localStorage.setItem('counter', '1');
}

console.log('Счётчик:' + localStorage.getItem('counter'));