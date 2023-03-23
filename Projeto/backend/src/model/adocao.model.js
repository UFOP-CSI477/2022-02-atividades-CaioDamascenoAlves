const mongoose = require("mongoose");

const { Schema } = mongoose;

const adocaoSchema = new Schema(
  {
    data: { type: Date, required: true },
    doacao: {
      type: Schema.Types.ObjectId,
      ref: "Doacao",
    },
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	}
  },
  {
    timestamps: true,
    collection: "adocoes",
  }
);

const Adocao = mongoose.model("Adocao", adocaoSchema);

module.exports = Adocao;
