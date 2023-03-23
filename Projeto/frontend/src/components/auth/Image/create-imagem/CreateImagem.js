import { required } from "vuelidate/lib/validators";
import ImagemService from "@/services/ImagemService";

export default {
  name: "CreateImagemComponent",
  data() {
    return {
      imageForm: { imagem: null },
      isSubmitted: false,
    };
  },
  validations: {
	imageForm: { imagem: {required} },
  },
  methods: {
	createSubmitImagemForm() {},

    async submitCreateImagem() {
      try {
        this.isSubmitted = true;
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        await ImagemService.CreateImagem(this.imageForm);
        this.$router.push("/createDoacao");
      } catch (error) {
        console.log(error);
        swal({
          title: "Algo deu errado aqui!",
          text: "Verifique os Dados inseridos!",
          icon: "error",
        });
      }
    },
  },
};

