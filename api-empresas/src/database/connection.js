const mongoose = require('mongoose')
require('dotenv').config()

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

function main() {
    mongoose.connect(`mongodb+srv://guilhermeteste:gSNspHqdaS1bGQqx@servergui.t7g7vka.mongodb.net/?retryWrites=true&w=majority&appName=servergui`)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.log("Erro ao conectar no MongoDB: ", err))
}

module.exports = main