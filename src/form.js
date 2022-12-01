const COLOR_MESSAGE = 'red';
const messageSalary = "Salary should be in the range [1000, 40000]";
let currentYear = new Date().getFullYear();
const messageYear = `Birthyear shouldn't be less then 1950 and greater then ${currentYear}`;

const inputElements = document.querySelectorAll(".form-class [name]");
const message = document.querySelector(".message");

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");

    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    );
    console.log(employee);
    //console.log(employee.birthDate);

}


function onChange(event) {
    
    if (event.target.name = "salary") {
        console.log('salary: ', event.target.value);
        if (+event.target.value < 1000 || +event.target.value > 40000) {
            event.target.value = '';
            message.hidden = false;
            getMessage(messageSalary);
            setTimeout(disappearMessage, 5000);
        }
    }

}
function onChangeBirth(event) {
    
    if(event.target.name = "birthDate") {
        let chosenYear = +event.target.value.slice(0, 4);
        console.log('birthYear: ',chosenYear);
        if(chosenYear < 1950 || chosenYear > currentYear) {
            event.target.value = '';
            message.hidden = false;
            getMessage(messageYear);
            setTimeout(disappearMessage, 5000);
        }
    }

}

function getMessage(textMessage) {
    message.innerHTML = textMessage;
    message.style.color = COLOR_MESSAGE;
}
function disappearMessage() {
    message.hidden = true;
}