import swal from "sweetalert";
import { required } from "vuelidate/lib/validators";
import DoacaoService from "@/services/DoacaoService";

export default {
  name: "EditDoacaoComponent",
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
    updateSubmitDoacaoForm() {},

    async submitUpdateDoacao() {
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

        await DoacaoService.UpdateDoacao(this.doacaoForm);
        this.$router.push("/profile");
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
