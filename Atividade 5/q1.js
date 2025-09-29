const prompt = require('prompt-sync')();

let reais = Number(prompt("Digite um valor em reais. "));

function converterReais(valor) {
    const conv = {
        euro: 0.187,
        dolar: 0.160
    };

    const result = {
        conveuro: valor * conv.Euro,
        convdolar: valor * conv.Dolar
    };

    return result; 
}

let convertido = converterReais(reais);

console.log(`${converterReais.conveuro} valor em Euros.`);
console.log(`${converterReais.convdolar} valor em Dólares. `);

