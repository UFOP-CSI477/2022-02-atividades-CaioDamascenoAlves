const TipoSanguineo = require("../model/tipoSanguineo.model");

exports.createTipoSanguineo = async (req, res) => {
  try {
    const novoTipo = new TipoSanguineo({
      tipo: req.body.tipo,
      fator: req.body.fator,
      user: req.userData._id,
    });
    const tipo = await novoTipo.save();
    res.send(tipo);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Erro ao salvar o tipo sanguineo.",
    });
  }
};

exports.getTipoSanguineo = async (req, res) => {
  try {
    if (!req.userData) {
      return res.status(401).json({
        message: "Erro ao buscar tipo sanguíneo!",
        error: "Usuário não está logado",
      });
    }

    const tipoSanguineo = await TipoSanguineo.findOne({
      user: req.userData._id,
    });

    if (!tipoSanguineo) {
      return res.status(404).json({
        message: "Erro ao buscar tipo sanguíneo!",
        error: "Tipo sanguíneo não encontrado",
      });
    }

    return res.status(200).json({
      message: "Tipo sanguíneo encontrado com sucesso!",
      data: tipoSanguineo,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao buscar tipo sanguíneo!",
      error: error.message,
    });
  }
};

exports.updateTipoSanguineo = async (req, res) => {
  try {
    if (!req.userData) {
      return res.status(401).json({
        message: "Erro ao atualizar tipo sanguíneo!",
        error: "Usuário não está logado",
      });
    }

    const tipoSanguineo = await TipoSanguineo.findOne({
      user: req.userData._id,
    });

    if (!tipoSanguineo) {
      return res.status(404).json({
        message: "Erro ao atualizar tipo sanguíneo!",
        error: "Tipo sanguíneo não encontrado",
      });
    }

    tipoSanguineo.tipo = req.body.tipo;
    tipoSanguineo.fator = req.body.fator;

    await tipoSanguineo.save();

    return res.status(200).json({
      message: "Tipo sanguíneo atualizado com sucesso!",
      data: tipoSanguineo,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao atualizar tipo sanguíneo!",
      error: error.message,
    });
  }
};

exports.getAllTiposSanguineos = async (req, res) => {
  try {
    const tipos = await TipoSanguineo.find();
    res.send(tipos);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Erro ao recuperar os tipos sanguineos.",
    });
  }
};

exports.getTipoSanguineoById = async (req, res) => {
  try {
    const tipo = await TipoSanguineo.findById(req.params.id);
    if (!tipo) {
      return res.status(404).send({
        message: "Tipo Sanguineo não encontrado com o id " + req.params.id,
      });
    }
    res.send(tipo);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Tipo Sanguineo não encontrado com o id " + req.params.id,
      });
    }
    return res.status(500).send({
      message: "Erro ao recuperar o tipo sanguineo com o id " + req.params.id,
    });
  }
};

exports.updateTipoSanguineoById = async (req, res) => {
  try {
    const tipo = await TipoSanguineo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!tipo) {
      return res.status(404).send({
        message: "Tipo Sanguineo não encontrado com o id " + req.params.id,
      });
    }
    res.send(tipo);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Tipo Sanguineo não encontrado com o id " + req.params.id,
      });
    }
    return res.status(500).send({
      message: "Erro ao atualizar o tipo sanguineo com o id " + req.params.id,
    });
  }
};

exports.deleteTipoSanguineoById = async (req, res) => {
  try {
    const tipo = await TipoSanguineo.findByIdAndRemove(req.params.id);
    if (!tipo) {
      return res.status(404).send({
        message: "Tipo Sanguineo não encontrado com o id " + req.params.id,
      });
    }
    res.send({ message: "Tipo Sanguineo deletado com sucesso!" });
  } catch (err) {
    if (err.kind === "ObjectId" || err.name === "NotFound") {
      return res.status(404).send({
        message: "Tipo Sanguineo não encontrado com o id " + req.params.id,
      });
    }
    return res.status(500).send({
      message:
        "Não foi possível deletar o tipo sanguineo com o id " + req.params.id,
    });
  }
};
