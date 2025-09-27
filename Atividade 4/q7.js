const prompt = require('prompt-sync')();

console.log("Digite três números. ");
let num1 = Number(prompt("Primeiro número: "));
let num2 = Number(prompt("Segundo número: "));
let num3 = Number(prompt("Terceiro número: "));

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} é o maior `);
} 
else if (num2 > num1 && num2 > num3 ) {
    console.log(`${num2} é o maior `);
} 
else {
    console.log(`${num3} é o maior `)
}