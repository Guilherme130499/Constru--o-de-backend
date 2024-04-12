const express = require('express')
const router = express.Router()

const listaProdutos = [
{
    id: 1,
    nome: "arroz",
    preco: 10.00
},
{
    id: 2,
    nome: "feijao",
    preco: 10.00
},
{
    id: 3,
    nome: "notebook",
    preco: 10.00
}]

// buscar todos os produtos

router.get("/produtos", (req, res) => {
res.json(listaProdutos)
})

// buscar produtos por id

router.get("/produtos/:id", (req, res) => {
    const id = req.params.id
    const produto = listaProdutos.find(produto => produto.id == id)
    res.json(produto)
    })

// criar um novo produto

router.post("/produtos", (req, res) => {
    const dadosProdutos = req.body

    const novoProduto = {
        id: listaProdutos.length + 1,
        nome: dadosProdutos.nome,
        preco: dadosProdutos.preco
    }
    listaProdutos.push(novoProduto)

    res.json(
        {
            mensagem: "Produto criado com sucesso!"
        }
    )
})

// atualizar produto
router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body
    
    const index = listaProdutos.findIndex(produto => produto.id == id)

    const produtoAtualizado = {
        id: Number(id),
        nome: novosDados.nome,
        preco: novosDados.preco
    }

    listaProdutos[index] = produtoAtualizado
    
    res.json(
        {
            mensagem: "Produto atualizado com sucesso!"
        }
    )
})


module.exports = router //puxar os módulos da pasta

