//teste
const prompt = require("prompt-sync")();

function calculoDeNovoSalario(salarioAtual, percentualReajuste) {    
    let fatorReajuste = (percentualReajuste / 100) + 1;   
    let novoSalario = salarioAtual * fatorReajuste;
    return novoSalario;
}

function main() {   
    let salarioAtual = parseFloat(prompt("Digite o salário mensal atual do funcionário:"));
    let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (%):"));

    let novoSalario = calculoDeNovoSalario(salarioAtual, percentualReajuste);
   
    console.log("Novo salário: R$" + novoSalario.toFixed(2));
}

main();
