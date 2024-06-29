/**
 * Задача 2.
 
Бесконечная лента фотографий
Для создания бесконечной ленты с фотографиями с использованием 
Unsplash API, выполните следующие шаги:
1. Зарегистрируйтесь на Unsplash:
○ Перейдите на веб-сайт Unsplash (https://unsplash.com/).
○ Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
○ Войдите в свой аккаунт Unsplash.
 
2. Создайте приложение:
○ После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash
(https://unsplash.com/developers).
○ Нажмите на кнопку "Your apps".
○ Нажмите "New Application" (Новое приложение).
○ Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете
использовать http://localhost для тестового сайта).
○ После заполнения информации, нажмите "Create Application" (Создать приложение).
 
3. Получите API-ключ:
○ После создания приложения, вы получите API-ключ. Этот ключ будет
отображаться в вашей панели управления приложением.
○ API-ключ представляет собой строку вида YOUR_ACCESS_KEY.
Скопируйте его.
4. Измените код HTML и JavaScript:
○ Откройте вашу HTML-страницу в текстовом редакторе или
интегрированной среде разработки.
○ Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный
API-ключ.
 
5. Реализуйте загрузку фотографий при открытии страницы.
 
6. Реализуйте бесконечную подгрузку фотографий при прокручивании страницы.
 */

const containerEl = document.querySelector('#photo-container');

document.addEventListener('DOMContentLoaded', main, false);

let counter = 1;
let isFetching = false;

document.addEventListener('scroll', async function () {
    const page = document.documentElement;
    if (page.scrollTop + page.clientHeight >= page.scrollHeight - 100 && !isFetching) {
        const data = await fetchPhotosList(counter++);
        let photosHTML = '';
        data.forEach(photo => {
            photosHTML += createPhoto(photo);
        });
        containerEl.insertAdjacentHTML('beforeend', photosHTML);
    }
});

async function fetchPhotosList(page) {
    try {
        isFetching = true;
        const response = await fetch(`https://api.unsplash.com/photos?page=${page}`, {
            headers: {
                Authorization: `Client-ID 4vX2I_tg6zZjOC8Scnx77MgWXJE1EByDMtx1RstDQmU`
            },
        })
        if (!response.ok) {
            throw new Error(`Ошибка при получении фотографий: ${response.status}`);
        }
        return await response.json();
    } finally {
        isFetching = false;
    }
}

function createPhoto(photo) {
    return `
    <div class="photo">
        <img src="${photo.urls.regular}" alt="photo"/>
    </div>`;
}

async function main() {
    const data = await fetchPhotosList(counter);
    let photosHTML = '';
    data.forEach(photo => {
        photosHTML += createPhoto(photo);
    });
    containerEl.innerHTML = photosHTML;
};
