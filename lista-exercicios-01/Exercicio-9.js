const prompt = require("prompt-sync")();

function SomarEMultiplicar() {
    
    var PrimeiroNumero = (Number(prompt("Digite o primeiro número: ")));
    var SegundoNumero = (Number(prompt("Digite o segundo número ")));
    
    const Somatoria = (Number(PrimeiroNumero + SegundoNumero));

    return Somatoria * PrimeiroNumero
}

const ResultadoFinal = SomarEMultiplicar();
console.log("O resultado final é: " + ResultadoFinal);