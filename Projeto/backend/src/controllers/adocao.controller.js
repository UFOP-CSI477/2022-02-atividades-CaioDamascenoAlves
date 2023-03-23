const Adocao = require("../model/adocao.model");
const Doacao = require("../model/doacao.model");

exports.createAdocao = async (req, res) => {
  try {
    const user = req.userData;
    const doacao = await Doacao.findOne(req.body.doacao).populate("pet pessoa");

    if (!doacao) {
      return res.status(404).json({ message: "Doação não encontrada" });
    }

    if (doacao.user.toString() === user._id.toString()) {
      return res.status(400).json({
        message: "Você não pode adotar um animal do qual você é o doador",
      });
    }

    const newAdocao = new Adocao({
      data: req.body.data,
      doacao: doacao._id,
      user: user._id,
      pet: doacao.pet,
      pessoa: doacao.pessoa
    });

    await doacao.save();
    await newAdocao.save();

    return res.status(200).json({
      message: "Adoção criada com sucesso!",
      adocao: newAdocao,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao criar a Adoção",
      error,
    });
  }
};

exports.getAdocao = async (req, res) => {
  try {
    const user = req.userData;
    const adocao = await Adocao.findOne({ user: user._id })
      .populate({
        path: 'doacao',
        populate: [
          { path: 'pessoa' },
          { path: 'pet' },
        ],
      });

    return res.status(200).json({
      message: "Adoções encontradas com sucesso!",
      adocao,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao buscar as Adoções",
      error,
    });
  }
};


exports.updateAdocao = async (req, res) => {
  try {
    const user = req.userData;
    const { id } = req.params;
    const { data } = req.body;

    const adocao = await Adocao.findOneAndUpdate(id).populate("doacao");

    if (!adocao) {
      return res.status(404).json({ message: "Adoção não encontrada" });
    }

    if (adocao.user.toString() !== user._id.toString()) {
      return res.status(403).json({ message: "Acesso negado" });
    }

    adocao.data = data;

    const updatedAdocao = await adocao.save();

    return res.status(200).json({
      message: "Adoção atualizada com sucesso!",
      adocao: updatedAdocao,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao atualizar a Adoção",
      error,
    });
  }
};

exports.deleteAdocao = async (req, res) => {
  try {
    const user = req.userData;
    const { id } = req.params;
    const { data } = req.body;

    const adocao = await Adocao.findOneAndDelete(id).populate("doacao");

    if (!adocao) {
      return res.status(404).json({ message: "Adoção não encontrada" });
    }

    if (adocao.user.toString() !== user._id.toString()) {
      return res.status(403).json({ message: "Acesso negado" });
    }

    adocao.data = data;

    return res.status(200).json({
      message: "Adoção deletada com sucesso!",
      adocao
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao atualizar a Adoção",
      error,
    });
  }
};

// exports.getAdocoes = async (req, res) => {
//   try {
//     const adocoes = await Adocao.find()
//       .populate({
//         path: "doacao",
//         populate: [
//           {
//             path: "pet",
//             select: "-adotado",
//           },
//           {
//             path: "user",
//             select: "-password",
//           },
//           {
//             path: "pessoa",
//           },
//         ],
//       })
//       .populate("user");

//     return res.status(200).json({
//       message: "Adoções encontradas com sucesso!",
//       adocoes,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Ocorreu um erro ao buscar as Adoções",
//       error,
//     });
//   }
// };
