import swal from "sweetalert";
import { required } from "vuelidate/lib/validators";
import PetService from "@/services/PetService";

export default {
  name: "CreatePetComponent",
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
    createSubmitPetForm() {},

    async submitCreatePet() {
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

        await PetService.CreatePet(this.petForm);
        this.$router.push("/createDoacao");
      } catch (error) {
        swal({
          title: "Oops!",
          text: "Alguma coisa deu errado aqui!",
          icon: "error",
        });
      }
    },
  },
};
