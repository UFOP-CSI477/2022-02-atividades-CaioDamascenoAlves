const mongoose = require('mongoose');
const { Schema } = mongoose;

const PessoaSchema = new Schema({
  nome:{ type: String, maxlength: 50, required: true },
  rua: {
    type: String,
    required: true
  },
  numero: {
    type: Number,
    required: true
  },
  complemento: {
    type: String
  },
  documento: {
    type: String,
    required: true
  },
  tipo_sanguineo: {
    type: Schema.Types.ObjectId,
    ref: 'TipoSanguineo'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
},{
	timestamps: true,
  	collection: 'pessoas',
});

const Pessoa = mongoose.model('Pessoa', PessoaSchema);
module.exports = Pessoa;