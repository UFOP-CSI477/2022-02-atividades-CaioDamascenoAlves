const mongoose = require('mongoose');
const { Schema } = mongoose;

const TipoSanguineoSchema = new Schema({
	tipo: {
    type: String,
    required: true
  },
  fator: {
    type: String,
    required: true
  },
  
},{
	timestamps: true,
  	collection: 'tipos',
});

const TipoSanguineo = mongoose.model('TipoSanguineo', TipoSanguineoSchema);
module.exports = TipoSanguineo;