function createPhoto(photo) {
    return `
        <img data-id="${photo.id}" src="${photo.urls.regular}" alt="photo"/>
        <h3>Автор: ${photo.user.name}</h3>
        <p>Описание: ${photo.alt_description}</p>`;
}

function createHistory(image) {
    const photo = image.photo;
    return `
        <li class="text" data-id="${photo.id}">Фото: "${photo.alt_description}"</li>
    `;
}

export { createPhoto, createHistory };