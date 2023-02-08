const mongoose = require('mongoose');
const { Schema } = mongoose;

const PessoaSchema = new Schema({
  nome:{ type: String, maxlength: 50, required: true },
  email: { type: String, maxlength: 30, required: true },
  password: { type: String, required: true },
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
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
},{
	timestamps: true,
  	collection: 'pessoas',
});

// ==> Esse método irá fazer o 'hash' da senha antes de salvar o modelo da classe 'User'
PessoaSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
      return next();
    }
    try {
      const hash = await bcrypt.hash(user.password, 8);
      user.password = hash;
      next();
    } catch (error) {
      next(error);
    }
});

// ==> Esse método irá criar (gerar) uma autenticação auth para o 'User'
userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, 'secret');
	user.tokens = user.tokens.concat({ token });
	await user.save();
	return token;
  };
  
  // ==> Esse método irá fazer uma pesquisa por um 'user' por 'email' e 'password'
  userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });
	console.log(user);
	if (!user) {
	  throw new Error({ error: 'Login inválido!' });
	}
	const isPasswordMatch = await bcrypt.compare(password, user.password);
	if (!isPasswordMatch) {
	  throw new Error({ error: 'Login inválido!' });
	}
	return user;
  };
  



const Pessoa = mongoose.model('Pessoa', PessoaSchema);
module.exports = Pessoa;