
function isAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    const objStr1 = objOccurrences(str1);  
    const arStr2 = Array.from(str2);        
    
    for(let i = 0; i < arStr2.length; i++) {
        if (objStr1[arStr2[i]] == undefined) {
            return false;
        }
        //objStr1[arStr2[i]] = objStr1[arStr2[i]] - 1;
        if(--objStr1[arStr2[i]] < 0) {
            return false;
        }
    } 
    return true;
}

function objOccurrences(str) {
    let obj = {};
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
