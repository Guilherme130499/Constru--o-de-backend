//teste
const prompt = require("prompt-sync")();
function calcularCustoFinal(custoFabrica, porcentagemDistribuidor, imposto) {
   const custoDistribuidor = custoFabrica * (porcentagemDistribuidor / 100);    
   const custoImposto = custoFabrica * (imposto / 100);    
   const custoFinal = custoFabrica + custoDistribuidor + custoImposto;
    
    return custoFinal;
}

var custoFabrica = parseFloat(prompt("Digite o valor do custo de fábrica do veículo: ")); 
var porcentagemDistribuidor = parseFloat(prompt("Digite o valor da porcentagem do distribuidor: ")); 
var imposto = parseFloat(prompt("Digite o valor do imposto: ")); 
const custoFinal = calcularCustoFinal(custoFabrica, porcentagemDistribuidor, imposto);

console.log("O custo final ao consumidor é de: R$" + custoFinal.toFixed(2));1

