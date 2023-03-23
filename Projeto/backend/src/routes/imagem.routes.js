const express = require('express');
const multer = require('multer');
const imagemController = require('../controllers/imagem.controller');
const auth = require('../middlewares/user.auth');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Rota para criar uma nova imagem
router.post('/imagens', auth, upload.single('imagem'), imagemController.criarImagem);

// Rota para obter todas as imagens de um usuário
router.get('/imagens', auth, imagemController.obterImagensPorUsuario);

module.exports = router;
