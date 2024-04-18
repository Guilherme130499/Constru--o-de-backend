const express = require('express');

const router = express.Router()

const listaPessoas = [{
    id: 1,
    nome: "Guilherme",
    idade: 20,
    email: "guilhermesousaz568@gmail.com",
    telefone: 61984116873
},
{
    id: 2,
    nome: "Irineu",
    idade: 30,
    email: "irineu@gmail.com",
    telefone: 61984116974
}
]

router.get('/pessoas', (req, res) => {
    res.json(listaPessoas)
})

router.get('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const cadastro = listaPessoas.find (cadastro => cadastro.id == id);
    if (cadastro) {
        return res.json(cadastro)
    }
    return res.status(404).json({mensagem: "Cadastro não Encontrado" })
})

// adicionando um novo dado
router.post('/pessoas', (req, res) => {
    const dados = req.body

    if (!dadosPessoas.nome || !dadosPessoas.idade || !dadosPessoas.email || dadosPessoas.telefone) {
        return res.status(400).json({ mensagem: "Nome, Idade, Email, Telefone tem que ser informados"})
    }

    const novaPessoa = {
    id: listaPessoas.length + 1,
    nome: dados.nome,
    idade: dados.idade,
    email: dados.email,
    telefone: dados.telefone
    }
    listaPessoas.push (novaPessoa)
    return res.status(201).json({
        mensagem: "Cadastro atualizado com sucesso",
        novaPessoa
    })
})
// atualizando os dados
router.put('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const atualizandoPessoas = req.body

    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    const novaPessoa = {
    id: Number(id),
    nome: atualizandoPessoas.nome,
    idade: atualizandoPessoas.idade,
    email: atualizandoPessoas.email,
    telefone: atualizandoPessoas.telefone
    }
    listaPessoas[index] = novaPessoa
    res.json({mensagem : 'Atualizado com sucesso'})
})

router.delete('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id);
    listaPessoas.splice(index, 1)
    res.json({mensagem: 'Deletado com sucesso'})
})




module.exports = router
