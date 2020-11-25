function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function clear () {
    displayValue = '';
    storedValue = '';
    operation = '';
    display.innerHTML = 0;
}

function operate(op, x, y) {
    let result;
    x = Number(x);
    y = Number(y);
    switch (op) {
        case '+':
            result = add(x,y);
            break;
        case '-':
            result = subtract(x,y);
                break;
        case '*':
            result = multiply(x,y);
                break;
        case '/':
            result = divide(x,y);
            break;

        default:
            break;
    }
    return result;
}

const calc = document.getElementsByClassName('calc')[0];
const display = calc.children[0];
let displayValue = '', storedValue = '', operation = '';

calc.addEventListener('click', event => { // catching clicks on anyhting inside the calculator
    let btn = event.target,
    val = btn.value;
    if (btn.className == 'number') { // when a digit is pressed
        if (operation == '=') {
            clear();
        }
        displayValue == '' ? display.innerHTML = val : display.innerHTML += val;
        displayValue = display.innerHTML;
    } else if (btn.className == 'action') { // when an operator is pressed
    
        if (displayValue != '') { // operators can't be pressed if a number wasn't put in
            if (storedValue != '') { // if both numbers exist, operate
                display.innerHTML = operate(operation, storedValue, displayValue);
                if (val == '=') { // if = is pressed, just display the result and be ready for the next thing
                    storedValue = '';
                    displayValue = display.innerHTML;
                } else { // if anything but = is pressed, 
                    displayValue = '';
                    storedValue = display.innerHTML;
                }
                operation = val;
            } else { // if only 1 number exists, get ready to operate
                if (val != '=') { // if only 1 number exists, = can't be pressed
                    storedValue = displayValue;
                    displayValue = '';
                    operation = val;
                }
            }
        }
    
    } else if (btn.id == 'clear') { // when clear is pressed
        clear();
    }
});

