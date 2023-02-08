const TipoSanguineo = require('../models/tipoSanguineo.model');

exports.createTipoSanguineo = async (req, res) => {
    try {
        const novoTipo = new TipoSanguineo({
            tipo: req.body.tipo,
            fator: req.body.fator,
        });
        const tipo = await novoTipo.save();
        res.send(tipo);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Erro ao salvar o tipo sanguineo."
        });
    }
};

exports.getAllTiposSanguineos = async (req, res) => {
    try {
        const tipos = await TipoSanguineo.find();
        res.send(tipos);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Erro ao recuperar os tipos sanguineos."
        });
    }
};

exports.getTipoSanguineoById = async (req, res) => {
    try {
        const tipo = await TipoSanguineo.findById(req.params.id);
        if(!tipo) {
            return res.status(404).send({
                message: "Tipo Sanguineo não encontrado com o id " + req.params.id
            });
        }
        res.send(tipo);
    } catch (err) {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Tipo Sanguineo não encontrado com o id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Erro ao recuperar o tipo sanguineo com o id " + req.params.id
        });
    }
};

exports.updateTipoSanguineoById = async (req, res) => {
    try {
        const tipo = await TipoSanguineo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!tipo) {
            return res.status(404).send({
                message: "Tipo Sanguineo não encontrado com o id " + req.params.id
            });
        }
        res.send(tipo);
    } catch (err) {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Tipo Sanguineo não encontrado com o id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Erro ao atualizar o tipo sanguineo com o id " + req.params.id
        });
    }
};

exports.deleteTipoSanguineoById = async (req, res) => {
    try {
        const tipo = await TipoSanguineo.findByIdAndRemove(req.params.id);
        if(!tipo) {
            return res.status(404).send({
                message: "Tipo Sanguineo não encontrado com o id " + req.params.id
            });
        }
        res.send({ message: "Tipo Sanguineo deletado com sucesso!" });
    } catch (err) {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Tipo Sanguineo não encontrado com o id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Não foi possível deletar o tipo sanguineo com o id " + req.params.id
        });
    }
};
