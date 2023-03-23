const express = require('express');
const router = express.Router();
const doacaoController = require('../controllers/doacao.controller');
const auth = require('../middlewares/user.auth');

// ==> Rota responsável por Criar um nova 'Doacao': (POST): localhost:3000/api/doacao
router.post('/doacao', auth, doacaoController.createDoacao);

// ==> Rota responsável por Buscar uma 'Doacao': (GET): localhost:3000/api/doacao
router.get('/doacao', auth, doacaoController.getDoacoes);

// ==> Rota responsável por Editar uma 'Doacao': (PUT): localhost:3000/api/doacao
router.put('/doacao', auth, doacaoController.updateDoacao);

// ==> Rota responsável por Editar uma 'Doacao': (PUT): localhost:3000/api/doacao
router.delete('/doacao', auth, doacaoController.deleteDoacao);

// ==> Rota responsável por Editar uma 'Doacao': (PUT): localhost:3000/api/doacao
router.get('/doacao/:id', auth, doacaoController.getDoacaoById);

module.exports = router;
