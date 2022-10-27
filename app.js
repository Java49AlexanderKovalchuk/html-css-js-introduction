
function sumDigits(number) {
    if (number < 0) {
        number = -number;
    }
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.trunc(number / 10);
    }
    return sum;
}

// let's test
console.log(sumDigits(-1020305));
