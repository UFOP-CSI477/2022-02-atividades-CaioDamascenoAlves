const Doacao = require("../model/doacao.model");
const Pet = require("../model/pet.model");
const Pessoa = require("../model/pessoa.model");

exports.createDoacao = async (req, res) => {
  try {
    const user = req.userData;
    const pessoa = await Pessoa.findOne({ user: user._id });
    const pet = await Pet.findOne({ user: user._id });

    if (!pet) {
      return res.status(404).json({ message: "Pet não encontrado" });
    }

    if (pet.adotado) {
      return res.status(400).json({ message: "Pet já foi adotado" });
    }

    if (!pessoa) {
      return res.status(400).json({
        message: "Você precisa criar uma pessoa antes de fazer uma doação",
      });
    }

    const newDoacao = new Doacao({
      data: req.body.data,
      pet: pet._id,
      user: user._id,
      pessoa: pessoa._id,
    });

    await pet.save();
    await newDoacao.save();

    return res.status(200).json({
      message: "Doação criada com sucesso!",
      doacao: newDoacao,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao criar a Doação",
      error,
    });
  }
};

exports.getDoacoes = async (req, res) => {
  try {
    const doacoes = await Doacao.findOne({ user: req.userData._id }).populate("pessoa pet user");
    return res.status(200).json(doacoes);
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao buscar as doações",
      error,
    });
  }
};

exports.getDoacaoById = async (req, res) => {
  try {
    const doacao = await Doacao.findById(req.params.id).populate("pet pessoa");
    if (!doacao) {
      return res.status(404).json({ message: "Doação não encontrada" });
    }
    // Verifica se o usuário é o mesmo que criou a doação
    if (doacao.user.toString() !== req.userData._id) {
      return res.status(401).json({ message: "Não autorizado" });
    }
    return res.status(200).json({ doacao });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao buscar a Doação",
      error,
    });
  }
};

exports.updateDoacao = async (req, res) => {
  try {
    const doacao = await Doacao.findOneAndUpdate(
      req.params._id,
      {
        data: req.body.data,
      },
      { new: true }
    ).populate("pet");

    if (!doacao) {
      return res.status(404).json({ message: "Doação não encontrada" });
    }

    return res
      .status(200)
      .json({ message: "Doação atualizada com sucesso", doacao });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao atualizar a Doação",
      error,
    });
  }
};

exports.deleteDoacao = async (req, res) => {
  try {
    const doacao = await Doacao.findOneAndDelete(
      {
        _id: req.params._id,
        usuario: req.user._id,
      },
      {
        data: req.body.data,
      },
    ).populate("pet");

    if (!doacao) {
      return res.status(404).json({ message: "Doação não encontrada" });
    }

    return res
      .status(200)
      .json({ message: "Doação deletada com sucesso", doacao });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao deletar a Doação",
      error,
    });
  }
};
