import VueJwtDecode from "vue-jwt-decode";
import TipoSanguineoService from "@/services/TipoSanguineoService";
import DonorService from "@/services/DonorService";

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
        const tiposSanguineos = await TipoSanguineoService.GetTipoSanguineo();
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
        const donor = await DonorService.GetDonor();
        this.donor = donor.data;
      } catch (error) {
        swal({
          title: "Oops!",
          text: "Alguma coisa deu errado aqui!",
          icon: "error",
        });
      }
    },

    async deleteDonor() {
      try {
        const confirmacao = await swal({
          title: "Você tem certeza?",
          text: "Uma vez deletado, você não poderá voltar atrás!",
          icon: "warning",
          buttons: ["Cancelar", "Deletar"],
          dangerMode: true,
        });

        if (confirmacao) {
          const response = await DonorService.DeleteDonor(
            this.$route.params._id
          );
          console.log(response);
          // aqui você pode fazer algo com a resposta, por exemplo exibir uma mensagem de sucesso
        } else {
          swal("Operação cancelada!");
        }
      } catch (error) {
        console.error(error);
        // aqui você pode exibir uma mensagem de erro para o usuário
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
