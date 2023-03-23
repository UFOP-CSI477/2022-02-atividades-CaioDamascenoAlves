import swal from "sweetalert";
import { required } from "vuelidate/lib/validators";
import PetService from "@/services/PetService";

export default {
  name: "EditPetComponent",
  data() {
    return {
      petForm: {
        nome: null,
        idade: null,
        tipo: null,
        raca: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    petForm: {
      nome: { required },
      idade: { required },
      tipo: { required },
      raca: { required },
    },
  },
  methods: {
    updateSubmitPetForm() {},
	
    async created() {
      try {
        const pessoa = await PetService.GetPet();
        this.pessoaForm = pessoa.data;
      } catch (error) {
        swal({
          title: "Oops!",
          text: "Não foi possível obter os dados de Perfil!",
          icon: "error",
        });
      }
    },
    async updatePetForm() {
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

        await PetService.UpdatePet(this.petForm);
        this.$router.push("/profile");
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
