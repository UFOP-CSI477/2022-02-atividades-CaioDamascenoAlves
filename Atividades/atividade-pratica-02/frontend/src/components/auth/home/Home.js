import LocaisColetaService from "@/services/LocaisColetaService";

export default {
  name: "HomeComponent",
  data() {
    return {
      locais: [],
    };
  },
  methods: {
    async getAllLocais() {
      try {
        const response = await LocaisColetaService.GetLocalColeta();
        this.locais = response;
      } catch (error) {
        console.error(error);
        swal({
          title: "Oops!",
          text: "Não foi possível carregar os dados de Pet.",
          icon: "error",
        });
      }
    },
  },

  mounted() {
    this.getAllLocais();
  },
};
