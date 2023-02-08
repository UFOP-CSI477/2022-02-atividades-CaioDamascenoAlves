const Doacao = require('../models/doacao.model');

exports.createDoacao = async (req, res) => {
    const newDoacao = new Doacao({
        pessoa: req.body.pessoa,
        localColeta: req.body.localColeta,
        data: req.body.data
    });

    try {
        const doacao = await newDoacao.save();
        res.send(doacao);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocorreu um erro ao criar a doação"
        });
    }
};

exports.getAllDoacoes = async (req, res) => {
    try {
        const doacoes = await Doacao.find();
        res.send(doacoes);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocorreu um erro ao recuperar as doações"
        });
    }
};

exports.getDoacaoById = async (req, res) => {
    try {
        const doacao = await Doacao.findById(req.params.id).populate('pessoa').populate('localColeta');
        if (!doacao) {
            return res.status(404).send({
                message: "Doação não encontrada com o id " + req.params.id
            });
        }
        res.send(doacao);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Doação não encontrada com o id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Erro ao recuperar a doação com o id " + req.params.id
        });
    }
};

exports.updateDoacaoById = async (req, res) => {
    try {
        const doacao = await Doacao.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!doacao) {
            return res.status(404).send({
                message: "Doação não encontrada com o id " + req.params.id
            });
        }
        res.send(doacao);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Doação não encontrada com o id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Erro ao atualizar doação com o id " + req.params.id
        });
    }
};

exports.deleteDoacaoById = async (req, res) => {
    try {
        const doacao = await Doacao.findByIdAndRemove(req.params.id);
        if (!doacao) {
            return res.status(404).send({
                message: "Doação não encontrada com o id " + req.params.id
            });
        }
        res.send({ message: "Doação excluída com sucesso!" });
    } catch (err) {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Doação não encontrada com o id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Não foi possível excluir a doação com o id " + req.params.id
        });
    }
};
