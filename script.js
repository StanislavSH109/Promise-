const myPromise = new Promise((resolve, reject) => {
    const x = 101;
    
    if (x === 10) {
        resolve('This is Work!');
    } else {
        reject('Error');
    }
})

console.log(myPromise);

// const arrayURL = [
//     'gif/29078-374013301_tiny.gif',
//     'gif/32767-394004551_tiny.gif',
//     'gif/37946-415263561_tiny.gif'
// ]

// function createCard(firstArray) {
//     const mainElement = document.querySelector('.main-section');
//     const divElement = document.createElement('div');
//     divElement.classList.add('card');
    
//     arrayURL.forEach((item, index) => {
//         const imageElement = document.createElement('img');
//         imageElement.setAttribute('src', firstArray[index]);
//         divElement.append(imageElement);
//         mainElement.append(divElement);
        
//     });
// }

// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout(() => {
//         createCard(arrayURL);
//     }, 3000);

//     setTimeout(() =>)
// });

