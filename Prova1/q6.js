function calcularSalario() {
    var salario = 4200;

    if (salario <= 2000){
        console.log(`Salário bruto:  ` + salario);
    }
    else if(salario >= 2001 && salario <= 3500){
        let aliq = 7.5/100;
        let imposto = salario * aliq;
        console.log(`Salário bruto:  ` + salario + `\nAlíquota:  ` + aliq + `\nImposto: ` + imposto);
    }
    else if(salario >= 3501 && salario <=5000){
        let aliq = 15/100;
        let imposto = salario * aliq;
        console.log(`Salário bruto:  ` + salario + `\nAlíquota:  ` + aliq + `\nImposto: ` + imposto);
    }
    else{
        let aliq = 225/100;
        let imposto = salario * aliq;
        console.log(`Salário bruto:  ` + salario + `\nAlíquota:  ` + aliq + `\nImposto: ` + imposto);
    }
}

calcularSalario();