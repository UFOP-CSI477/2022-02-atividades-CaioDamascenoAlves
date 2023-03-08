import swal from 'sweetalert';
import { required } from 'vuelidate/lib/validators';
import TipoSanguineoService from '@/services/TipoSanguineoService';

export default {
  name: 'EditTipoSanguineoComponent',
  data() {
    return {
      tipoSanguineoForm: {
        tipo: null,
        fator: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    tipoSanguineoForm: {
      tipo: { required },
      fator: { required },
    },
  },
  async created() {
    try {
      const tipoSanguineo = await TipoSanguineoService.GetTipoSanguineo();
      this.tipoSanguineoForm = tipoSanguineo.data;
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Não foi possível obter os dados do tipo sanguíneo!',
        icon: 'error',
      });
    }
  },
  methods: {
    async updateTipoSanguineoForm() {
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

        await TipoSanguineoService.UpdateTipoSanguineo(this.tipoSanguineoForm);
        this.$router.push('/home');
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Não foi possível atualizar os dados do tipo sanguíneo!',
          icon: 'error',
        });
      }
    },
  },
};
