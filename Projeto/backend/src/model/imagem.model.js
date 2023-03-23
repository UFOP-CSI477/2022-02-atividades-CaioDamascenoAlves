const mongoose = require("mongoose");

const { Schema } = mongoose;

const imagemSchema = new Schema(
  {
    nome: { type: String, },
    path: { type: String, },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    collection: "imagens",
  }
);

const Imagem = mongoose.model("Imagem", imagemSchema);

module.exports = Imagem;
