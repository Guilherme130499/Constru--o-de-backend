const prompt = require("prompt-sync")();

function calcularSalarioFinal(numCarrosVendidos, valorTotalVendas, salarioFixo, valorPorCarro) {
    numCarrosVendidos = parseFloat(numCarrosVendidos);
    valorTotalVendas = parseFloat(valorTotalVendas);
    salarioFixo = parseFloat(salarioFixo);
    valorPorCarro = parseFloat(valorPorCarro);

    const comissaoFixaPorCarro = numCarrosVendidos * valorPorCarro;
    const comissaoPorVendas = valorTotalVendas * 0.05;
    const salarioFinal = salarioFixo + comissaoFixaPorCarro + comissaoPorVendas;

    return salarioFinal;
}

var numCarrosVendidos = prompt("Número de carros vendidos: ");
var valorTotalVendas = prompt("Valor total das vendas: ");
var salarioFixo = prompt("Valor do salário fixo: ");
var valorPorCarro = prompt("Valor unitário do carro vendido: ");

const salarioFinal = calcularSalarioFinal(numCarrosVendidos, valorTotalVendas, salarioFixo, valorPorCarro);

console.log("O salário final do vendedor é de: R$" + salarioFinal.toFixed(2));

