import swal from 'sweetalert';
import { required } from 'vuelidate/lib/validators';
import CreatePessoa from '@/services/DonorService';

export default {
  name: 'DonorComponent',
  data() {
    return {
		donorForm: {
        nome: null,
        rua: null,
        numero: null,
        complemento: null,
        documento: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    donorForm: {
		nome: { required },
    	rua: { required },
    	numero: { required },
    	complemento: { required },
    	documento: { required },
    },
  },
  methods: {
    createSubmitDonorForm() {},

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

        await CreatePessoa.CreateDonor(this.donorForm);
        this.$router.push('/profile');
      } catch (error) {
        swal({
          title: 'Senha Incorreta!',
          text: 'Digite a senha cadastrada!',
          icon: 'error',
        });
      }
    },
  },
};
