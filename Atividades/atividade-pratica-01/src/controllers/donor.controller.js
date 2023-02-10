const Pessoa = require("../models/pessoa.model");
const TipoSanguineo = require("../models/TipoSanguineo");

const createPessoa = async (req, res) => {
  try {
    const { nome, rua, numero, complemento, documento, tipoSanguineoId } =
      req.body;
    const tipoSanguineo = await TipoSanguineo.findById(tipoSanguineoId);
    if (!tipoSanguineo) {
      return res.status(400).send({ error: "Tipo sanguíneo não encontrado" });
    }
    const pessoa = await Pessoa.create({
      nome,
      rua,
      numero,
      complemento,
      documento,
      tipo_sanguineo: tipoSanguineo._id,
    });
    return res.send({ pessoa });
  } catch (error) {
    return res.status(400).send({ error: "Falha ao criar pessoa" });
  }
};

module.exports = { createPessoa };

exports.getAllPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.find();
    res.send(pessoas);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Erro ao recuperar as pessoas",
    });
  }
};

exports.getPessoaById = async (req, res) => {
  try {
    const pessoa = await Pessoa.findById(req.params.id);
    if (!pessoa) {
      return res.status(404).send({
        message: "Pessoa não encontrada com o id: " + req.params.id,
      });
    }
    res.send(pessoa);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Pessoa não encontrada com o id " + req.params.id,
      });
    }
    return res.status(500).send({
      message: "Erro ao recuperar a pessoa com o id " + req.params.id,
    });
  }
};

exports.getPessoaByNome = async (req, res) => {
  try {
    const pessoa = await Pessoa.findOne({ nome: req.params.nome });
    if (!pessoa) {
      return res.status(404).send({
        message: "Pessoa não encontrada com o nome " + req.params.nome,
      });
    }
    res.send(pessoa);
  } catch (err) {
    return res.status(500).send({
      message: "Erro ao recuperar a pessoa com o nome " + req.params.nome,
    });
  }
};

exports.updatePessoaById = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!pessoa) {
      return res.status(404).send({
        message: "Pessoa não encontrada com o id " + req.params.id,
      });
    }
    res.send(pessoa);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Pessoa não encontrada com o id " + req.params.id,
      });
    }
    return res.status(500).send({
      message: "Erro ao atualizar a pessoa com o id " + req.params.id,
    });
  }
};

exports.deletePessoaById = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByIdAndRemove(req.params.id);
    if (!pessoa) {
      return res.status(404).send({
        message: "Pessoa não encontrada com o id " + req.params.id,
      });
    }
    res.send({ message: "Pessoa deletada com sucesso!" });
  } catch (err) {
    if (err.kind === "ObjectId" || err.name === "NotFound") {
      return res.status(404).send({
        message: "Pessoa não encontrada com o id " + req.params.id,
      });
    }
    return res.status(500).send({
      message: "Não foi possível deletar a pessoa com o id " + req.params.id,
    });
  }
};