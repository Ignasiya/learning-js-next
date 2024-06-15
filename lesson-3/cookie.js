let setCookie = (name, value, days) => {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    let cookieValue = encodeURIComponential(value) + '; expires=' + expirationDate.toUTCString();
    document.cookie = name + '=' + cookieValue;
};

setCookie('name', 'John', 1);
setCookie('surname', 'Doe', 1);

let getCookie = (name) => {
    let cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponential(cookieValue);
        }
    }
    return null;
}

console.log(getCookie('name'));

let deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
}

deleteCookie('name');