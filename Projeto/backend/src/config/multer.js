// Arquivo configs/multer.js
const multer = require('multer');

// Configurar o armazenamento do Multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Configurar o filtro do Multer para aceitar apenas arquivos de imagem
const fileFilter = function(req, file, cb) {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Arquivo inválido. Aceito apenas imagens.'), false);
  }
};

// Exportar o objeto de configuração do Multer
module.exports = multer({ storage, fileFilter });
