const express = require('express');
const router = express.Router();
const localColetaController = require('../controllers/localColeta.controller');
const auth = require('../middlewares/user.auth');

// ==> Rota responsável por Criar um Local de Coleta: (POST): localhost:3000/api/local_coleta
router.post('/local_coleta', localColetaController.createLocalColeta);

// ==> Rota responsável por Buscar todos os Locais de Coleta: (GET): localhost:3000/api/local_coleta
router.get('/local_coleta', localColetaController.getAllLocaisColeta);

// ==> Rota responsável por Buscar um determinado Locais de Coleta por ID: (GET): localhost:3000/api/local_coleta/:id
router.get('/local_coleta/:id', localColetaController.getLocalColetaById);

// ==> Rota responsável por Buscar um determinado Locais de Coleta por Nome: (GET): localhost:3000/api/local_coleta/nome/:nome
router.get('/local_coleta/nome/:nome', localColetaController.getLocalColetaByNome);

// ==> Rota responsável por Atualizar um determinado Locais de Coleta por ID: (PUT): localhost:3000/api/local_coleta/:id
router.put('/local_coleta/:id', localColetaController.updateLocalColetaById);

// ==> Rota responsável por Deletar um determinado Locais de Coleta por ID: (PUT): localhost:3000/api/local_coleta/:id
router.delete('/local_coleta/:id', localColetaController.deleteLocalColetaById);

// ==> Rota responsável por Contar a Quantidade de Documentos dentro da Collection (GET): localhost:3000/api/local_coleta/count
router.get('/count', localColetaController.countLocaisColetas);

module.exports = router;