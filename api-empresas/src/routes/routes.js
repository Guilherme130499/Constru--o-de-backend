const express = require('express')
const router = express.Router()

//controllers
const CargoController = require('../controllers/CargoController')
const DepartamentoController = require('../controllers/DepartamentoController')
const FuncionarioController = require('../controllers/FuncionarioController')
//validators
const {validarCargo} = require('../validators/CargoValidator')
const {validarDepartamento} = require('../validators/DepartamentoValidator')
const {validarFuncionario} = require('../validators/FuncinarioValidator')

// cargo
router.get('/cargos', validarCargo, CargoController.buscarTodos)
router.get('/cargos/:id', CargoController.buscarTodos)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id', validarCargo, CargoController.atualizar)
router.delete('cargos/:id', CargoController.excluir)

// funcionarios
router.get('/funcionarios', FuncionarioController.buscarTodos)
router.get('/funcionarios/:id', FuncionarioController.buscarPorID)
router.post('/funcionarios', validarFuncionario, FuncionarioController.criar)
router.put('/funcionarios/:id', validarFuncionario, FuncionarioController.atualizar)
router.delete('/funcionarios/:id', FuncionarioController.excluir)


// departamentos
router.get('/departamentos', DepartamentoController.buscarTodos)
router.get('/departamentos/:id', DepartamentoController.buscarPorID)
router.post('/departamentos', validarDepartamento, DepartamentoController.criar)
router.put('/departamentos/:id', validarDepartamento, DepartamentoController.atualizar)
router.delete('/departamentos/:id', DepartamentoController.excluir)



module.exports = router