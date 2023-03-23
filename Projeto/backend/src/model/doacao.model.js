const mongoose = require("mongoose");

const { Schema } = mongoose;

const doacaoSchema = new Schema(
  {
    data: {
      type: Date,
      required: true,
    },
    pet: {
      type: Schema.Types.ObjectId,
      ref: "Pet",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pessoa: {
      type: Schema.Types.ObjectId,
      ref: "Pessoa",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "doacoes",
  }
);

const Doacao = mongoose.model("Doacao", doacaoSchema);

module.exports = Doacao;
