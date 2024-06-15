let generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100);
            if (randomNumber) {
                resolve(randomNumber);
            } else {
                reject(new Error('Не удалось сгенерировать случайное число'));
            }
        }, 1000);
    });
};

generateRandomNumber()
    .then((number) => {
        console.log('Сгенерированное случайное число:' + number);
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });

let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    resolve(response.json());
                } else {
                    reject(new Error('Не удалось получить данные'));
                }
            })
            .then((data) => reject(data))
            .catch((error) => {
                reject('Ошибка:', error);
            });
    });
}

fetchData('https://randombig.cat/roar.json')
    .then((data) => {
        console.log('Данные получены:', data);
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });

let checkIfFileExists = (path) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileExists = checkIfFileExists(path);
            if (fileExists) {
                resolve('Файл существует');
            } else {
                reject(new Error('Файл не существует'));
            }
        }, 2000);
    });
};

checkIfFileExists('file.txt')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    })

let divideNumber = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new Error('Невозможно делить на 0'));
        } else {
            resolve(a / b);
        }
    });
};

divideNumber(10, 2)
    .then((result) => {
        console.log('Результат:', result);
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });

new Promise(function (resolve) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return new Promise(function (resolve) {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
    return new Promise(function (resolve) {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
})

let checkServerResponse = (urls) => {
    let promise = urls.map((url) => fetch(url));

    return Promise.race(promise)
        .then((response) => {
            return response.url;
        });
}

let urls = [
    'https://randombig.cat/roar.json',
    'https://api.example.com/server2',
    'https://api.example.com/server3',
]

checkServerResponse(urls)
    .then((fastestServer) => {
        console.log('Самый быстрый сервер:', fastestServer);
    }).catch((error) => {
        console.error('Ошибка:', error);
    })