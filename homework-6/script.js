import { getDataImages, saveDataImages } from './resource/storage.js';
import { createPhoto, createHistory } from './resource/render.js';

const apiKey = '4vX2I_tg6zZjOC8Scnx77MgWXJE1EByDMtx1RstDQmU';
const baseURL = 'https://api.unsplash.com/photos/random';

let likeCount = 0;
let photo = {};

const photoData = getDataImages();
const imageElement = document.querySelector('.photo');
const btnLikeEl = document.querySelector('.like-button');
const likeCountEl = document.querySelector('.like-count');
const likeUnlikeEl = document.querySelector('.like-unlike');
const historyListsEl = document.querySelector('.history-list');

document.addEventListener('DOMContentLoaded', main());

async function fetchPhoto() {
    const response = await fetch(baseURL, {
        headers: {
            Authorization: `Client-ID ${apiKey}`
        },
    })
    if (!response.ok) {
        throw new Error(`Ошибка при получении фотографии: ${response.status}`);
    }
    return await response.json();
}

function updateLikeState(reaction) {
    likeCountEl.textContent = likeCount || '';
    likeUnlikeEl.textContent = reaction === 'like' ? 'unlike' : 'like';
    if (reaction === 'unlike') {
        btnLikeEl.classList.remove('unlike');
        btnLikeEl.classList.add('like');
    } else {
        btnLikeEl.classList.remove('like');
        btnLikeEl.classList.add('unlike');
    }
};

function addHistory(history) {
    let historyHTML = '';
    history.forEach(photo => {
        historyHTML = createHistory(photo) + historyHTML;
    });
    historyListsEl.insertAdjacentHTML('beforeend', historyHTML);
}

function toggleLikeState() {
    const checked = btnLikeEl.classList.contains('like');
    likeCount = checked ? likeCount + 1 : likeCount - 1;
    return checked ? 'like' : 'unlike';
}

async function main(renderPhoto = null) {
    if (!renderPhoto) {
        photo = await fetchPhoto();
        addHistory(photoData);
    } else {
        photo = renderPhoto.photo;
        likeCount = renderPhoto.like;
        updateLikeState(renderPhoto.reaction);
    }
    imageElement.innerHTML = createPhoto(photo);
};

btnLikeEl.addEventListener('click', async () => {
    if (!photo) {
        throw new Error('Нет фотографии');
    }
    const reaction = toggleLikeState();
    updateLikeState(reaction);
    saveDataImages(photo, likeCount, reaction);
});

historyListsEl.addEventListener('click', async (event) => {
    if (!event.target.classList.contains('text')) {
        return;
    }
    const photoId = event.target.dataset.id;
    const historyPhoto = photoData.find(photo => photo.photo.id === photoId);
    if (!historyPhoto) {
        throw new Error(`Нет фотографии с id: ${photoId}`);
    }
    await main(historyPhoto);
});