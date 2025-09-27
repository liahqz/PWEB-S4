const prompt = require('prompt-sync')();

let n1 = Number(prompt("Escolha um número. "));
let n2 = Number(prompt("Escolha outro número. "));
console.log("Escolha o tipo de equação. ")
let choose = prompt("(+, -, *, /, % ");
let res;

switch(choose) {
    case "+":
        res = n1 + n2;
        console.log("O resultado é: " + res);
        break;
    case "-":
        res = n1 - n2;
        console.log("O resultado é: " + res);
        break;
    case "*":
        res = n1 * n2;
        console.log("O resultado é: " + res);
        break;
    case "/":
        res = n1 / n2;
        console.log("O resultado é: " + res);
        break;
    case 5:
        choose === "%"
        res = n1 % n2;
        console.log("O resultado é: " + res);
        break;
    default:
        console.log("Esse operador não exist. XP")
        break;
}