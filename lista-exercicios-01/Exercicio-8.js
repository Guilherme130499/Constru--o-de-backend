const prompt = require("prompt-sync");

function calcularVolumeCilindro(raio, altura) {
    const volume = Math.PI * Math.pow(raio, 2) * altura;
    return volume;
}

const raio = parseFloat(prompt("Digite o raio da caixa d'água (em metros): "));
const altura = parseFloat(prompt("Digite a altura da caixa d'água (em metros): "));

const volume = calcularVolumeCilindro(raio, altura);

console.log("O volume da caixa d'água é de " + volume.toFixed(2) + " metros cúbicos.");
