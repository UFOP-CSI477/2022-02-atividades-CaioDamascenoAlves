const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoa.controller');
const auth = require('../middlewares/user.auth')

// ==> Rota responsável por Criar um nova 'Pessoa': (POST): localhost:3000/api/pessoa
router.post('/pessoa', auth, pessoaController.cratePessoa);

// ==> Rota responsável por Buscar um nova 'Pessoa': (POST): localhost:3000/api/pessoa
router.get('/pessoa', auth, pessoaController.getPessoa);

// ==> Rota responsável por Buscar um nova 'Pessoa': (POST): localhost:3000/api/pessoa
router.get('/pessoa/:id', auth, pessoaController.getPessoaById);

// ==> Rota responsável por Atualizar um nova 'Pessoa': (PUT): localhost:3000/api/pessoa
router.put('/pessoa', auth, pessoaController.updatePessoa);

// ==> Rota responsável por Atualizar um nova 'Pessoa': (DELETE): localhost:3000/api/pessoa
router.delete('/pessoa/:id', auth, pessoaController.deletePessoa);

module.exports = router;