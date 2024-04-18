const express = require("express")

const router = express.Router()

listaCarros = [
{
    id: 1,
    marca: "Fiat",
    modelo: "Marca KABUM",
    cor: "Preto",
    valor: 150000
},
{
    id: 2,
    marca: "Honda",
    modelo: "Civic",
    cor: "Rosa",
    valor: 500000
}
]

router.get("/carros", (req, res) => {
    res.json(listaCarros)
})


router.get("/carros/:id", (req, res) => {
    const id = req.params.id 
    const carro = listaCarros.find(carro => {return carro.id == id})
    if(carro){
        return res.json(carro)
    }
    return res.status(404).json({ mensagem: "Carro não encontrado!" })
})


module.exports = router