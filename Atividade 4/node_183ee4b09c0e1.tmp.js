const prompt = require('prompt-sync')();

const idade = prompt("Qual é a sua idade?");

    if(0 <= idade <= 12){
        console.log("Criança") 
    }
        else if(13 <= idade <= 17){
        console.log("Adolescente");
    }
        else if(18 <= idade <= 59){
        console.log("Adulto")
    }
    else{
    console.log("Idoso")
    }