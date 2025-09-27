const prompt = require('prompt-sync')();

let nota = Number(prompt("Digite sua nota. "))

switch(nota) {
    case (9 || 10):
    console.log("Classificado em A.");
    break;
    case (7 || 8):
    console.log("Classificado em B.");
    break;
    case (5 || 6):
    console.log("Classificado em C.");
    break;
    case (3 || 4):
    console.log("Classificado em D.");
    break;
    case (0 ||  1 || 2):
    console.log("Classificado em F.");
    break;
    default: 
    console.log("Que nota é essa engraçadax ")
}