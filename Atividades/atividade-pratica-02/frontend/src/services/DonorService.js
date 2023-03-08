import swal from "sweetalert";
import Api from "./Api";

export default {
  /**
   * Método responsável por criar uma nova pessoa
   * (POST): localhost:3000/api/v1/pessoa
   */
  async CreateDonor(pessoa) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().post("/pessoa", pessoa, {
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

  async GetDonor() {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().get("/pessoa", {
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

  async UpdateDonor(pessoa) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().put("/pessoa", pessoa, {
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
