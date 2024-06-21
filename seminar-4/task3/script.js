/*
Задание 3.
Необходимо создать страницу со списком статей.
Каждая статья состоит из id, заголовка, текста статьи.
id - будем брать из unix timestamp.
Необходимо подготовить список статей в JSON-формате, 
которые будут выводиться на странице при первом ее открытии.
Необходимо реализовать возможность удаления статьи.
Необходимо реализовать возможность добавления статьи.
Необходимо реализовать возможность изменения статьи,
ввод данных можно реализовать через prompt.
Статьи должны сохраняться в локальное хранилище 
браузера, и должны быть доступны после перезагрузки страницы.
*/

const news = `[
    {
        "id": 1718993483544,
        "title": "Заголовок 1",
        "text": "Текст 1"
    },
    {
        "id": 1718993483545,
        "title": "Заголовок 2",
        "text": "Текст 2"
    }
]`;

const key = 'news';

const newsList = document.querySelector('.news-list');
const addButton = document.querySelector('.add-new');

if (!localStorage.getItem(key)) {
    localStorage.setItem(key, news);
}

const data = JSON.parse(localStorage.getItem(key));

// data.forEach(item => {
//     newsList.insertAdjacentHTML(
//         'beforeend',
//         createNewsHtml(item)
//     );
// });

newsList.innerHTML = data
    .map(item => createNewsHtml(item))
    .join('');

newsList.addEventListener('click', (event) => {
    if (!event.target.classList.contains('delete-button')) {
        return;
    }
    const newEl = event.target.closest('.news-item');
    removeNewsHtml(+newEl.dataset.id);
    newEl.remove();
});

addButton.addEventListener('click', () => {
    const newNew = {
        id: Date.now(),
        title: prompt('Введите заголовок'),
        text: prompt('Введите текст'),
    };
    data.push(newNew);
    localStorage.setItem(key, JSON.stringify(data));
    newsList.insertAdjacentHTML(
        'beforeend',
        createNewsHtml(newNew)
    );
});

newsList.addEventListener('click', (event) => {
    if (!event.target.classList.contains('update-button')) {
        return;
    }
    const newEl = event.target.closest('.news-item');
    const findNew = data.find(item => item.id === +newEl.dataset.id);

    findNew.title = prompt('Введите заголовок');
    findNew.text = prompt('Введите текст');

    newEl.querySelector('.title').innerText = findNew.title;
    newEl.querySelector('.text').innerText = findNew.text;

    localStorage.setItem(key, JSON.stringify(data));
});

function removeNewsHtml(newId) {
    const data = JSON.parse(localStorage.getItem(key));
    const newIndex = data.findIndex(item => item.id === newId);

    data.splice(newIndex, 1);
    localStorage.setItem(key, JSON.stringify(data));
}

function createNewsHtml(item) {
    return `<article class="news-item" data-id='${item.id}'>
        <p class="title">${item.title}</p>
        <p class="text">${item.text}</p>
        <button class="delete-button">Удалить</button>
        <button class="update-button">Редактировать</button>
        </article>`;
}