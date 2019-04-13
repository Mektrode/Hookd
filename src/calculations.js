//Return a random number between min & max
export function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//Return round to nearest whole number
export function rndtoInt(rndNum) {
    return Math.round(rndNum);
}

//Round to 2 dp
export function rndTo2dp(rndNum){
    return Math.round(rndNum * 100) / 100
}

//Round down to lowest integer
export function rndDownInt(toRnd) {
    return Math.floor(toRnd)
}