import swal from "sweetalert";
import { required } from "vuelidate/lib/validators";
import PessoaService from "@/services/PessoaService";

export default {
  name: "EditPessoaComponent",
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
	updateSubmitPessoaForm() {},
    async created() {
      try {
        const pessoa = await PessoaService.GetPessoa();
        this.pessoaForm = pessoa.data;
      } catch (error) {
        swal({
          title: "Oops!",
          text: "Não foi possível obter os dados de Perfil!",
          icon: "error",
        });
      }
    },
    async updatePessoaForm() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: "Oops!",
            text: "Você precisa incluir todos os campos obrigatórios!",
            icon: "error",
          });
          return;
        }

        await PessoaService.UpdatePessoa(this.pessoaForm);
        this.$router.push("/profile");
      } catch (error) {
        swal({
          title: "Oops!",
          text: "Não foi possível atualizar os dados do tipo sanguíneo!",
          icon: "error",
        });
      }
    },
  },
};
