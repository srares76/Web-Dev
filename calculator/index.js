// Constante
const DIGITS_NUMBER = 10;
const DECIMALS = 6;

// Selectia butoanelor calculatorului
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
    constructor(previous, current) {
        this.previous = previous;
        this.current = current;
    }

    addDigit(digit) {
        var point = false;
        for (var letter = 0; letter < this.current.innerHTML.length; letter++) {
            if (this.current.innerHTML[letter] === ".") {
                point = true;
                break;
            }
        }

        if ((this.current.innerHTML === "0" && digit === "0") ||
            (point && digit === ".")) {
            return;
        }

        if (this.current.innerHTML === "" && digit === ".") {
            this.current.innerHTML += "0.";
        } else {
            this.current.innerHTML += digit;
        }

    }

    doAction(action) {
        if (action === "AC") {
            this.previous.innerHTML = "";
            this.current.innerHTML = "";
            this.operation = undefined;
        } else if (action === "DEL") {
            if (this.current.innerHTML === ""){
                return;
            }
            var currentNumber = this.current.innerHTML;
            currentNumber = currentNumber.slice(0, -1);
            this.current.innerHTML = currentNumber;
        } else if (action === "=") {
            var result = parseFloat(this.previous.innerHTML);
            
            if (this.operation === "+") {
                result += parseFloat(this.current.innerHTML);
            } else if (this.operation === "-") {
                result -= parseFloat(this.current.innerHTML);
            } else if (this.operation === "*") {
                result *= parseFloat(this.current.innerHTML);
            } else if (this.operation === "/") {
                result /= parseFloat(this.current.innerHTML);
            } else {
                return;
            }

            if (!Number.isInteger(result)) {
                result = result.toFixed(DECIMALS);
            }

            this.current.innerHTML = result.toString();
        } else {
            return;
        }
    }

    doOperation(operation) {
        this.operation = operation;
        this.previous.innerHTML = this.current.innerHTML + this.operation;
        this.current.innerHTML = "";
    }
}


// Declararea si initializarea instantei clasei Calculator
const calculator = new Calculator(previous, current);


// Atribuirea functiei corespunzatoare fiecarui buton
actions.forEach(action => {
    action.addEventListener("click", () => {
        calculator.doAction(action.innerHTML);
    })
})

numbers.forEach(button => {
    button.addEventListener("click", () => {
        calculator.addDigit(button.innerHTML);
    })
})

operations.forEach(operation => {
    operation.addEventListener("click", () => {
        calculator.doOperation(operation.innerHTML);
    })
})