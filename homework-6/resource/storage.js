const lsImageKey = 'likedImages';

function getDataImages() {
    const data = localStorage.getItem(lsImageKey);
    return data ? JSON.parse(data) : [];
}

function saveDataImages(image, count, reaction) {
    const lsData = getDataImages();
    const lsImage = lsData.filter(el => el.photo.id === image.id);
    if (lsImage.length) {
        lsImage[0].like = count;
        lsImage[0].reaction = reaction;
    } else {
        lsData.push({
            photo: {
                id: image.id,
                urls: {
                    regular: image.urls.regular
                },
                alt_description: image.alt_description,
                user: {
                    name: image.user.name
                }
            },
            like: count,
            reaction: reaction,
        });
    }
    localStorage.setItem(lsImageKey, JSON.stringify(lsData));
}

export { getDataImages, saveDataImages };