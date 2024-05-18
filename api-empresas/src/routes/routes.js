const express = require('express')
const router = express.Router()

//controllers
const CargoController = require('../controllers/CargoController')
const DepartamentoController = require('../controllers/DepartamentoController')

//validators
const {validarCargo} = require('../validators/CargoValidator')
const {validarDepartamento} = require('../validators/DepartamentoValidator')

// cargo
router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', CargoController.buscarTodos)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id', validarCargo, CargoController.atualizar)
router.delete('cargos/:id', CargoController.excluir)

// funcionarios




// departamentos
router.get('/departamentos', DepartamentoController.buscarTodos)
router.get('/departamentos/:id', DepartamentoController.buscarPorID)
router.post('/departamentos', validarDepartamento, DepartamentoController.criar)
router.put('/departamentos/:id', validarDepartamento, DepartamentoController.atualizar)
router.delete('/departamentos/:id', DepartamentoController.excluir)






module.exports = router