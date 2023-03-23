const Pessoa = require("../model/pessoa.model");

exports.cratePessoa = async (req, res) => {
  try {
    // verifica se o usuário já criou uma pessoa
    const pessoaExistente = await Pessoa.findOne({
      user: req.userData._id,
    });
    if (pessoaExistente) {
      return res.status(400).json({ message: "Você já criou uma pessoa" });
    }

    // cria a pessoa
    const pessoa = new Pessoa({
      rua: req.body.rua,
      numero: req.body.numero,
      complemento: req.body.complemento,
      documento: req.body.documento,
      user: req.userData._id,
    });
    await pessoa.save();

    return res.status(200).json({
      message: "Pessoa criada com sucesso!",
      pessoa,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao criar a Pessoa",
      error,
    });
  }
};

exports.getPessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.findOne({
      user: req.userData._id,
    }).populate("user");
    if (!pessoa) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }
    return res.status(200).json({ pessoa });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao buscar a Pessoa",
      error,
    });
  }
};

exports.updatePessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.findOneAndUpdate(
      { id: req.params._id, user: req.userData._id },
      {
        rua: req.body.rua,
        numero: req.body.numero,
        complemento: req.body.complemento,
        documento: req.body.documento,
      },
      { new: true }
    );
    if (!pessoa) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }
    return res
      .status(200)
      .json({ message: "Pessoa atualizada com sucesso", pessoa });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao atualizar a Pessoa",
      error,
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

exports.getPessoaById = async (req, res) => {
  try {
    const pessoa = await Pessoa.findById(req.params.id).populate("user");
    if (!pessoa) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }
    return res.status(200).json({ pessoa });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao buscar a Pessoa",
      error,
    });
  }
};


