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

// Definirea clasei
class Calculator {

    previous = "";
    current = "";
    operation = "";

    constructor(previous, current) {
        this.previous = previous;
        this.current = current;
        this.operation = undefined;
    }

    sendNumber(digit) {
        const request = new XMLHttpRequest();
        var self = this;
        request.onload = function() {
            try {
                console.log(this.responseText);
                self.current.innerHTML = this.responseText;
            } catch {
                console.log("Error: " + request.status);
            }
        }

        const urlBase = "http://127.0.0.1/number?";
        const usp = new URLSearchParams();
        usp.set("current", self.current.innerHTML);
        usp.set("previous", self.previous.innerHTML);
        usp.set("digit", digit);

        request.open("GET", urlBase + usp.toString());
        request.send();
    }

    sendAction(action) {
        const request = new XMLHttpRequest();
        var self = this;
        request.onload = function() {
            try {
                console.log(this.responseText);
                var responseJSON = JSON.parse(this.responseText);
                self.current.innerHTML = responseJSON.current;
                self.operation = responseJSON.operation;

                if (self.operation !== "undefined") {
                    self.previous.innerHTML = responseJSON.previous + self.operation;
                } else {
                    self.previous.innerHTML = responseJSON.previous;
                }
            } catch {
                console.log("Error: " + request.status);
            }
        }

        var urlBase = "http://127.0.0.1/action?";
        const usp = new URLSearchParams();
        usp.set("current", self.current.innerHTML);
        usp.set("previous", self.previous.innerHTML);
        usp.set("operation", self.operation);
        usp.set("action", action);

        request.open("GET", urlBase + usp.toString());
        request.send();
    }

    sendOperation(calcOperation) {
        const request = new XMLHttpRequest();
        var self = this;
        request.onload = function() {
            try {
                console.log(this.responseText);
                var responseJSON = JSON.parse(this.responseText);
                self.current.innerHTML = responseJSON.current;
                self.previous.innerHTML = responseJSON.previous;
                self.operation = responseJSON.operation;
            } catch {
                console.log("Error: " + request.status);
            }
        }

        const urlBase = "http://127.0.0.1/operation?";
        const usp = new URLSearchParams();
        usp.set("current", self.current.innerHTML);
        usp.set("previous", self.previous.innerHTML);
        usp.set("operation", encodeURIComponent(calcOperation));

        request.open("GET", urlBase + usp.toString());
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