import VueJwtDecode from "vue-jwt-decode";
import GetTipoSanguineo from "@/services/TipoSanguineoService";
import GetDonor from "@/services/DonorService";

export default {
  name: "HomeComponent",
  data() {
    return {
      user: {},
      tiposSanguineos: {},
      donor: {},
    };
  },

  methods: {
    async getUser() {
      const token = localStorage.getItem("jwt");
      const tokenDecoded = VueJwtDecode.decode(token);
      this.user = tokenDecoded;
    },
    async getTiposSanguineos() {
      try {
        const tiposSanguineos = await GetTipoSanguineo.GetTipoSanguineo();
        this.tiposSanguineos = tiposSanguineos.data;
      } catch (error) {
        swal({
          title: "Oops!",
          text: "Alguma coisa deu errado aqui!",
          icon: "error",
        });
      }
    },

    async getDonor() {
      try {
        const donor = await GetDonor.GetDonor();
        this.donor = donor.data;
      } catch (error) {
        swal({
          title: "Oops!",
          text: "Alguma coisa deu errado aqui!",
          icon: "error",
        });
      }
    },

    navigateToUpdateTipoSanguineo() {
      this.$router.push("/updateTipoSanguineo");
    },
    navigateToUpdateDonor() {
      this.$router.push("/updateDonor");
    },

    logOutUser() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  },
  created() {
    this.getUser();
    this.getTiposSanguineos();
    this.getDonor();
  },
};
