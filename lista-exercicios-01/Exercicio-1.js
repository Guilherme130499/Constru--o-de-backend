//teste
const prompt = require("prompt-sync")();

function calculoDeMedia(notas) {
    let total = 0;
    for (let i = 0; i < notas.length; i++) {
        total += notas[i];
    }
    return total / notas.length;
}

function Aprovacao(media) {
    if (media >= 7.0) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

function main() {
   
    let notas = [];
    for (let i = 1; i <= 4; i++) {
        let nota = parseFloat(prompt("Digite a nota " + i + ":"));
        notas.push(nota);
    }

    let media = calculoDeMedia(notas);

    let resultado = Aprovacao(media);

    console.log("Média: " + media.toFixed(2));
    console.log("Resultado: " + resultado);
}

main();

