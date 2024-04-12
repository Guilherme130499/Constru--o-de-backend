const express = require("express");
const app = express();
app.use(express.json());

//exercicio1

app.post('/exercicio1', (req, res) => {
    const corpo = req.body
    console.log(corpo)

    const estoqueMedio = (corpo.quantidadeMinima + corpo.quantidadeMaxima) / 2

    const resposta = {
        peca: req.body.peca,
        estoqueMedio: estoqueMedio
    }

    res.json(resposta)
})

//exercicio2

app.post("/exc2", (req,res) => {
    const {salario} = req.body
    console.log(salario)
    const salarioFloat = Number(salario);
    if (salario < 1000){
        var novoSalario = salario * (1 + 0.3)
        return res.json("O novo salario é: " + novoSalario)
    } else
    return res.json("Funcionario nao tem direito ao reajuste") 


})

app.listen(3000, ()=> {
    console.log("aplicacao iniciando em http://localhost:3000")
})

//exercicio3

app.post("/exc3", (req, res) => {
const {nome, salarioFixo, totalVendas, percentualComissao} = req.body
console.log(nome, salarioFixo, totalVendas, percentualComissao)
var novoSalario = salarioFixo + ((percentualComissao * totalVendas) / 100) 
res.json(`Nome do vendedor: ${nome}, salario ${novoSalario}`)
})

//exercicio4

app.post("/exc4", (req, res) => {
    const{nome, distancia, tempo} = req.body
    console.log(nome, distancia, tempo)
    const velocidadeMedia = (distancia / tempo);
    
    res.json(`A velocidade média do piloto ${nome}, foi de ${velocidadeMedia} km/h`)
})

//exercicio5

app.post("/exc5", (req,res) => {
    const {salario} = req.body
    console.log(salario)
    const salarioFloat = Number(salario);

    if (salario <= 2000){
        var novoSalario = salario * (1 + 0.5)
        return res.json("O novo salario é: " + novoSalario)
    } else
        var novoSalario = salario * (1 + 0.3)
    return res.json(`O novo salario é:  ${novoSalario}`)
})

// exercicio6

app.post("/exc6", (req,res) => {
    const {altura, sexo} = req.body
    console.log(altura, sexo)

    if (sexo === "masculino") {
        
        var pesoIdeal = (72.7 * altura) -58

        return res.json(`O peso ideal é: ${pesoIdeal.toFixed(2)}`)
    } 
    
    else if (sexo === "feminino") {

        var pesoIdeal = (62.1 * altura) -44.7

        return res.json(`O peso ideal é: ${pesoIdeal.toFixed(2)}`)
    } 
    
    else 
        return res.json("Erro")    
})

//exercicio7
app.post('/exercicio7', (req, res) => {
    let listaProdutos = []

    req.body.forEach(produto => {
        listaProdutos.push(produto)
    });

    let maiorPrecoLido = 0
    listaProdutos.forEach(produto => {
        if (produto.preco > maiorPrecoLido){
            maiorPrecoLido = produto.preco
        }
    })

    let soma = 0
    console.log("soma ", soma)
    listaProdutos.forEach(produto => {
        console.log("produto preco ", produto.preco)
        soma = soma + produto.preco
        console.log("soma ", soma)
    })

    let media = soma / listaProdutos.length

    res.json({
        maiorPrecoLido: maiorPrecoLido,
        media: media.toFixed(2)
    })
})
