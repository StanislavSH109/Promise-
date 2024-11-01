const arrayFirstRowURL = [
    'gif/29078-374013301_tiny.gif',
    'gif/32767-394004551_tiny.gif',
    'gif/37946-415263561_tiny.gif'
]

const arraySecondRowURL = [
    ''
]

function createCard(firstArray) {
    const mainElement = document.querySelector('.main-section');
    const divElement = document.createElement('div');
    divElement.classList.add('card');


    const urlPromise = new Promise((resolve, reject) => {
        if (firstArray) {
            firstArray.forEach((item, index) => {
                const imageElement = document.createElement('img');
                imageElement.setAttribute('src', firstArray[index]);
                divElement.append(imageElement);
            });
            mainElement.append(divElement);
            resolve('Карточки успешно созданы')
        } else {
            reject('Ошибка массива URL');
        }
    })
    return urlPromise;
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        createCard(arrayFirstRowURL)
            .then((message) => console.log(message))
            .catch((error) => console.log(error));
    }, 3000);

});

