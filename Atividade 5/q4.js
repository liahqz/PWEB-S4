function calculo(a, b, c) {
    let delta = (b * b) - 4 * a * c;
    return delta;
}

let a = 2;
let b = 5;
let c = -3;

let resultado = calculo(a, b, c);
console.log(`O valor é: ${resultado}`);