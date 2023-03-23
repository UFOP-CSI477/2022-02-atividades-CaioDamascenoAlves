import DoacaoService from "@/services/DoacaoService";
import AdocaoService from "@/services/AdocaoService";
import swal from "sweetalert";
import { required } from "vuelidate/lib/validators";

export default {
  name: "CreateAdocaoComponent.vue",
  data() {
    return {
      adocaoForm: {
        data: null,
      },
      isSubmitted: false,
      doacao: {},
      
    };
  },

  validations: {
    adocaoForm: {
      data: { required },
    },
  },

  methods: {
    async getDoacao() {
      try {
        const response = await DoacaoService.GetDoacao();
        this.doacao = response.data;
        // console.log(response);
      } catch (error) {
        console.error(error);
        // swal({
        //   title: "Oops!",
        //   text: "Não foi possível carregar os dados do Pet.",
        //   icon: "error",
        // });
      }
    },

    createSubmitAdocaoForm() {},

    async submitCreateAdocao() {
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

        await AdocaoService.CreateAdocao(this.adocaoForm );
        this.$router.push("/home");
      } catch (error) {
        // swal({
        //   title: "Oops!",
        //   text: "Alguma coisa deu errado aqui!",
        //   icon: "error",
        // });
      }
    },

  },

  created() {
    this.getDoacao();
  },
};
