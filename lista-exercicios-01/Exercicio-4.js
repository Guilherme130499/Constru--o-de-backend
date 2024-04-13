//teste
const prompt = require("prompt-sync")();

function CustoFinal(custoFabrica) {    
    const percentualDistribuidor = 0.28;
    const percentualImpostos = 0.45;

    let custoDistribuidor = custoFabrica * percentualDistribuidor;
    let custoImpostos = custoFabrica * percentualImpostos;
    let custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

    return custoFinal;
}

function main() {
    let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));    
    let custoFinal = CustoFinal(custoFabrica);

    console.log("Custo final ao consumidor: R$" + custoFinal.toFixed(2));
}

main();
