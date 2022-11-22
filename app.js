
function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1.length != str2.length) {
        return false;
    }
    const objStr1 = objOccurrences(str1);    // for example str1 -> { y: 1, e: 1, l: 2, o: 1, w: 1 }
    const arStr2 = Array.from(str2);         
    
    let res = 0;    
    arStr2.forEach(n => res = --objStr1[n]);   
    if (res != 0) {
        return false;
    }
    else {
        return true;
    }
}

function objOccurrences(str) {
    const obj = {};
    Array.from(str).forEach(el => obj[el] ? obj[el]++ : obj[el] = 1);
    return obj;
}
//TEST
const word = 'yellow';
console.log(isAnagram(word, 'weloly'));
console.log(isAnagram(word, 'leloyw'));
console.log(isAnagram(word, 'wolley'));
console.log(isAnagram(word, 'weloyl'));


console.log(isAnagram(word, 'weloll'));
console.log(isAnagram(word, 'leloy'));
console.log(isAnagram(word, 'wollet'));
console.log(isAnagram(word, 'weloyo'));
