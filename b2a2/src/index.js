//imports
const express = require("express")
const mongoose = require('mongoose')

const app = express()
const PORT = 3000


//middlewares
app.use(express.json())

//conexão com o mongodb
mongoose.connect(`mongodb+srv://guilhermescorreia:<senha>@servergui.t7g7vka.mongodb.net/?retryWrites=true&w=majority&appName=servergui`)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.log("Erro ao conectar no MongoDB: ", err))

//schemas
const Tarefa = mongoose.model('tarefa', { nome: String })

//rotas
app.post('/tarefa', async (req, res) =>{
    const tarefa = new Tarefa({ nome: req.body.nome})
    const tarefaCriada = await tarefa.save()
    res.json(tarefaCriada)
})


app.listen(PORT,() => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})