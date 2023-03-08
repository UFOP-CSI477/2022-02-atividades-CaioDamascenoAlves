import swal from "sweetalert";
import { required } from "vuelidate/lib/validators";
import LocaisColetaService from "@/services/LocaisColetaService";

export default {
  name: "CreateLocaisColeta",
  data() {
    return {
      locais_coletaForm: {
        nome: null,
        rua: null,
        numero: null,
        complemento: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    locais_coletaForm: {
      nome: { required },
      rua: { required },
      numero: { required },
      complemento: { required },
    },
  },
  methods: {
    createSubmitLocaisColetaForm() {},

    async submitCreateLocalColeta() {
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

        await LocaisColetaService.CreateLocalColeta(this.locais_coletaForm);
        this.$router.push("/createDonation");
      } catch (error) {
        swal({
          title: "Senha Incorreta!",
          text: "Digite a senha cadastrada!",
          icon: "error",
        });
      }
    },
  },
};
