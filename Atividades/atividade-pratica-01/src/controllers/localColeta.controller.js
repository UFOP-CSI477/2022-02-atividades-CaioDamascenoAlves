const LocalColeta = require('../models/localColeta.model');

exports.createLocalColeta = async (req, res) => {
    try {
        const novoLocal = new LocalColeta({
            nome: req.body.nome,
            rua: req.body.rua,
            numero: req.body.numero,
            complemento: req.body.complemento,
            cidade: req.body.cidade,
        });
        const local = await novoLocal.save();
        res.send(local);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Erro ao salvar o local de coleta."
        });
    }
};

exports.getAllLocaisColeta = async (req, res) => {
    try {
        const locais = await LocalColeta.find();
        res.send(locais);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Erro ao recuperar os locais de coleta."
        });
    }
};

exports.getLocalColetaById = async (req, res) => {
    try {
        const local = await LocalColeta.findById(req.params.id);
        if(!local) {
            return res.status(404).send({
                message: "Local de coleta não encontrado com o id " + req.params.id
            });
        }
        res.send(local);
    } catch (err) {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Local de coleta não encontrado com o id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Erro ao recuperar o local de coleta com o id " + req.params.id
        });
    }
};

exports.getLocalColetaByNome = async (req, res) => {
    try {
        const local = await LocalColeta.findOne({nome: req.params.nome});
        if(!local) {
            return res.status(404).send({
                message: "Local de coleta não encontrado com o nome " + req.params.nome
            });
        }
        res.send(local);
    } catch (err) {
        return res.status(500).send({
            message: "Erro ao recuperar o local de coleta com o nome " + req.params.nome
        });
    }
};

// Update local de coleta pelo ID
exports.updateLocalColetaById = async (req, res) => {
    try {
        const local = await LocalColeta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!local) {
            return res.status(404).send({
                message: "Local de coleta não encontrado com o id " + req.params.id
            });
        }
        res.send(local);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Local de coleta não encontrado com o id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Erro ao atualizar o local de coleta com o id " + req.params.id
        });
    }
};

exports.deleteLocalColetaById = async (req, res) => {
    try {
        const local = await LocalColeta.findById(req.params.id);
        if (!local) {
            return res.status(404).send({
                message: "Local de coleta não encontrado com o id " + req.params.id
            });
        }
        await local.remove();
        res.send({ message: "Local de coleta deletado com sucesso!" });
    } catch (err) {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Local de coleta não encontrado com o id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Não foi possível deletar o local de coleta com o id " + req.params.id
        });
    }
};