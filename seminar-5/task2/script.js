/**
 * Задание 2. 
    Создайте простое модальное окно, которое появляется при клике 
    на кнопку "Открыть модальное окно" и закрывается при клике на 
    кнопку "Закрыть". Модальное окно должно содержать заголовок 
    "Модальное окно" и кнопку для закрытия. Модальное окно должно 
    плавно появляться и исчезать при открытии и закрытии.
 */

const openModalBtnEl = document.querySelector('.open-modal-btn');
const modalEl = document.querySelector('.modal-window');

openModalBtnEl.addEventListener('click', () => {
    modalEl.style.display = 'block';

    document.addEventListener('click', closeModalHandler);
});

const closeModalHandler = (e) => {
    if (e.target.closest('.modal-window') || e.target === openModalBtnEl) {
        return;
    }
    modalEl.style.display = 'none';
    document.removeEventListener('click', closeModalHandler);
};
