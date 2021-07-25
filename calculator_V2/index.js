// Selectia butoanelor calculatorului
const DIGITS_NUMBER = 10;

const numbers = [];
for (var i = 0; i < DIGITS_NUMBER; i++) {
    numbers[i] = document.getElementById(`${i}`);
}
numbers[DIGITS_NUMBER] = document.getElementById("point");

const operations = [
    document.getElementById("divide"),
    document.getElementById("multiply"),
    document.getElementById("add"),
    document.getElementById("subtract")
]

const actions = [
    document.getElementById("AC"),
    document.getElementById("DEL"),
    document.getElementById("equals")
]

const previous = document.getElementById("previous");
const current = document.getElementById("current");
var operation = "";

// Definirea clasei
class Calculator {
    constructor(previous, current) {
        this.previous = previous;
        this.current = current;
        operation = undefined;
    }

    sendNumber(number) {
        const request = new XMLHttpRequest();
        request.onload = function() {
            try {
                current.innerHTML = this.responseText;
            } catch {
                console.log("Error: " + request.status);
            }
        }

        const url = "./phpfiles/index.php?current=" + current.innerHTML
        + "&previous=" + previous.innerHTML
        + "&number=" + number;
        request.open("GET", url);
        request.send();
    }

    sendAction(action) {
        const request = new XMLHttpRequest();
        request.onload = function() {
            try {
                var responseJSON = JSON.parse(this.responseText);
                current.innerHTML = responseJSON.current;
                previous.innerHTML = responseJSON.previous;
                operation = responseJSON.operation;
            } catch {
                console.log("Error: " + request.status);
            }
        }

        const url = "./phpfiles/index.php?current=" + current.innerHTML
        + "&previous=" + previous.innerHTML
        + "&operation=" + operation
        + "&action=" + action;
        request.open("GET", url);
        request.send();
    }

    sendOperation(calcOperation) {
        const request = new XMLHttpRequest();
        request.onload = function() {
            try {
                var responseJSON = JSON.parse(this.responseText);
                current.innerHTML = responseJSON.current;
                previous.innerHTML = responseJSON.previous;
                operation = responseJSON.operation;
            } catch {
                console.log("Error: " + request.status);
            }
        }

        const url = "./phpfiles/index.php?current=" + current.innerHTML
        + "&previous=" + previous.innerHTML
        + "&operation=" + calcOperation;
        request.open("GET", url);
        request.send();
    }
}

// Declararea si initializarea instantei clasei Calculator
const calculator = new Calculator(previous, current);

// setarea eventurilor butoanelor calculatorului
actions.forEach(action => {
    action.addEventListener("click", () => {
        calculator.sendAction(action.innerHTML);
    })
})

numbers.forEach(button => {
    button.addEventListener("click", () => {
        calculator.sendNumber(button.innerHTML);
    })
})

operations.forEach(operation => {
    operation.addEventListener("click", () => {
        calculator.sendOperation(operation.innerHTML);
    })
})