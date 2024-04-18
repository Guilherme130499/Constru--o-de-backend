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
    const dadosPessoas = req.body

    if (!dadosPessoas.nome || !dadosPessoas.idade || !dadosPessoas.email || dadosPessoas.telefone) {
        return res.status(400).json({ mensagem: "Nome, Idade, Email, Telefone tem que ser informados"})
    }

    const novaPessoa = {
    id: Math.round(Math.random() * 500),
    nome: dadosPessoas.nome,
    idade: dadosPessoas.idade,
    email: dadosPessoas.email,
    telefone: dadosPessoas.telefone
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
    const atualizarPessoas = req.body

    if (!atualizarPessoas.nome || !atualizarPessoas.idade || !atualizarPessoas.email || !atualizarPessoas.telefone) {
        return res.status(400).json({ mensagem: "Nome, Idade, E-mail, Telefone tem que ser informados" })
    }

    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    
    if (index == -1) {
        return res.status(404).json({ mensagem: "Cadastro não Encontrado" })
    }
    
    const novaPessoas = {
    id: Number(id),
    nome: atualizarPessoas.nome,
    idade: atualizarPessoas.idade,
    email: atualizarPessoas.email,
    telefone: atualizarPessoas.telefone
    }

    listaPessoas[index] = novaPessoas

    return res.status(201).json({
        mensagem: "Cadastro Atualizado com Sucesso!",
        novaPessoas
    })

})

router.delete('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id);
    if (index == -1) {
        return res.status(404).json({ mensagem: "Cadastro não Encontrado" })
    }

    listaPessoas.splice(index, 1)
    return res.status(201).json({
        mensagem: " Cadastro Excluido com Sucesso!"
    })
})


module.exports = router
