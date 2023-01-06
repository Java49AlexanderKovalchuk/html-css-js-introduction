"use strict";
// HW#30
const NUMB_LETTERS = 26;
function shiftCipher(str, shift = 1) {
    const arString = Array.from(str);
    let correction;
    let letter;
    let asciiFromZero;
    correction = 'a'.charCodeAt(0);
    const arStringAfter = arString.map(el => {
        asciiFromZero = el.charCodeAt(0) - correction;
        if (asciiFromZero >= 0 && asciiFromZero <= 25) {
            asciiFromZero = getIndexShiftRight(asciiFromZero, shift) + correction;
            letter = String.fromCharCode(asciiFromZero);
        }
        else {
            asciiFromZero = asciiFromZero + correction;
            letter = String.fromCharCode(asciiFromZero);
        }
        return letter;
    });
    return arStringAfter.join('');
}
function getIndexShiftRight(ind, shift) {
    shift = shift % NUMB_LETTERS;
    let indRev = NUMB_LETTERS - 1 - ind;
    let ind2;
    if (shift > indRev) {
        ind2 = shift - indRev - 1;
    }
    else {
        ind2 = shift + ind;
    }
    return ind2;
}
function getIndexShiftLeft(ind, shift) {
    shift = shift % NUMB_LETTERS;
    let ind2;
    if (shift > ind) {
        ind2 = NUMB_LETTERS - (shift - ind);
    }
    else {
        ind2 = ind - shift;
    }
    return ind2;
}
function shiftDecipher(str, shift = 1) {
    const arString = Array.from(str);
    let correction;
    let letter;
    let asciiFromZero;
    correction = 'a'.charCodeAt(0);
    const arStringAfter = arString.map(el => {
        asciiFromZero = el.charCodeAt(0) - correction;
        if (asciiFromZero >= 0 && asciiFromZero <= 25) {
            asciiFromZero = getIndexShiftLeft(asciiFromZero, shift) + correction;
            letter = String.fromCharCode(asciiFromZero);
        }
        else {
            asciiFromZero = asciiFromZero + correction;
            letter = String.fromCharCode(asciiFromZero);
        }
        return letter;
    });
    return arStringAfter.join('');
}
console.log('-------TEST 1--------');
console.log('cipher 1:', shiftCipher('abzA', 1000));
console.log('cipher 2:', shiftCipher('abz.', 1000));
console.log('cipher 3:', shiftCipher('abz&', 27));
console.log('-------TEST 2--------');
console.log('decipher 1:', shiftDecipher('bca', 27));
console.log('decipher 2:', shiftDecipher('mnl', 1000));
//# sourceMappingURL=app.js.map