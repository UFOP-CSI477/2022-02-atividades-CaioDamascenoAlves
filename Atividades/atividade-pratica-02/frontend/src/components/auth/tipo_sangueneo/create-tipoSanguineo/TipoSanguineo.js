import swal from "sweetalert";
import { required } from "vuelidate/lib/validators";
import TipoSanguineoService from "@/services/TipoSanguineoService";

export default {
  name: "TipoSanguineoComponent",
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
  methods: {
    CreateSubmitTipoSanguineoForm() {},

    async submitTipoSanguineoForm() {
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

        await TipoSanguineoService.CreateTipoSanguineo(this.tipoSanguineoForm);
        this.$router.push("/createDonor");
      } catch (error) {
        swal({
          title: "Digite os campos correatmente!",
          text: "Digite os campos!",
          icon: "error",
        });
      }
    },

    async UpdateSubmitTipoSanguineoForm() {
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

        const tipoSanguineoId = this.$route.params.id;
        await TipoSanguineoService.UpdateTipoSanguineo(
          tipoSanguineoId,
          this.tipoSanguineoForm
        );
        this.$router.push("/createDonor");
      } catch (error) {
        swal({
          title: "Digite os campos correatmente!",
          text: "Digite os campos!",
          icon: "error",
        });
      }
    },
  },
};
