const arrayFirstRowURL = [
    'gif/29078-374013301_tiny.gif',
    'gif/32767-394004551_tiny.gif',
    'gif/37946-415263561_tiny.gif'
]

const arraySecondRowURL = [
    'gif/1223.gif',
    'gif/1225.gif',
    'gif/1234.gif'
]


function createCard(urlArray) {
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

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        createCard(arrayFirstRowURL)
            .then((message) => console.log(message))
            .catch((error) => console.log(error));
    }, myRandom());

    setTimeout(() => {
        createCard(arraySecondRowURL)
            .then((message) => console.log(message))
            .catch((error) => console.log(error));
    }, myRandom());
});

