const express = require('express');
const router = express.Router();
const donorController = require('../controllers/donor.controller');
const auth = require('../middlewares/donor.auth');

// ==> Rota responsável por Criar um novo 'User': (POST): localhost:3000/api/register
router.post('/register',  donorController.registerNewUser);

module.exports = router;