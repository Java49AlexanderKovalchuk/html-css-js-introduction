const word = "table";
const N_LETTERS = 5;
let N_ATTEMPTS = 6;
const message = document.querySelector(".message");
const letterElements = document.querySelectorAll(".letter-guess");

function onChange(event) {

    const wordGuess = event.target.value.toLowerCase();   // and getting the lowercase for all cases 
    const wordAr = Array.from(wordGuess);
    event.target.value = '';
    // if (wordGuess.length != N_LETTERS) {
    //     alert(`A word should contain ${N_LETTERS} letters`);
    // } 
    N_ATTEMPTS = N_ATTEMPTS - 1;
    if (!validationInputAndCount(wordGuess, wordAr)) {
        if(N_ATTEMPTS > 0){
        message.innerHTML = `You have ${N_ATTEMPTS} appempts`;
        }
        else {//if(N_ATTEMPTS == 0) 
            message.innerHTML = `Sorry - you guesses trials have ended up`;
            message.classList.add("game-over");
        }
    }
    else {

        if (N_ATTEMPTS > 0) {
            //according singular or plural
            message.innerHTML = N_ATTEMPTS > 1 ? `You have ${N_ATTEMPTS} attempts` : `You have a LAST attempt`;
        }
        if (N_ATTEMPTS == 0) {
            message.innerHTML = `Sorry - you guesses trials have ended up`;
            message.classList.add("game-over");
        }
        if (wordGuess == word) {
            message.innerHTML = 'Congratulation - you have guessed word';
            message.classList.add('game-win');
        }

        wordAr.forEach((l, i) => letterElements[i].innerHTML = l);
        const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);
            let res = 'red';
            if (index > -1) {
                res = index == i ? 'green' : 'yellow';
            }
            return res;
        })
        colors.forEach((c, i) => letterElements[i].style.color = c);

    }
}

function validationInputAndCount(wordGuess, wordAr) {
    //let count = N_ATTEMPTS;
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`);
        return false;
    }
    else if (!validInputLetters(wordAr)) {
        alert(`A word should contain letters only`)
        return false;
    }
    else {
        return true;
    }
}
function validInputLetters(arStr) {
    let res = arStr.filter(n => (n.charCodeAt() < "a".charCodeAt() || n.charCodeAt() > "z".charCodeAt()));
    return res.length ? false : true;
}