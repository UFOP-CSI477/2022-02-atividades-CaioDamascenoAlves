const express = require('express');
const router = express.Router();
const donorController = require('../controllers/donor.controller');
const auth = require('../middlewares/user.auth');

// ==> Rota responsável por Criar uma nova Pessoa: (POST): localhost:3000/api/pessoa
router.post('/pessoa', auth, donorController.createPessoa);

// ==> Rota responsável por Buscar todas as Pessoas: (GET): localhost:3000/api/pessoa
// router.get('/pessoa', donorController.getAllPessoas);

// ==> Rota responsável por Buscar todas as Pessoas: (GET): localhost:3000/api/pessoa
router.get('/pessoa', auth, donorController.getPessoa);

// ==> Rota responsável por Buscar uma determinada Pessoa por id: (GET): localhost:3000/api/pessoa/:id
router.get('/pessoa/:id', auth, donorController.getPessoaById);

// ==> Rota responsável por Buscar uma determinada Pessoa por id: (GET): localhost:3000/api/pessoa/nome/:nome
router.get('/pessoa/nome/:nome', donorController.getPessoaByNome);

// ==> Rota responsável por Atualizar uma determinada Pessoa por id: (PUT): localhost:3000/api/pessoa/:id
router.put('/pessoa/:id', donorController.updatePessoaById);

// ==> Rota responsável por Atualizar uma determinada Pessoa por id: (PUT): localhost:3000/api/pessoa/
router.put('/pessoa/', auth, donorController.updatePessoa);

// ==> Rota responsável por Deletar uma determinada Pessoa por id: (DELETE): localhost:3000/api/pessoa/:id
router.delete('/pessoa/:id', donorController.deletePessoaById);


module.exports = router;