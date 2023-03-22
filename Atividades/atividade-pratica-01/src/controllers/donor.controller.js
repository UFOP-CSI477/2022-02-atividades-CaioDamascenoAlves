const Pessoa = require("../model/donor.model");
const TipoSanguineo = require("../model/tipoSanguineo.model");

exports.createPessoa = async (req, res) => {
  try {
    const { nome, rua, numero, complemento, documento, tipoSanguineo } =
      req.body;
    const tipo = await TipoSanguineo.findOne({ tipoSanguineo });

    const novaPessoa = new Pessoa({
      nome,
      rua,
      numero,
      complemento,
      documento,
      user: req.userData._id,
      tipo: tipo._id,
    });

    await novaPessoa.save();

    return res.status(201).json({
      message: "Pessoa criada com sucesso!",
      data: novaPessoa,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao criar pessoa!",
      error: error.message,
    });
  }
};

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

exports.getPessoa = async (req, res) => {
  try {
    if (!req.userData) {
      return res.status(401).json({
        message: "Erro ao buscar pessoa!",
        error: "Usuário não está logado",
      });
    }

    const pessoa = await Pessoa.findOne({ user: req.userData._id });

    if (!pessoa) {
      return res.status(404).json({
        message: "Erro ao buscar pessoa!",
        error: "Pessoa não encontrada",
      });
    }

    return res.status(200).json({
      message: "Pessoa encontrada com sucesso!",
      data: pessoa,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao buscar pessoa!",
      error: error.message,
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

exports.updatePessoa = async (req, res) => {
  try {
    if (!req.userData) {
      return res.status(401).json({
        message: "Erro ao atualizar pessoa!",
        error: "Usuário não está logado",
      });
    }

    const pessoa = await Pessoa.findOneAndUpdate(
      { user: req.userData._id },
      req.body,
      { new: true }
    );

    if (!pessoa) {
      return res.status(404).json({
        message: "Erro ao atualizar pessoa!",
        error: "Pessoa não encontrada",
      });
    }

    return res.status(200).json({
      message: "Pessoa atualizada com sucesso!",
      data: pessoa,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao atualizar pessoa!",
      error: error.message,
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
exports.deletePessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.findOneAndDelete({
      id: req.params._id,
      user: req.userData._id,
    });
    if (!pessoa) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }
    return res
      .status(200)
      .json({ message: "Pessoa excluída com sucesso", pessoa });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao excluir a Pessoa",
      error,
    });
  }
};