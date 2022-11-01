// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"]
const event = "surprise"
const nameEvent = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        nameEvent.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return nameEvent;
}

let num = 13;

function countDown(num) {
    while (num > -1) {
        console.log(num--);
    }
}

countDown(num)