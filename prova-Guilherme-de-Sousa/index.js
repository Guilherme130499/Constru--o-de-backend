const express = require("express")

const app = express()

app.use(express.json())


const funcionariosRouter = require("./routes/prova-construcao-de-backend")
app.use(funcionariosRouter)









app.listen(3000, () =>{
    console.log("Aplicação rodando em http://localhost:3000")
})