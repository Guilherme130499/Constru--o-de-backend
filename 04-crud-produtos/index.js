//Importa uma biblioteca express
const express = require ("express"); 
const app = express(); //Função para usar a biblioteca da express na app

//middleware
app.use(express.json())

//rotas

//com isso você consegue rodar outras bibliotecas
//exemplos usados pelo professor, foi a pasta router junto com os arquivos de contato e produtos feitos na aula do dia 10/04
const produtosRouter = require("./router/produtos")

app.use(produtosRouter)

app.listen(3000, () => {
    console.log("api rodando em http://localhost:3000")
})