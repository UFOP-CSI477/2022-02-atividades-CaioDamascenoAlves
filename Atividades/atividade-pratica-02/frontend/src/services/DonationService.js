import swal from "sweetalert";
import Api from "./Api";

export default {
  /**
   * Método responsável por criar uma nova pessoa
   * (POST): localhost:3000/api/v1/pessoa
   */
  async CreateDonation(doacao) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().post("/doacao", doacao, {
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

  async GetDonation() {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().get("/doacao", {
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

  async UpdateDonatioin(doacao) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().put("/doacao", doacao, {
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
