
function fromNumberToString(number, base) {
    if (base < 2 || base > 36) {
        console.log("ERROR! Please take the base in the interval [2, 36]");
        return -1;
    }
    number = Math.abs(number);
    let res = '';
    let symbol;
    do {
        let digit = number % base;
        if (digit <= 9) {
            symbol = String.fromCharCode(48 + digit);
        }
        else {
            symbol = String.fromCharCode(87 + digit);
        }
        res = symbol + res;
        number = Math.trunc(number / base);
    } while (number != 0);
    return res;
}

function fromStringToNumber(code, base) {
    let res = 0;
    let rate;
    let calibration;
    for (let i = 0; i < code.length; i++) {
        let numChar = code[i].charCodeAt();
        if (numChar < 48 || (numChar > 57 && numChar < 97) || numChar > 122) {
            console.log('ERROR! Please use in the code digits [0, 9] and undercase letters only. For example: 3w0a');
            return -1;
        }
        if (isNaN(code[i])) {
            calibration = "a".charCodeAt();
            rate = numChar - calibration + 10;
        }
        else {
            calibration = "0".charCodeAt();
            rate = numChar - calibration;
        }
        res = res * base + rate;
    }
    return res;
}

//TEST
console.log(fromNumberToString(900550, 36));
console.log(fromNumberToString(46016237, 36));
console.log(fromNumberToString(11483, 2));

console.log(fromStringToNumber("java", 36));
console.log(fromStringToNumber("react", 36));
console.log(fromStringToNumber("10110011011011", 2));