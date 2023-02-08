const express = require('express');
const router = express.Router();

const doacaoController = require('../controllers/doacao.Controller');

// ==> Rota responsável por Criar uma nova Doação: (POST): localhost:3000/api/doacao
router.post('/doacao', doacaoController.createDoacao);

// ==> Rota responsável por Buscar todas as Doações: (GET): localhost:3000/api/doacao
router.get('/doacao', doacaoController.getAllDoacoes);

// ==> Rota responsável por Buscar uma determinada Doação por ID: (GET): localhost:3000/api/doacao/:id
router.get('/doacao/:id', doacaoController.getDoacaoById);

// ==> Rota responsável por Atualizar uma determinada Doação por ID: (PUT): localhost:3000/api/doacao/:id
router.put('/doacao/:id', doacaoController.updateDoacaoById);

// ==> Rota responsável por Deletar uma determinada Doação por ID: (PUT): localhost:3000/api/doacao/:id
router.delete('/doacao/:id', doacaoController.deleteDoacaoById);

module.exports = router;