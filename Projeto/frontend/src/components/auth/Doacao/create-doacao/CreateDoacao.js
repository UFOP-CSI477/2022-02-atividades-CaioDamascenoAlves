import swal from "sweetalert";
import { required } from "vuelidate/lib/validators";
import DoacaoService from "@/services/DoacaoService";

export default {
  name: "CreateDoacaoComponent",
  data() {
    return {
      doacaoForm: {
        data: null,

      },
      isSubmitted: false,
    };
  },
  validations: {
    doacaoForm: {
      data: { required },

    },
  },	
  methods: {
    createSubmitDoacaoForm() {},

    async submitCreateDoacao() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: "Oops!",
            text: "Você precisa incluir todos os campos obrigatórios",
            icon: "error",
          });
          return;
        }

        await DoacaoService.CreateDoacao(this.doacaoForm);
        this.$router.push("/home");
      } catch (error) {
        swal({
          title: "Oops!",
          text: "Alguma coisa deu errado aqui!",
          icon: "error",
        });
      }
    },
  },
};
