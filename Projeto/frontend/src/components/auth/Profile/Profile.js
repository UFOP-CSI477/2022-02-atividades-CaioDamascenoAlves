import VueJwtDecode from "vue-jwt-decode";
import PessoaService from "@/services/PessoaService";
import PetService from "@/services/PetService";
import DoacaoService from "@/services/DoacaoService";
import AdocaoService from "@/services/AdocaoService";

export default {
  name: "ProfileComponent.vue",
  data() {
    return {
      user: {},
      pessoa: {},
      pet: {},
      doacao: {},
      adocao: {},
    };
  },
  methods: {
    getUser() {
      const token = localStorage.getItem("jwt");
      const tokenDecoded = VueJwtDecode.decode(token);
      this.user = tokenDecoded;
    },
    async getPessoa() {
      try {
        const response = await PessoaService.GetPessoa();
        this.pessoa = response.pessoa;
      } catch (error) {
        console.error(error);
        // swal({
        //   title: "Oops!",
        //   text: "Não foi possível carregar os dados da Pessoa.",
        //   icon: "error",
        // });
      }
    },

    async deletarPessoa() {
      try {
        const confirmacao = await swal({
          title: "Você tem certeza?",
          text: "Uma vez deletado, você não poderá voltar atrás!",
          icon: "warning",
          buttons: ["Cancelar", "Deletar"],
          dangerMode: true,
        });

        if (confirmacao) {
          const response = await PessoaService.DeletePessoa(
            this.$route.params.id
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
    async deletarPet() {
      try {
        const confirmacao = await swal({
          title: "Você tem certeza?",
          text: "Uma vez deletado, você não poderá voltar atrás!",
          icon: "warning",
          buttons: ["Cancelar", "Deletar"],
          dangerMode: true,
        });

        if (confirmacao) {
          const response = await PetService.DeletePet(this.$route.params.id);
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
    async deletarDoacao() {
      try {
        const confirmacao = await swal({
          title: "Você tem certeza?",
          text: "Uma vez deletado, você não poderá voltar atrás!",
          icon: "warning",
          buttons: ["Cancelar", "Deletar"],
          dangerMode: true,
        });

        if (confirmacao) {
          const response = await DoacaoService.DeleteDoacao(
            this.$route.params.id
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

    async getPet() {
      try {
        const response = await PetService.GetPet();
        this.pet = response.pet;
      } catch (error) {
        console.error(error);
        // swal({
        //   title: "Oops!",
        //   text: "Não foi possível carregar os dados da Pet.",
        //   icon: "error",
        // });
      }
    },

    async getDoacao() {
      try {
        const response = await DoacaoService.GetDoacao();
        this.doacao = response;
        console.log(response);
        console.log(this.doacao);
      } catch (error) {
        console.error(error);
        // swal({
        //   title: "Oops!",
        //   text: "Não foi possível carregar os dados do Pet.",
        //   icon: "error",
        // });
      }
    },
    async getAdocao() {
      try {
        const response = await AdocaoService.GetAdocao();
        this.adocao = response;
      } catch (error) {
        console.error(error);
        // swal({
        //   title: "Oops!",
        //   text: "Não foi possível carregar os dados de Adoção.",
        //   icon: "error",
        // });
      }
    },

    navigateToUpdatePessoa() {
      this.$router.push("/updatePessoa");
    },
    navigateToUpdatePet() {
      this.$router.push("/updatePet");
    },
    navigateToUpdateDoacao() {
      this.$router.push("/updateDoacao");
    },
    navigateToDeletePessoa() {
      this.$router.push("/deletePessoa");
    },
  },

  mounted() {
    this.getUser();
    this.getPessoa();
    this.getPet();
    this.getDoacao();
    this.getAdocao();
  },
};
