const imageStockUrl = 'https://t3.ftcdn.net/jpg/02/73/16/24/240_F_273162497_ShAAB1TH0vhM4UUWbhBuao8jtGBDubwD.jpg';
const mainElement = document.querySelector('.main-section');
const titleElement = document.querySelector('.header__title-text');

const divImage = document.createElement('div');
const imgElement = document.createElement('img');
imgElement.setAttribute('src', imageStockUrl);
divImage.classList.add('main-section__image');
divImage.append(imgElement)

titleElement.addEventListener('click', function (e) {
    divImage.classList.toggle('visible');
});

mainElement.append(divImage);