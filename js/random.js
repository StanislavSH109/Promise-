export function myRandom() {
    const min = 2000;
    const max = 5000;
    let randomTime = (Math.floor(Math.random() * (max - min) + min));

    return randomTime;
}
