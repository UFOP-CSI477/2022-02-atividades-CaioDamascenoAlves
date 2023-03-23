import PetService from "@/services/PetService";

export default {
  name: "HomeComponent",
  data() {
    return {
      pets: [],
    };
  },
  methods: {
    async getAllPets() {
      try {
        const response = await PetService.GetAllPetsCached();
        this.pets = response.pets;
      } catch (error) {
        console.error(error);
        swal({
          title: "Oops!",
          text: "Não foi possível carregar os dados de Pet.",
          icon: "error",
        });
      }
    },
    navigateToAdocao(pet) {
      this.$router.push({ path: "/createAdocao", query: { pet } });
    },
  },

  mounted() {
    this.getAllPets();
  },
};
