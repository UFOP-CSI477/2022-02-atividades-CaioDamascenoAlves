const Imagem = require("../model/imagem.model");

// Função para criar uma nova imagem
const criarImagem = async (req, res) => {
  try {
    const imagem = new Imagem({
      nome: req.file.originalname,
      path: req.file.path,
      user: req.userData._id,
    });
    await imagem.save();
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

// Função para obter todas as imagens de um usuário
const obterImagensPorUsuario = async (req, res) => {
  try {
    const imagens = await Imagem.find({ user: req.userData._id }).populate(
      "user"
    );
    res.json(imagens);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = { criarImagem, obterImagensPorUsuario };
