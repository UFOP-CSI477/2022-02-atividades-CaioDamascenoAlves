const Pessoa = require("../model/pessoa.model");
const Pet = require("../model/pet.model");
const { getAsync, setAsync } = require("../config/redis.config");

exports.createPet = async (req, res) => {
  try {
    const user = req.userData;

    // Verifica se o usuário já criou uma pessoa
    const pessoa = await Pessoa.findOne({ user: user._id });
    if (!pessoa) {
      return res.status(400).json({
        message: "Você precisa criar uma pessoa antes de criar um pet",
      });
    }

    const newPet = new Pet({
      nome: req.body.nome,
      idade: req.body.idade,
      tipo: req.body.tipo,
      raca: req.body.raca,
      pessoa: pessoa._id,
    });
    await newPet.save();

    return res.status(200).json({
      message: "Pet criado com sucesso!",
      pet: newPet,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao criar o Pet",
      error,
    });
  }
};

exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    return res.json(pets);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao buscar pets" });
  }
};

exports.getPet = async (req, res) => {
  try {
    const user = req.userData;

    // Verifica se o usuário já criou uma pessoa
    const pessoa = await Pessoa.findOne({ user: user._id });
    if (!pessoa) {
      return res.status(400).json({
        message: "Você precisa criar uma pessoa antes de criar um pet",
      });
    }

    // Verifica se o pet pertence à pessoa do usuário logado
    const pet = await Pet.findOne({ id: req.params._id, pessoa: pessoa._id });
    if (!pet) {
      return res.status(404).json({
        message: "Pet não encontrado",
      });
    }

    return res.status(200).json({
      pet,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao obter o Pet",
      error,
    });
  }
};

exports.updatePet = async (req, res) => {
  try {
    const user = req.userData;

    // Verifica se o usuário já criou uma pessoa
    const pessoa = await Pessoa.findOne({ user: user._id });
    if (!pessoa) {
      return res.status(400).json({
        message: "Você precisa criar uma pessoa antes de criar um pet",
      });
    }

    const pet = await Pet.findOneAndUpdate(
      { id: req.params._id, pessoa: pessoa._id },
      {
        nome: req.body.nome,
        idade: req.body.idade,
        tipo: req.body.tipo,
        raca: req.body.raca,
        adotado: req.body.adotado,
      },
      { new: true }
    );

    if (!pet) {
      return res.status(404).json({ message: "Pet não encontrado" });
    }

    return res.status(200).json({
      message: "Pet atualizado com sucesso!",
      pet,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao atualizar o Pet",
      error,
    });
  }
};

exports.getAllPetsCache = async (req, res) => {
  try {
    // Verifica se há dados de pets armazenados no cache do Redis usando a chave "pets"
    const pets = await getAsync("pets");

    if (pets) {
      // Se os dados existirem no cache do Redis, retorna-os
      return res.status(200).json({ pets: JSON.parse(pets) });
    } else {
      // Se não houver dados no cache do Redis, realiza uma consulta no banco de dados MongoDB para recuperar todos os pets
      const pets = await Pet.find({}).populate("pessoa");

      // Armazena os dados de pets no cache do Redis
      await setAsync("pets", JSON.stringify(pets), "EX", 3600);

      // Retorna os dados de pets recuperados do banco de dados
      return res.status(200).json({ pets });
    }
  } catch (error) {
    // Se houver um erro ao recuperar os dados de pets do banco de dados ou do cache do Redis, retorna uma resposta de erro
    return res.status(500).json({ error });
  }
};

exports.deletePet = async (req, res) => {
  const user = req.userData;

    // Verifica se o usuário já criou uma pessoa
    const pessoa = await Pessoa.findOne({ user: user._id });
    if (!pessoa) {
      return res.status(400).json({
        message: "Você precisa criar uma pessoa antes de deletar um pet",
      });
    }

  try {
    const pet = await Pet.findOneAndDelete({ id: req.params._id, pessoa: pessoa._id },);
    if (!pet) {
      return res.status(404).json({ message: "Pet não encontrado" });
    }
    return res.status(200).json({ message: "Pet excluído com sucesso", pet });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao excluir o Pet",
      error,
    });
  }
};

