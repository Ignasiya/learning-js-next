/**
 * Задание 3.    
    У вас есть кнопка "Купить". Создайте скрипт, который при клике 
    на эту кнопку меняет её текст на "Товар добавлен в корзину" в 
    течение 2 секунд, а затем возвращает исходный текст "Купить". 
    В обработчике события клика также проверьте, является ли 
    событие доверенным (event.isTrusted). Если событие является
    доверенным, выполните изменение текста кнопки и убедитесь, 
    что после 2 секунд текст возвращается в исходное состояние.
 */

const butBtnEl = document.querySelector('.btn-buy');

butBtnEl.addEventListener('click', event => {
    if (event.isTrusted) {
        butBtnEl.textContent = 'Товар добавлен в корзину';
        butBtnEl.disabled = true;
        setTimeout(() => {
            butBtnEl.textContent = 'Купить';
            butBtnEl.disabled = false;
        }, 2000);
    }
});