const prompt = require('prompt-sync')();

const pontuacao = prompt("Qual é a sua média?");
const status = pontuacao >= 7 ? "Aprovado" : "Reprovado";
console.log(status);