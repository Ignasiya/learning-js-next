/*
Задание 1.
1. Необходимо выводить на страницу текущую ширину и высоту окна браузера, при изменении значений, вывод также должен меняться.
*/

const widthBom = window.innerWidth;
const heightBom = window.innerHeight;

const resultEl = document.querySelector('.width-height');
resultEl.innerHTML = 'Ширина окна браузера: ' + widthBom + ', высота окна браузера: ' + heightBom;

window.addEventListener('resize', () => {
    resultEl.innerHTML = 'Ширина окна браузера: ' + window.innerWidth + ', высота окна браузера: ' + window.innerHeight;
});

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

