const mongoose = require("mongoose");
const { Schema } = mongoose;

const DoacaoSchema = new Schema(
  {
    data: {
      type: Date,
      required: true,
    },
    pessoa: {
      type: Schema.Types.ObjectId,
      ref: "Pessoa",
      required: true,
    },
    local: {
      type: Schema.Types.ObjectId,
      ref: "LocalColeta",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "locaisColeta",
  }
);

const Doacao = mongoose.model("Doacao", DoacaoSchema);
module.exports = Doacao;
