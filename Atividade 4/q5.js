const prompt = require('prompt-sync')();

let Verfication = Number(prompt("Digite um número."));

Verfication % 2 == 0 ? console.log("Esse número é par.") : console.log("Esse número é impar.");