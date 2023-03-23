import swal from 'sweetalert';
import { required } from 'vuelidate/lib/validators';
import PessoaService from '@/services/PessoaService';

export default {
  name: 'CreatePessoaComponent',
  data() {
    return {
		pessoaForm: {
        rua: null,
        numero: null,
        complemento: null,
        documento: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    pessoaForm: {
    	rua: { required },
    	numero: { required },
    	complemento: { required },
    	documento: { required },
    },
  },
  methods: {
    createSubmitPessoaForm() {},

    async submitCreatePessoa() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios!',
            icon: 'error',
          });
          return;
        }

        await PessoaService.CreatePessoa(this.pessoaForm);
        this.$router.push('/');
      } catch (error) {
        swal({
          title: 'Algo deu errado aqui!',
          text: 'Verifique os Dados inseridos!',
          icon: 'error',
        });
      }
    },
  },
};
