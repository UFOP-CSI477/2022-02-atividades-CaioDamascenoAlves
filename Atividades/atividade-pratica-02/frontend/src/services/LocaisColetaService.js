import swal from "sweetalert";
import Api from "./Api";

export default {
  /**
   * Método responsável por criar uma nova pessoa
   * (POST): localhost:3000/api/v1/pessoa
   */
  async CreateLocalColeta(locais_coleta) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().post("/local_coleta", locais_coleta);
      const { message } = response.data;

      swal({
        title: "Sucesso!",
        text: message,
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Oops!",
        text: "Alguma coisa deu errado aqui!",
        icon: "error",
      });
    }
  },

  async GetLocalColeta() {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().get("/local_coleta", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      swal({
        title: "Oops!",
        text: "Alguma coisa deu errado aqui!",
        icon: "error",
      });
    }
  },

  async UpdateLocaisColeta(locais_coleta) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().put("/locais_coleta", locais_coleta, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { message } = response.data;

      swal({
        title: "Sucesso!",
        text: message,
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Oops!",
        text: "Alguma coisa deu errado aqui!",
        icon: "error",
      });
    }
  },
};
