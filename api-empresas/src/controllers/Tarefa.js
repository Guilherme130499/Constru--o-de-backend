const Tarefa = require('../models/Tarefa')

async function buscarTodos(req, res) {
    res.json(await Tarefa.find())
}


async function buscarPorID(req, res) {
    const tarefa = await Tarefa.findById(req.params.id)
    if (tarefa) {
        res.json(tarefa)
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrado!" })
    }
}

async function criar(req, res) {
    const tarefa = new Tarefa(req.body)
    const tarefaCriado = await tarefa.save()
    res.status(201).json(tarefaCriado)
}

async function atualizar(req, res) {
    const tarefaAtualizado = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (tarefaAtualizado) {
        res.json(
            {
                mensagem: "Tarefa atualizado com sucesso!",
                tarefaAtualizado
            }
        )
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrado!" })
    }
}

async function excluir(req, res) {
    const tarefaExcluido = await Tarefa.findByIdAndDelete(req.params.id)
    if (tarefaExcluido) {
        res.json(
            {
                mensagem: "Tarefa excluido com sucesso!",
                tarefaExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrado!" })
    }
}


module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}