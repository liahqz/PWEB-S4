function calculo(a, b, c) {
    let delta = (b * b) - 4 * a * c;
    return delta;
}

let a = 3;
let b = 6;
let c = 9;

let delta = calcularDelta(a, b, c);
console.log(`O valor é: ${delta}`);