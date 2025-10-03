const prompt = require('prompt-sync')();

let reais = Number(prompt("Digite um valor em reais. "));

function converterReais(valor) {
    const conv = {
        euro: 0.187,
        dolar: 0.160
    };

    const result = {
        conveuro: valor * conv.euro,
        convdolar: valor * conv.dolar
    };

    return result; 
}

let convertido = converterReais(reais);

console.log(`${convertido.conveuro} valor em Euros.`);
console.log(`${convertido.convdolar} valor em Dólares. `);

