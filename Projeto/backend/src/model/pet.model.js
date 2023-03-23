const mongoose = require("mongoose");

const { Schema } = mongoose;

const petSchema = new Schema(
  {
    nome: { type: String, maxlength: 50, required: true },
    idade: { type: Number, required: true },
    tipo: { type: String, required: true },
    raca: { type: String, required: true },
    pessoa: {
      type: Schema.Types.ObjectId,
      ref: "Pessoa",
    },
    adotado: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: "pets",
  }
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
