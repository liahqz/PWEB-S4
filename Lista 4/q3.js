const prompt = require('prompt-sync')();

const temp = Number(prompt("Qual a temperatura?"));
const escala = Number(prompt("Qual a escala? Digite 1 para Celsius e 2 para Fahrenheit."));
    if(escala == 1) {
        conv = (9/5 *temp) + 32;
        console.log(conv);
    }
    else if(escala == 2) {
        conv = (temp - 32) / 1,8;
        console.log(conv);
    }
    else {
        conv = 0;
        console.log(conv);
    }