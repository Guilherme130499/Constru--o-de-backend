const express = require('express')
const router = express.Router()

//controllers
const CargoController = require('../controllers/CargoController')

//validators
const {validarCargo} = require('../validators/CargoValidator')

// cargo
router.post('/cargos', validarCargo, CargoController.criar)



// funcionarios




// departamentos







module.exports = router