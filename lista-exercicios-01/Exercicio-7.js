const prompt = require("prompt-sync")();

function calcularNota(){
  var n1 = parseFloat(prompt(n1));
  var n2 = parseFloat(prompt(n2));

    const peso01 = Number(n1 * 0.4)
    const peso02 = Number(n2 * 0.6)
    const soma = Number(peso01 + peso02)

    return soma
}

console.log("A média final é: " + calcularNota);