const presenca = [true, false, true, true, true, false, false, true, true, true, true, false, true, true, false, false, false, true, true, false];

function frequenciaTotal(frequencia) {
    let aulatotal = presenca.length;
    let presencas = 0;

    for (let i = 0; i < presenca.length; i++) {
        if(frequencia[i] == true) {
            presencas++;
        }
    }

    let porcentagem = (presencas / aulatotal) * 100;
    let regoun = porcentagem >= 75 ? "Regular." : "Irregular.";

    console.log(`Percentual de presença: ${porcentagem}%`);
    console.log(`Situação do aluno: ${regoun}`);
}


frequenciaTotal(presenca);
