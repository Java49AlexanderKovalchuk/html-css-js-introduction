
//1.
const numbers = [2, 17, -25, 38, 15];
function minMax(numbers) {
    const res = [];
    res.push(numbers.reduce((acc, el) => acc < el ? acc : el));
    res.push(numbers.reduce((acc, el) => acc > el ? acc : el));
    return res;
}
//TEST 1
//note: the function returns an array despite that the console no show this fact
console.log(`result of calling function minMax is array ${minMax(numbers)}`); 

//2.
function deleteWithPrefix(strings, prefix) {
    // method 'slice' works for strings as well as for arrays
    return strings.filter(n => n.slice(0, prefix.length) != prefix);
}
//TEST 2
const strings = ["abc", "old_abc", "lmn", "123", "old_lmn", "old_"];
console.log(`array without elements with prefix: ${deleteWithPrefix(strings, "old_")}`);

//3.
function getSortedEvenOdd(numbers) {
    let numbersCopy = numbers.slice();
    numbersCopy.sort((a, b) => {
        if (a % 2) {                     
            return b % 2 ? b - a : 1;   // case if a is odd, b is odd  ? ..........
        }
        return b % 2 ? -1 : a - b;      // case if a is even, b is odd ? ..........
    });
    return numbersCopy;
}
//TEST 3
 const numbers2 = [6, 3, 8, 5, 2, 7, 4,-19, 0];
 console.log(`input arrays is ${numbers2} -> output arrays is ${getSortedEvenOdd(numbers2)}`);
