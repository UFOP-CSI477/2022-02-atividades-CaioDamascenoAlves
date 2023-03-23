const express = require('express');
const router = express.Router();
const adocaoController = require('../controllers/adocao.controller');
const auth = require('../middlewares/user.auth');

// ==> Rota responsável por Criar uma nova 'Adoção': (POST): localhost:3000/api/adocao
router.post('/adocao', auth, adocaoController.createAdocao);

// ==> Rota responsável por Busca uma 'Adoção': (POST): localhost:3000/api/adocao
router.get('/adocao', auth, adocaoController.getAdocao);

// ==> Rota responsável por Busca uma 'Adoção': (POST): localhost:3000/api/adocao
router.put('/adocao', auth, adocaoController.updateAdocao);

// ==> Rota responsável por Busca uma 'Adoção': (POST): localhost:3000/api/adocao
router.delete('/adocao', auth, adocaoController.deleteAdocao);

module.exports = router;
