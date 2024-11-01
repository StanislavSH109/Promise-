export function myRandom() {
    const min = 2000;
    const max = 5000;
    let randomTime = (Math.floor(Math.random() * (max - min) + min));
    console.log(randomTime);
    return randomTime;
}
