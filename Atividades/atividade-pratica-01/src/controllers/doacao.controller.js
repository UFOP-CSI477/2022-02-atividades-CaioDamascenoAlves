const Doacao = require("../model/doacao.model");
const Pessoa = require("../model/donor.model");
const LocalColeta = require("../model/localColeta.model");

exports.createDoacao = async (req, res) => {
  try {
    const { data, pessoaId, localId } = req.body;
    const pessoa = await Pessoa.findOne({ pessoaId });
    const local = await LocalColeta.findOne({ localId });

    if (!pessoa)
      return res.status(400).json({ message: "Pessoa não encontrada." });
    if (!local)
      return res
        .status(400)
        .json({ message: "Local de coleta não encontrado." });

    const doacao = new Doacao({
      data,
      pessoa: pessoa._id,
      local: local._id,
    });
    await doacao.save();
    return res.status(201).json({
      message: "Doação criada com sucesso!",
      doacao,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao criar a doação.",
      error,
    });
  }
};

exports.getAllDoacoes = async (req, res) => {
  try {
    const doacoes = await Doacao.find();
    res.send(doacoes);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Ocorreu um erro ao recuperar as doações",
    });
  }
};

exports.getDoacaoById = async (req, res) => {
  try {
    const doacao = await Doacao.findById(req.params.id)
      .populate("pessoa")
      .populate("localColeta");
    if (!doacao) {
      return res.status(404).send({
        message: "Doação não encontrada com o id " + req.params.id,
      });
    }
    res.send(doacao);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Doação não encontrada com o id " + req.params.id,
      });
    }
    return res.status(500).send({
      message: "Erro ao recuperar a doação com o id " + req.params.id,
    });
  }
};

exports.updateDoacaoById = async (req, res) => {
  try {
    const doacao = await Doacao.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!doacao) {
      return res.status(404).send({
        message: "Doação não encontrada com o id " + req.params.id,
      });
    }
    res.send(doacao);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Doação não encontrada com o id " + req.params.id,
      });
    }
    return res.status(500).send({
      message: "Erro ao atualizar doação com o id " + req.params.id,
    });
  }
};

exports.deleteDoacaoById = async (req, res) => {
  try {
    const doacao = await Doacao.findByIdAndRemove(req.params.id);
    if (!doacao) {
      return res.status(404).send({
        message: "Doação não encontrada com o id " + req.params.id,
      });
    }
    res.send({ message: "Doação excluída com sucesso!" });
  } catch (err) {
    if (err.kind === "ObjectId" || err.name === "NotFound") {
      return res.status(404).send({
        message: "Doação não encontrada com o id " + req.params.id,
      });
    }
    return res.status(500).send({
      message: "Não foi possível excluir a doação com o id " + req.params.id,
    });
  }
};
