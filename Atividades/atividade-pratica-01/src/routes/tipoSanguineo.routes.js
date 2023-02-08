const express = require('express');
const router = express.Router();
const tipoSanguineoController = require('../controllers/tipoSanguineo.controller');

// ==> Rota responsável por Criar um novo Tipo Saguineo: (POST): localhost:3000/api/tipo_sanguineo
router.post('/tipo_sanguineo', tipoSanguineoController.createTipoSanguineo);

// ==> Rota responsável por Buscar todos os Tipos Sanguineos: (GET): localhost:3000/api/tipo_sanguineo
router.get('/tipo_sanguineo', tipoSanguineoController.getAllTiposSanguineos);

// ==> Rota responsável por Buscar um determinado Tipo Saguineo por id: (GET): localhost:3000/api/tipo_sanguineo/:id
router.get('/tipo_sanguineo/:id', tipoSanguineoController.getTipoSanguineoById);

// ==> Rota responsável por Atualizar um determinado Tipo Saguineo por id: (PUT): localhost:3000/api/tipo_sanguineo/:id
router.put('/tipo_sanguineo/:id', tipoSanguineoController.updateTipoSanguineoById);

// ==> Rota responsável por Deletar um determinado Tipo Saguineo por id: (DELETE): localhost:3000/api/tipo_sanguineo/:id
router.delete('/tipo_sanguineo/:id', tipoSanguineoController.deleteTipoSanguineoById);

module.exports = router;