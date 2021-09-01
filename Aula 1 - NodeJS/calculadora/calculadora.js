const nome = 'Calculadora';

function soma(num1,  num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

module.exports = {
    soma, sub, multi, div, nome
}