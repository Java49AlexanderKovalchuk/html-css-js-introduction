
function checkTeudatZehut(teudatStrNumber) {
    if (!validationTeudaIsString(teudatStrNumber)) {        // check the argument
        return -1;
    }
    let arElemStr = Array.from(teudatStrNumber);            //get array of string elements
    let sumDigits = sumElementsByAlgorithm(arElemStr);
    return sumDigits % 10 == 0 ? true : false;
}
function ifElemTwoDig(el) {
    return el % 10 + Math.trunc(el / 10);
}
function sumElementsByAlgorithm(ar) {
    return ar.reduce(function (res, cur, i) {
        if (i % 2 == 0) {
            return res = res + (+cur);
        }
        cur *= 2;
        return cur <= 9 ? res + cur : res + ifElemTwoDig(cur);
    }, 0);
}

function generateRandomTeudatZehut() {
    let arRandom8Digits = [];
    for (let i = 0; i < 8; i++) {
        arRandom8Digits[i] = Math.round(Math.random() * 9);
    }
    let sum8Rand = sumElementsByAlgorithm(arRandom8Digits);
    let controlDigit = sum8Rand % 10 == 0 ? 0 : 10 - sum8Rand % 10;
    arRandom8Digits[8] = controlDigit;   //add 9-th digit like a control digit to array
    let teudatZehutStr = arToString(arRandom8Digits);
    return teudatZehutStr;
}
function arToString(ar) {
    res = '';
    ar.forEach(function (el) {
        res = res + el;
    })
    return res;
}

function validationTeudaIsString(teudatStrNumber) {
    if (typeof teudatStrNumber != 'string') {
        console.log('ERROR! TZ should be a string')
        return false;
    }
    for (let i = 0; i < Array.from(teudatStrNumber).length; i++) {
        if (isNaN(Array.from(teudatStrNumber)[i])) {
            console.log('ERROR! The TZ should be consist from digits only');
            return false;
        }
    }
    return true;
}

//TEST
console.log("Random number of TZ is", generateRandomTeudatZehut());
console.log(typeof generateRandomTeudatZehut());
console.log(checkTeudatZehut(generateRandomTeudatZehut()));
console.log(checkTeudatZehut('123e43212'));
console.log(checkTeudatZehut(123456789));
