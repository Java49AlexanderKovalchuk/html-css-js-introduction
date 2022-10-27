
function sumDigits(number) {
    let sum = 0;
    for (let i = number; i > 0; i = Math.floor(i / 10)) {
        console.log("i = ", i);  // see "i" in each iteration
        number = i % 10;         // get the last digit of the number in the iteration
        sum = sum + number;      
    }
    return sum;
}

// let's test
console.log(sumDigits(1020305));
