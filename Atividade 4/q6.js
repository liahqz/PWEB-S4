const prompt = require('prompt-sync')();

const nome = "Aron"
const senha = "369"

let username = prompt("Digite o nome do usuário. ");
let userpass = prompt("Digite a senha. ");

if (nome == username && senha == userpass) {
    console.log("Bem-vindo meu amor <3")
} else {
    console.log("Sai fora, só meu namorado entra aqui >:(")
}