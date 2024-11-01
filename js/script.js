import { arrayFirstRowURL, arraySecondRowURL } from './arrays.js'
import { createCard } from './card.js'
import { myRandom } from './random.js';

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

