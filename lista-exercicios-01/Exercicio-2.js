//teste
const prompt = require("prompt-sync")();

function percentualVotos(valor, total) {
    return (valor / total) * 100;
}

function main() {    
    let totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
    let Brancos = parseInt(prompt("Digite o número de votos brancos:"));
    let Nulos = parseInt(prompt("Digite o número de votos nulos:"));
    let Validos = parseInt(prompt("Digite o número de votos válidos:"));

    let percentualBrancos = percentualVotos(Brancos, totalEleitores);
    let percentualNulos = percentualVotos(Nulos, totalEleitores);
    let percentualValidos = percentualVotos(Validos, totalEleitores);

    console.log("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%");
    console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
    console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
}

main();
