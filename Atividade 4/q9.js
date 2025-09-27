const prompt = require('prompt-sync')();

let type = prompt("Informe se você é estudante, aposentado ou nenhum dos dois. \n Digite E para estudante, \n A para aposentado \n N para nenhum. ");

switch(type) {
    case "E":
        console.log("Seu desconto é de 50%.");
        break;
    case "A":
        console.log("Seu desconto é de 30%.");
        break;
    case "N":
        console.log("Você não tem desconto.");
        break;
}