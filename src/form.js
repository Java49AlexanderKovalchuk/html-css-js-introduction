const COLOR_MESSAGE = 'red';
const MES_SALARY = "Salary should be in the range [1000, 40000]";
let currentYear = new Date().getFullYear();
const MES_YEAR = `Birthyear shouldn't be less then 1950 and greater then ${currentYear}`;

const errSalary = MES_SALARY;
const errYear = MES_YEAR;
const colorMessage = COLOR_MESSAGE;

const inputElements = document.querySelectorAll(".form-class [name]");
const messageElement = document.querySelector(".message");

function onSubmit(event) {
    event.preventDefault();
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    );
    console.log(employee);
}

function onChange(event) {
    if (event.target.name == "salary") {
        console.log('salary: ', event.target.value);
        if (+event.target.value < 1000 || +event.target.value > 40000) {
            event.target.value = '';
            outPutError(errSalary);
        }
    }
    if (event.target.name == "birthDate") {
        let chosenYear = +event.target.value.slice(0, 4);
        console.log('birthYear: ', chosenYear);
        if (chosenYear < 1950 || chosenYear > currentYear) {
            event.target.value = '';
            outPutError(errYear);
        }
    }
}

function getMessage(textMessage) {
    messageElement.innerHTML = textMessage;
    messageElement.style.color = colorMessage;
}
function disappearMessage() {
    messageElement.hidden = true;
}

function outPutError(mes) {
    messageElement.hidden = false;
    getMessage(mes);
    setTimeout(disappearMessage, 3000);
}