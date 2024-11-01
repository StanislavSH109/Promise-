const arrayURL = [
    'gif/29078-374013301_tiny.gif',
    'gif/32767-394004551_tiny.gif',
    'gif/37946-415263561_tiny.gif'
]

function createCard() {
    const mainElement = document.querySelector('.main-section');
    const divElement = document.createElement('div');
    divElement.classList.add('card');
    
    arrayURL.forEach((item, index) => {
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', arrayURL[index]);
        divElement.append(imageElement);
        mainElement.append(divElement);
        
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createCard();
});

// const imageStockUrl = 'https://t3.ftcdn.net/jpg/02/73/16/24/240_F_273162497_ShAAB1TH0vhM4UUWbhBuao8jtGBDubwD.jpg';
// const mainElement = document.querySelector('.main-section');
// const titleElement = document.querySelector('.header__title-text');

// const divImage = document.createElement('div');
// const imgElement = document.createElement('img');
// imgElement.setAttribute('src', imageStockUrl);
// divImage.classList.add('main-section__image');
// divImage.append(imgElement)

// titleElement.addEventListener('click', function (e) {
//     divImage.classList.toggle('main-section__image--visible');
// });

// mainElement.append(divImage);