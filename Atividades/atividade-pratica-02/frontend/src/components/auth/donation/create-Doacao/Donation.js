import swal from "sweetalert";
import { required } from "vuelidate/lib/validators";
import DonationService from "@/services/DonationService";

export default {
  name: "DonationComponent",
  data() {
    return {
      donationForm: {
        data: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    donationForm: {
      data: { required },
    },
  },
  methods: {
    CreateSubmitDonationForm() {},

    async submitDonationForm() {
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

        await DonationService.CreateDonation(this.donationForm);
        this.$router.push("/home");
      } catch (error) {
        swal({
          title: "Digite os campos correatmente!",
          text: "Digite os campos!",
          icon: "error",
        });
      }
    },

    async UpdateSubmitDonationForm() {
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

        const donationId = this.$route.params.id;
        await DonationService.UpdateTipoSanguineo(
          donationId,
          this.donationForm
        );
        this.$router.push("/createDonation");
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
