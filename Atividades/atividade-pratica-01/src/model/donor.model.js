const mongoose = require("mongoose");
const { Schema } = mongoose;

const PessoaSchema = new Schema(
  {
    nome: { type: String, maxlength: 50, required: true },
    rua: {
      type: String,
      required: true,
    },
    numero: {
      type: Number,
      required: true,
    },
    complemento: {
      type: String,
    },
    documento: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
	  required: true,
    },
    tipo: {
      type: Schema.Types.ObjectId,
      ref: "TipoSanguineo",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "pessoas",
  }
);

const Pessoa = mongoose.model("Pessoa", PessoaSchema);
module.exports = Pessoa;
