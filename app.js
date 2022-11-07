//1.
let strings = ["abc", "lmn", "cd", "abc", "abc"];
function ulSurround(strings) {
    let liStrings = strings.map(liElement);
    liStrings.splice(0, 0, "<ul>");
    liStrings.push("</ul>");
    return liStrings;
}
function liElement(el) {
    return "<li>" + el + "</li>";
};
console.log(ulSurround(strings));

//2.
function count(strings, value) {
    return strings.reduce(function (res, el) {
        return el == value ? ++res : res;
    }, 0);
}
console.log(count(strings, 'abc'));

//3.
function arrayCopy(src, srcPos, dst, dstPos, length) {
    let srcCopy = getCopy(src);
    let takeFromAr = fromSource(srcCopy, srcPos, length);
    for (let i = takeFromAr.length - 1; i >= 0; i--) {
        dst.splice(dstPos, 0, takeFromAr[i]);
    }
    return dst;
}
function getCopy(ar) {
    return ar.slice();
}
function fromSource(ar, ind, howMany) {
    return ar.splice(ind, howMany);
}
let arS = [1, 2, 3, 4, 5, 6, 7];
let arD = [10, 20, 30, 40, 50, 60, 70];
console.log(arS);  // see that arS is not updated
console.log(arrayCopy(arS, 3, arD, 4, 3));

//4.
function move(array, index, offset) {
    let arCopy = getCopy(array);
    let numFromSource = fromSource(arCopy, index, 1)[0];
    arCopy.splice(index + offset, 0, numFromSource);
    return arCopy;
}

let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(move(numbers, 3, -1));
console.log(move(numbers, 2, 4));
