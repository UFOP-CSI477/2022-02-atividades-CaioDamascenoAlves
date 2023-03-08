import swal from "sweetalert";
import { required } from "vuelidate/lib/validators";
import DonorService from "@/services/DonorService";

export default {
  name: "EditDonorComponent",
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
  async created() {
    try {
      const donor = await DonorService.GetDonor();
      this.donorForm = donor.data;
    } catch (error) {
      swal({
        title: "Oops!",
        text: "Não foi possível obter os dados de Perfil!",
        icon: "error",
      });
    }
  },
  methods: {
    async updateDonorForm() {
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

        await DonorService.UpdateDonor(this.donorForm);
        this.$router.push("/home");
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
