export function createCard(urlArray) {
    const mainElement = document.querySelector('.main-section');
    const divElement = document.createElement('div');
    divElement.classList.add('card');


    const urlPromise = new Promise((resolve, reject) => {
        if (Array.isArray(urlArray) && urlArray.length === 3) {
            urlArray.forEach((item) => {
                const imageElement = document.createElement('img');
                imageElement.setAttribute('src', item);
                divElement.append(imageElement);
            });
            mainElement.append(divElement);
            resolve('Карточки успешно созданы')
        } else {
            reject('Ошибка массива URL');
        }
    })
    console.log(urlPromise);
    return urlPromise;
}
