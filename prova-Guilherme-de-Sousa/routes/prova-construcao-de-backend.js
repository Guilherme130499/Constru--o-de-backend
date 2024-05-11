//baixando biblioteca
const express = require("express")

const router = express.Router()

//criando uma lista de funcionários
listaFuncionarios = [
    {
        id: 1,
        Nome: "Guilherme",
        email: "Guilherme@gmail.com",
        telefone: 61984116873,
        Cargo: "Desenvolvedor",
        salario: 3000
    },
    {
        id: 2,
        Nome: "Joao",
        email: "Joao@gmail.com",
        telefone: 61984119090,
        Cargo: "Desenvolvedor Sênior",
        salario: 10000
    },
    {
        id: 3,
        Nome: "Ze",
        email: "Ze@gmail.com",
        telefone: 61984117070,
        Cargo: "Auxiliar de suporte",
        salario: 2000
    }]

    //buscando todos os funcionários
    router.get("/prova-Guilherme-de-Sousa", (req, res) => {
        res.json(listaFuncionarios)
    })

    //buscando funcionários por id
    router.get("/prova-Guilherme-de-Sousa/:id", (req, res) => {
        const id = req.params.id
        const funcionario = listaFuncionarios.find(funcionario => {return funcionario.id == id})
        
        if(funcionario){
            return res.json(funcionario)
        }
        return res.status(404).json({mensagem: "Funcionário não encontrado!"})
    })

    //cadastrando novo funcionário
    router.post("/prova-Guilherme-de-Sousa/", (req, res) => {
        const dadosFuncionario = req.body

        if(!dadosFuncionario.nome || !dadosFuncionario.email || !dadosFuncionario.telefone || !dadosFuncionario.cargo || !dadosFuncionario.salario){
                return res.status(400).json({mensagem: "nome, email, telefone, cargo e salario são obrigatórios!"})
            }        

        const novoFuncionario = {
            id: listaFuncionarios.length + 1,
            nome: dadosFuncionario.nome,
            email: dadosFuncionario.email,
            telefone: dadosFuncionario.telefone,
            cargo: dadosFuncionario.cargo,
            salario: dadosFuncionario.salario
        }
        listaFuncionarios.push(novoFuncionario)

        res.json(
            {
                mensagem: "Funcionario adicionado com sucesso!"
            }
        )
    })

    //atualizando funcionarios.
    router.put("/prova-Guilherme-de-Sousa/:id", (req, res) => {
        const id = req.params.id
        const novosFuncionarios = req.body
        
        if(!novosFuncionarios.nome || !novosFuncionarios.email || !novosFuncionarios.telefone || !novosFuncionarios.cargo || !novosFuncionarios.salario){
            return res.status(400).json({mensagem: "nome, email, telefone, cargo e salario são obrigatórios!"})
        }
        const index = listaFuncionarios.findIndex(funcionario => funcionario.id == id)

        if(index == -1){
            return res.status(404).json({mensagem: "Funcinário não encontrado!"})
        }

        const funcionarioAtualizado = {
            id: Number(id),
            nome: novosFuncionarios.nome,
            email: novosFuncionarios.email,
            telefone: novosFuncionarios.telefone,
            cargo: novosFuncionarios.cargo,
            salario: novosFuncionarios.salario
        }
        listaFuncionarios[index] = funcionarioAtualizado

        res.json(
            {
                mensagem: "Funcionário atualizado com sucesso!"
            }
        )        
    })

    //excluindo funcionários
    router.delete("/prova-Guilherme-de-Sousa/:id", (req, res) =>{
        const id = req.params.id
        const index = listaFuncionarios.findIndex(funcionario => funcionario.id == id)
        
        if(index == -1){
            return res.status(404).json({mensagem: "Funcinário não encontrado!"})
        }

        listaFuncionarios.splice(id, 1)
        res.json({mensagem: "Funcionário deletado com sucesso!"})
    })

//puxar os módulos da pasta
module.exports = router